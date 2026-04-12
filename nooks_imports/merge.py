"""
Merge batch CSVs from Apollo pull into per-company CSV files.
Run after all 5 batch agents complete.
"""
import csv
import os
import re
from collections import defaultdict

TEMP_DIR = os.path.join(os.path.dirname(__file__), "temp")
OUTPUT_DIR = os.path.dirname(__file__)
BATCH_FILES = [f"batch_{i}.csv" for i in range(1, 6)]

def safe_filename(name):
    """Convert company name to a safe filename."""
    name = name.strip()
    name = re.sub(r'[\\/*?:"<>|]', "", name)
    name = re.sub(r'\s+', "_", name)
    return name[:80]  # cap length

def best_phone(phone_numbers):
    """Pick best phone from Apollo phone_numbers array (already a string list in CSV)."""
    return phone_numbers.strip() if phone_numbers else ""

def main():
    companies = defaultdict(list)
    total_contacts = 0
    missing_batches = []

    for batch_file in BATCH_FILES:
        path = os.path.join(TEMP_DIR, batch_file)
        if not os.path.exists(path):
            missing_batches.append(batch_file)
            print(f"WARNING: {batch_file} not found, skipping")
            continue

        with open(path, newline="", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for row in reader:
                company = row.get("Company", "").strip()
                if not company:
                    company = "Unknown"
                companies[company].append(row)
                total_contacts += 1

        print(f"Loaded {batch_file}")

    print(f"\nTotal contacts loaded: {total_contacts}")
    print(f"Unique companies: {len(companies)}")

    # Write per-company CSVs
    written = 0
    for company, contacts in sorted(companies.items()):
        filename = safe_filename(company) + ".csv"
        filepath = os.path.join(OUTPUT_DIR, filename)

        with open(filepath, "w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(
                f,
                fieldnames=["First Name", "Last Name", "Title", "Company", "Email", "Phone", "LinkedIn URL"],
                extrasaction="ignore"
            )
            writer.writeheader()
            writer.writerows(contacts)

        written += 1

    print(f"Written {written} company CSV files to {OUTPUT_DIR}")
    if missing_batches:
        print(f"Missing batches (partial run): {missing_batches}")

if __name__ == "__main__":
    main()
