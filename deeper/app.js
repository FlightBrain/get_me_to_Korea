const $ = (selector) => document.querySelector(selector);

const elements = {
  homePanel: $("#homePanel"),
  explorePanel: $("#explorePanel"),
  launchForm: $("#launchForm"),
  sparkInput: $("#sparkInput"),
  randomPortalButton: $("#randomPortalButton"),
  savedButton: $("#savedButton"),
  savedDialog: $("#savedDialog"),
  closeSavedButton: $("#closeSavedButton"),
  savedList: $("#savedList"),
  depthValue: $("#depthValue"),
  modeValue: $("#modeValue"),
  signalValue: $("#signalValue"),
  trailList: $("#trailList"),
  placeType: $("#placeType"),
  placeCode: $("#placeCode"),
  placeTitle: $("#placeTitle"),
  placeBody: $("#placeBody"),
  artifactText: $("#artifactText"),
  ruleText: $("#ruleText"),
  whisperText: $("#whisperText"),
  choiceGrid: $("#choiceGrid"),
  rerollButton: $("#rerollButton"),
  savePlaceButton: $("#savePlaceButton"),
  copyLinkButton: $("#copyLinkButton"),
  toast: $("#toast")
};

const banks = {
  dream: {
    places: ["mirror orchard", "sleep station", "paper moon", "clock garden", "velvet elevator", "rain chapel"],
    beings: ["moth librarian", "brass gardener", "quiet giant", "fox with star maps", "choir of umbrellas"],
    objects: ["key made of fog", "book that hums", "jar of tomorrow", "map with moving streets", "lantern full of tiny tides"],
    rules: ["Names become doors when spoken twice.", "Every shadow points toward a memory.", "Questions are lighter than answers here."],
    signals: ["hushed", "glowing", "drowsy", "silver", "impossible"]
  },
  museum: {
    places: ["gallery of lost seconds", "archive below the stairs", "forbidden exhibit", "cabinet of unfinished maps", "hall of almosts"],
    beings: ["curator of echoes", "security guard made of dust", "painting that blinks", "ticket taker from 1890"],
    objects: ["cracked planet model", "mask that remembers faces", "receipt from the future", "fossilized laugh", "black glass compass"],
    rules: ["Do not read the plaques after midnight.", "Every artifact adds one minute to the building.", "The exits rearrange for repeat visitors."],
    signals: ["cataloged", "marble", "dusty", "uncanny", "sealed"]
  },
  game: {
    places: ["neon dungeon", "tiny dragon market", "arcade below the ocean", "boss room with no boss", "checkpoint shrine"],
    beings: ["merchant crab", "sleepy dragon", "glitched knight", "oracle vending machine", "frog pilot"],
    objects: ["coin that buys luck", "pocket storm", "helmet of bad ideas", "sword called maybe", "map cartridge"],
    rules: ["Every item has a secret use three rooms later.", "The smallest enemy knows the biggest shortcut.", "Saving here changes the weather."],
    signals: ["charged", "rare", "pixel", "lucky", "boss-level"]
  },
  cosmic: {
    places: ["moon library", "asteroid conservatory", "black hole cafe", "station at the edge of sleep", "planet of unlocked doors"],
    beings: ["astronaut ghost", "nebula whale", "robot monk", "star cartographer", "alien child with a radio"],
    objects: ["teacup full of constellations", "gravity bell", "postcard from the void", "helmet recording dreams", "orbiting seed"],
    rules: ["Distance is measured in songs.", "Gravity listens when you whisper.", "Every orbit leaves a sentence behind."],
    signals: ["stellar", "cold", "radio", "ancient", "wide-awake"]
  }
};

const moods = [
  "curious",
  "haunted",
  "playful",
  "bright",
  "secret",
  "electric",
  "ancient",
  "tiny",
  "vast",
  "soft"
];

const verbs = [
  "enter",
  "follow",
  "unlock",
  "listen to",
  "trade with",
  "wake",
  "decode",
  "befriend",
  "borrow",
  "open"
];

const endings = [
  "behind the blue door",
  "under the humming floor",
  "where the lights bend",
  "inside the next question",
  "past the sleeping sign",
  "through the little storm",
  "below the backwards stairs",
  "beside the impossible window"
];

const accents = [
  ["#ff6fd8", "#62e8ff"],
  ["#8f7cff", "#ffd36a"],
  ["#8dffb3", "#62e8ff"],
  ["#ff9f6e", "#8f7cff"],
  ["#e879f9", "#38bdf8"]
];

