# LLM Daily Task Log

**Owner:** Keith (kwizzlesurp10-ctrl)  
**Purpose:** A structured, searchable, version-controlled journal documenting every LLM interaction. Track tasks, prompts, models (Grok, Claude, GPT, Llama, etc.), time invested, outcomes, key learnings, and reflections to:

- Identify which prompt patterns deliver the best results  
- Quantify productivity gains from AI assistance  
- Build a personal "AI memory bank" for future reference and reuse  
- Spot trends in your usage, skill growth, and high-value workflows

## 🚀 How to Update Daily (Recommended Workflow)

**Option 1 — Easiest (via this chat):**  
At the end of each day or after a major LLM session, simply tell me:  
> "Log today's tasks" or paste your raw notes.  

I will instantly format it using the template, append it to the top of `daily-log.md`, and commit the update. Zero friction.

**Option 2 — GitHub Web / Mobile App (Recommended for structured input):**  
1. Go to the **Issues** tab
2. Click **New issue**
3. Select the **"Daily LLM Log"** template
4. Fill out the form
5. Submit the issue, then copy the formatted content into the top of `daily-log.md` (or reply here and I can help commit it)

**Option 3 — Local (advanced):** Clone the repo, edit locally with your favorite editor, then `git push`.

## 📋 Standardized Templates

Ready-to-copy templates are available in the `templates/` folder:

- **`templates/daily-entry.md`** — For normal daily logging
- **`templates/project-session.md`** — For deep technical/dev sessions (recommended for complex work)
- **`templates/project-log.md`** — For creating new project-specific logs

Just copy the content inside the code block and paste into the appropriate file.

> **New:** You can also use the native GitHub Issue Template (`.github/ISSUE_TEMPLATE/daily-llm-log.yml`) for a guided form experience when creating issues.

## 🤖 Automation

**Monthly Summary Generator**

Run this to automatically calculate total LLM time, session count, and refresh the monthly summary section at the bottom of `daily-log.md`:

```bash
# Using npm (recommended after first clone)
npm run summary

# Or directly with node
node scripts/generate-monthly-summary.js
```

The script now features **more robust time parsing** (handles variations like "2h 30m", "2.5h", "90m") and better error handling.

## 📁 Repository Structure

```
llm-daily-task-log/
├── README.md
├── package.json                 # npm scripts + metadata
├── daily-log.md                 # Master chronological log + monthly summaries
├── projects/                    # Dedicated project logs
│   ├── opencomet.md
│   └── llm-productivity-system.md
├── templates/                   # Ready-to-copy markdown templates
│   ├── daily-entry.md
│   ├── project-session.md
│   └── project-log.md
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── daily-llm-log.yml   # Native GitHub form template for daily logs
│   └── workflows/
│       └── daily-log-reminder.yml
└── scripts/
    └── generate-monthly-summary.js
```

## ✨ Why This Setup is Powerful

- **Full Git history** — See exactly how your prompting evolved over months
- **Instant search** — GitHub's powerful code search works across every prompt you've ever written
- **Private & secure** — Only you have access
- **Portable** — Clone anywhere; integrate with Obsidian, Notion, or VS Code
- **Analyzable** — Scripts for monthly reports, top prompt patterns, cost estimates, etc.
- **Low friction daily nudges** via scheduled GitHub Issues + beautiful form templates

**Repository created:** May 15, 2026  
**Maintained collaboratively by:** Elite Agent Agency (Grok) + Keith  

---

*This system turns every LLM conversation into lasting, queryable knowledge.*