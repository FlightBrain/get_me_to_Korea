#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/../deeper"

echo "== syntax =="
node --check app.js
node --check content-packs.js
node --check content-expansions.js
node --check content-megapack.js
python3 -m json.tool vercel.json >/dev/null

echo "== required files =="
for file in index.html app.js content-packs.js content-expansions.js content-megapack.js styles.css vercel.json README.md; do
  test -f "$file" || { echo "missing $file"; exit 1; }
done

echo "== html asset refs =="
while read -r asset; do
  test -n "$asset" || continue
  test -f "$asset" || { echo "broken ref: $asset"; exit 1; }
done < <(python3 - <<'PY'
from html.parser import HTMLParser

class Parser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.assets = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        for key in ("href", "src"):
            value = attrs.get(key)
            if value and value.startswith("./"):
                self.assets.append(value[2:])

parser = Parser()
parser.feed(open("index.html", encoding="utf-8").read())
print("\n".join(parser.assets))
PY
)

echo "== app selectors =="
python3 - <<'PY'
import re
html = open("index.html", encoding="utf-8").read()
js = open("app.js", encoding="utf-8").read()
ids = set(re.findall(r'id="([^"]+)"', html))
selectors = {
    selector[1:]
    for selector in re.findall(r'\$\("([^"]+)"\)', js)
    if selector.startswith("#")
}
missing = sorted(selectors - ids)
if missing:
    raise SystemExit("missing ids: " + ", ".join(missing))
print("selectors ok")
PY

echo "== module imports =="
python3 - <<'PY'
import re
from pathlib import Path
js = Path("app.js").read_text(encoding="utf-8")
missing = []
for path in re.findall(r'from "(\./[^"]+)"', js):
    if not Path(path[2:]).exists():
        missing.append(path)
if missing:
    raise SystemExit("missing imports: " + ", ".join(missing))
print("imports ok")
PY

echo "== css braces =="
python3 - <<'PY'
css = open("styles.css", encoding="utf-8").read()
if css.count("{") != css.count("}"):
    raise SystemExit("css brace mismatch")
print("css braces ok")
PY

echo "OK"