let currentPlace = null;
let toastTimer = null;

function hashString(input) {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function makeRng(seed) {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let next = value;
    next = Math.imul(next ^ (next >>> 15), next | 1);
    next ^= next + Math.imul(next ^ (next >>> 7), next | 61);
    return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(rng, list) {
  return list[Math.floor(rng() * list.length)];
}

function titleCase(text) {
  return text.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 72);
}

function getParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    seed: params.get("seed"),
    mode: params.get("mode") || "dream",
    depth: Number.parseInt(params.get("depth") || "0", 10),
    spark: params.get("spark") || "",
    trail: params.get("trail") ? params.get("trail").split("|").filter(Boolean) : [],
    reroll: params.get("reroll") || "0"
  };
}

function navigateToPlace({ seed, mode, depth, spark, trail, reroll = "0" }) {
  const params = new URLSearchParams({
    seed,
    mode,
    depth: String(depth),
    spark,
    trail: trail.join("|"),
    reroll: String(reroll)
  });
  window.history.pushState({}, "", `?${params.toString()}`);
  renderFromUrl();
}

function randomSeed(prefix = "portal") {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 999999)}`;
}

function createPlace({ seed, mode, depth, spark, trail, reroll }) {
  const safeMode = banks[mode] ? mode : "dream";
  const bank = banks[safeMode];
  const rng = makeRng(hashString(`${seed}:${safeMode}:${depth}:${spark}:${reroll}`));
  const mood = pick(rng, moods);
  const place = pick(rng, bank.places);
  const being = pick(rng, bank.beings);
  const object = pick(rng, bank.objects);
  const rule = pick(rng, bank.rules);
  const signal = pick(rng, bank.signals);
  const title = depth === 0 && spark ? titleCase(spark) : `The ${titleCase(mood)} ${titleCase(place)}`;
  const type = depth > 8 ? "deep layer" : pick(rng, ["hidden room", "portal", "strange exhibit", "side quest", "living map"]);
  const code = hashString(seed).toString(16).slice(0, 6).padStart(6, "0");
  const accent = pick(rng, accents);
  const nextTrail = [...trail, title].slice(-9);

  const body = [
    `You arrive at ${title.toLowerCase()}, a ${safeMode} pocket of the internet that only loads for people who keep clicking.`,
    `A ${being} watches from the edge of the page, pretending not to notice the ${object} pulsing nearby.`,
    depth > 0
      ? `You are ${depth} layers deep now, and the last exit has quietly folded itself into the walls.`
      : "This is the first threshold. The machine is awake and waiting for your first real choice."
  ].join(" ");

  const artifact = `You find a ${object}. It feels decorative until it reacts to your cursor and reveals a tiny label: "${pick(
    rng,
    endings
  )}."`;
  const whisper = `"${pick(rng, [
    "Go deeper, but bring a question.",
    "The next page is already dreaming about you.",
    "Do not trust rooms with perfect symmetry.",
    "If the path loops, look for the thing that changed.",
    "The small door is larger on the inside."
  ])}"`;

  const choices = Array.from({ length: 4 }, (_, index) => {
    const choiceSeed = `${seed}:${index}:${pick(rng, endings)}:${reroll}`;
    const verb = pick(rng, verbs);
    const target = pick(rng, [...bank.places, ...bank.objects, ...bank.beings]);
    const ending = pick(rng, endings);
    return {
      label: `${titleCase(verb)} the ${target}`,
      hint: `${titleCase(ending)}. Depth ${depth + 1}.`,
      seed: slugify(choiceSeed) || randomSeed("choice")
    };
  });

  return {
    seed,
    mode: safeMode,
    depth,
    spark,
    trail: nextTrail,
    title,
    type,
    code,
    signal,
    body,
    artifact,
    rule,
    whisper,
    choices,
    accent
  };
}

function renderFromUrl() {
  const params = getParams();
  if (!params.seed) {
    elements.homePanel.classList.remove("hidden");
    elements.explorePanel.classList.add("hidden");
    return;
  }

  currentPlace = createPlace(params);
  renderPlace(currentPlace);
}

