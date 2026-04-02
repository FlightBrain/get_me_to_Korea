# Archive Index

**Purpose:** Master index of archived accounts, people, opportunities, and research that are no longer active. Enables retrieval of historical context and prevents accidentally re-prospecting archived accounts.

**How to Use:**
- Check this before reaching out to a company or person - ensure they're not already archived
- Archive files monthly as part of maintenance (MAINTENANCE_CHECKLIST.md)
- Reference historical context if relationship becomes active again
- Review quarterly to ensure archiving decisions were correct

---

## Archiving Rules

### When to Archive

An item should be archived when:
- **Stale (>30 days no activity):** No contact, response, or signal in last month
- **Project complete:** Won deal (move to customer file, not archive), closed opportunity
- **Disqualified:** No longer target customer (wrong persona, budget-constrained, no fit)
- **Relationship ended:** Person left company, company went out of business, relationship terminated
- **Wrong buyer/company:** Outreach to wrong department or company in same industry
- **Research outdated:** Market research older than 6 months needs archival or refresh

### How to Archive

1. **Move file:** Relocate from `07_Accounts/` to `99_Archive/[YYYY-MM]/`
   - Maintain folder structure: `99_Archive/2026-04/companies/company_name.md`
   - Folder naming: `[YYYY-MM]` based on archive date

2. **Update original index:** Remove from `ACCOUNTS_INDEX.md` or relevant index file

3. **Add to ARCHIVE_INDEX.md:** Create entry below with archiving reason and date

4. **Update file header:** Add status tag to archived file
   ```markdown
   **Status:** [status:archived]
   **Archived:** 2026-04-01
   **Reason:** [Stale / Disqualified / Wrong fit / etc.]
   ```

### How to Retrieve

- Search ARCHIVE_INDEX.md for company/person name
- Go to file path listed in index
- Review archival reason and last activity
- If re-engaging: Update status to `[status:active]`, move back to `07_Accounts/`, add new outreach note

---

## Archived Items

### 2026-04 (April 2026)

| Item | Type | Archived Date | Reason | Last Activity | Notes |
|------|------|---|---|---|---|
| [company_a.md](./2026-04/companies/company_a.md) | Company | 2026-04-01 | Stale (>30 days) | 2026-03-01 | No response to 3 outreach attempts. Re-evaluate in Q2. |
| [person_b.md](./2026-04/people/person_b.md) | Person | 2026-04-01 | Changed companies | 2026-03-15 | Moved to role at Company X. Original path no longer active. |
| [opportunity_c.md](./2026-04/opportunities/opportunity_c.md) | Opportunity | 2026-04-01 | Lost | 2026-03-28 | Prospect chose competitor. Post-mortem: Price sensitivity, not fit. |

### 2026-03 (March 2026)

| Item | Type | Archived Date | Reason | Last Activity | Notes |
|------|------|---|---|---|---|
| [company_d.md](./2026-03/companies/company_d.md) | Company | 2026-03-20 | Wrong fit | 2026-03-10 | Enterprise customer, not SMB. Wrong buyer persona. |
| [research_market_analysis.md](./2026-03/research_market_analysis.md) | Research | 2026-03-15 | Stale research | 2026-02-15 | 6 weeks old, market shifted. Refresh before reusing. |

---

## Archival Statistics

| Month | Companies Archived | People Archived | Opportunities Archived | Total |
|-------|---|---|---|---|
| 2026-04 | 1 | 1 | 1 | 3 |
| 2026-03 | 1 | 0 | 0 | 1 |
| **YTD** | **2** | **1** | **1** | **4** |

---

## Recovery Process

### If Re-Engaging with Archived Item

1. **Check archived file:**
   - Read full history and archival reason
   - Understand why it was archived
   - Assess if conditions have changed

2. **Update file:**
   - Change status from `[status:archived]` to `[status:active]`
   - Add new entry to "Conversation History" with re-engagement date and reason
   - Update "Last Touched" date

3. **Move back to active:**
   - Move file from `99_Archive/[YYYY-MM]/` back to `07_Accounts/`
   - Maintain folder structure

4. **Update indices:**
   - Remove from ARCHIVE_INDEX.md
   - Add back to ACCOUNTS_INDEX.md with new status and touch date

---

## Common Archival Scenarios & Decisions

### Scenario 1: Prospect Goes Quiet (>30 days)
- **Decision:** Archive
- **Exception:** If high-value, strategic account → add 60-day quiet rule instead
- **Re-engagement:** If they engage with content or someone reaches out, move back active
- **File note:** "Stale lead - monitor for re-engagement signals"

### Scenario 2: Person Leaves Company
- **Decision:** Archive person file, keep company file if still pursuing
- **Re-engagement:** If person moves to target company, create new person file there
- **File note:** "Person changed roles. See [new_company_name.md] for continued engagement."

### Scenario 3: Lost Deal to Competitor
- **Decision:** Archive opportunity file; keep company file if still a prospect
- **Follow-up:** Conduct post-mortem, document what competitor had that you didn't
- **Re-engagement:** Re-contact in 6 months after competitive position improves

### Scenario 4: Company in Different Vertical Than We Target
- **Decision:** Archive if truly wrong fit
- **File note:** "Different buyer persona than typical customer. Archive unless market focus changes."
- **Re-engagement:** Only if company expands into our target vertical

### Scenario 5: Won Customer
- **Decision:** Do NOT archive. Move to separate Customer folder or mark with `[status:won]` tag
- **File note:** "CUSTOMER - see customer management files"
- **Why:** Keep relationship context, renewal notes, upsell opportunities

---

## Maintenance Schedule

- **Daily:** Flag items with >25 days no activity for weekly review
- **Weekly:** Review items flagged as stale, make archive decision
- **Monthly:** Move confirmed stale items to archive per MAINTENANCE_CHECKLIST.md
- **Quarterly:** Review archived items, assess if any should be reactivated

---

**Last Updated:** 2026-04-01
**Owner:** Kensington
**Last Archive Maintenance:** 2026-04-01
**Next Archive Review:** 2026-05-01
