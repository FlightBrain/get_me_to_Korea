# Tagging Rules

**Purpose:** Standardized tagging system for organizing and filtering content across accounts, people, and opportunities.

**How to Use:**
- Apply relevant tags inline or in header section of files
- Use consistent tag format: `[tag]` or `#tag` for easy searching
- Combine multiple tags when appropriate (e.g., account tag + priority tag)
- Review tags during maintenance to keep categorization clean

---

## Tag Types & Formats

All tags use lowercase with underscores: `[tag_name]` or `#tag_name`

### Status Tags

Apply to any file or section to indicate current state.

- `[status:draft]` - Work in progress, not actionable yet
- `[status:active]` - Currently being worked on
- `[status:waiting]` - Blocked, awaiting external input/response
- `[status:stale]` - No activity >30 days
- `[status:archived]` - Historical, moved to archive folder
- `[status:on_hold]` - Intentionally paused, will resume

**Usage example:**
```markdown
## Company: TechCorp
[status:active] [channel:inbound]
```

### Priority Tags

Apply to action items, deals, or urgent tasks.

- `[priority:p0]` - Critical, address immediately
- `[priority:p1]` - High, address within 1-2 days
- `[priority:p2]` - Medium, address this week
- `[priority:p3]` - Low, backlog

**Usage example:**
```markdown
- [ ] Schedule demo with technical team [priority:p1] due 2026-04-10
```

### Channel Tags

Indicate how contact was made or relationship started.

- `[channel:cold_email]` - Unsolicited outreach via email
- `[channel:linkedin]` - Initial contact via LinkedIn
- `[channel:warm_intro]` - Introduced by mutual connection
- `[channel:content_engagement]` - They engaged with your content
- `[channel:inbound]` - They reached out first
- `[channel:event]` - Met at conference/webinar
- `[channel:referral]` - Referred by existing customer

**Usage example:**
```markdown
## Contact: Alex Rivera
[channel:warm_intro] Introduced by Sarah Chen on 2026-03-20
```

### Account Tags

Identify which account or company the item relates to.

- `[account:braintrust]`
- `[account:company_name]`

Apply to person files, opportunity files, and research notes to quickly link context.

**Usage example:**
```markdown
## Person: John Smith
Title: VP Engineering
[account:techcorp]
```

### Vertical/Industry Tags

Identify industry or market segment.

- `[vertical:saas]`
- `[vertical:fintech]`
- `[vertical:healthcare]`
- `[vertical:enterprise]`
- `[vertical:startup]`

**Usage example:**
```markdown
## Company: HealthTech Solutions
[vertical:healthcare] [status:active]
```

### Deal Stage Tags

For opportunity tracking.

- `[stage:discovery]` - Initial conversations, understanding needs
- `[stage:validation]` - Confirmed fit, problem resonates
- `[stage:demo]` - Technical evaluation in progress
- `[stage:proposal]` - Terms discussed, awaiting decision
- `[stage:negotiation]` - Deal structure being finalized
- `[stage:closing]` - Final signatures, imminent close
- `[stage:won]` - Closed, customer
- `[stage:lost]` - Lost to competitor or budget

### Relationship Temperature

For person and account files.

- `[temperature:cold]` - No prior contact
- `[temperature:warm]` - Initial response, interest shown
- `[temperature:hot]` - Active engagement, strong interest
- `[temperature:active]` - Actively working together

### Content Type Tags

For research notes and reference documents.

- `[type:research]` - Market/competitive research
- `[type:call_notes]` - Call or meeting summary
- `[type:email_sequence]` - Email template or cadence
- `[type:sop]` - Standard operating procedure
- `[type:analysis]` - Data analysis or breakdown
- `[type:framework]` - Framework or methodology

## Multi-Tag Examples

Good tag combinations show context clearly:

```markdown
## Opportunity: Company X - Platform Pilot
[account:techcorp] [stage:demo] [priority:p1] [channel:warm_intro] [temperature:hot]

## Person: Lisa Park
[account:company_d] [channel:content_engagement] [temperature:warm] [vertical:saas]

## Research: Q1 Competitor Analysis
[type:research] [status:active] [priority:p2]
```

## Inline Tagging Best Practices

1. **Place tags at top of file or section** for visibility
2. **Use brackets for consistency:** `[tag]` style works in markdown search
3. **Keep to 3-5 tags per item** - Too many tags dilutes usefulness
4. **Update tags when status changes** - Don't leave stale tags
5. **Link related tags together** - Include account tag when using opportunity tags

## Search Strategy

Use tags to quickly find content:

- Find all warm leads: Search `[temperature:warm]`
- Find all fintech companies: Search `[vertical:fintech]`
- Find high-priority actions: Search `[priority:p1]`
- Find stale accounts: Search `[status:stale]`
- Find all Company X contacts: Search `[account:company_x]`

---

**Last Updated:** 2026-04-01
**Owner:** Kensington