function renderPlace(place) {
  elements.homePanel.classList.add("hidden");
  elements.explorePanel.classList.remove("hidden");
  elements.depthValue.textContent = place.depth;
  elements.modeValue.textContent = place.mode;
  elements.signalValue.textContent = place.signal;
  elements.placeType.textContent = place.type;
  elements.placeCode.textContent = `seed ${place.code}`;
  elements.placeTitle.textContent = place.title;
  elements.placeBody.textContent = place.body;
  elements.artifactText.textContent = place.artifact;
  elements.ruleText.textContent = place.rule;
  elements.whisperText.textContent = place.whisper;

  document.title = `${place.title} | Deeper`;
  document.documentElement.style.setProperty("--accent-a", place.accent[0]);
  document.documentElement.style.setProperty("--accent-b", place.accent[1]);

  elements.trailList.innerHTML = place.trail.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  elements.choiceGrid.innerHTML = "";

  place.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-card";
    button.type = "button";
    button.innerHTML = `<strong>${escapeHtml(choice.label)}</strong><span>${escapeHtml(choice.hint)}</span>`;
    button.addEventListener("click", () => {
      navigateToPlace({
        seed: choice.seed,
        mode: place.mode,
        depth: place.depth + 1,
        spark: place.spark || place.title,
        trail: place.trail,
        reroll: "0"
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    elements.choiceGrid.appendChild(button);
  });
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#039;"
    };
    return entities[char];
  });
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  toastTimer = setTimeout(() => elements.toast.classList.remove("visible"), 2200);
}

function getSavedPlaces() {
  try {
    return JSON.parse(localStorage.getItem("deeper.savedPlaces") || "[]");
  } catch {
    return [];
  }
}

function setSavedPlaces(places) {
  localStorage.setItem("deeper.savedPlaces", JSON.stringify(places.slice(0, 30)));
}

function saveCurrentPlace() {
  if (!currentPlace) return;
  const places = getSavedPlaces().filter((place) => place.url !== window.location.href);
  places.unshift({
    title: currentPlace.title,
    depth: currentPlace.depth,
    mode: currentPlace.mode,
    url: window.location.href,
    savedAt: new Date().toISOString()
  });
  setSavedPlaces(places);
  showToast("saved to your local places");
}

function renderSavedPlaces() {
  const places = getSavedPlaces();
  if (places.length === 0) {
    elements.savedList.innerHTML = `<div class="empty-state">No saved places yet. Go deeper, then save the rooms you want to revisit.</div>`;
    return;
  }

  elements.savedList.innerHTML = places
    .map(
      (place) => `
        <div class="saved-item">
          <div>
            <strong>${escapeHtml(place.title)}</strong>
            <span>${escapeHtml(place.mode)} mode, depth ${place.depth}</span>
          </div>
          <a href="${escapeHtml(place.url)}">open</a>
        </div>
      `
    )
    .join("");
}

function selectedMode() {
  const selected = document.querySelector("input[name='mode']:checked");
  return selected ? selected.value : "dream";
}

elements.launchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const spark = elements.sparkInput.value.trim() || "the first impossible door";
  navigateToPlace({
    seed: slugify(`${spark}-${randomSeed("start")}`),
    mode: selectedMode(),
    depth: 0,
    spark,
    trail: [],
    reroll: "0"
  });
});

elements.randomPortalButton.addEventListener("click", () => {
  const modes = Object.keys(banks);
  const mode = modes[Math.floor(Math.random() * modes.length)];
  const spark = `random portal ${Math.floor(Math.random() * 9999)}`;
  navigateToPlace({
    seed: randomSeed("random"),
    mode,
    depth: 0,
    spark,
    trail: [],
    reroll: "0"
  });
});

elements.rerollButton.addEventListener("click", () => {
  if (!currentPlace) return;
  navigateToPlace({
    seed: currentPlace.seed,
    mode: currentPlace.mode,
    depth: currentPlace.depth,
    spark: currentPlace.spark,
    trail: currentPlace.trail.slice(0, -1),
    reroll: String(Number(getParams().reroll || "0") + 1)
  });
});

elements.savePlaceButton.addEventListener("click", saveCurrentPlace);

elements.copyLinkButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText(window.location.href);
  showToast("link copied");
});

elements.savedButton.addEventListener("click", () => {
  renderSavedPlaces();
  elements.savedDialog.showModal();
});

elements.closeSavedButton.addEventListener("click", () => elements.savedDialog.close());

window.addEventListener("popstate", renderFromUrl);

renderFromUrl();
