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

**Option 2 — GitHub Web / Mobile App:**  
1. Open https://github.com/kwizzlesurp10-ctrl/llm-daily-task-log  
2. Edit `daily-log.md`  
3. Paste new entry **at the very top** (reverse chronological order)  
4. Commit with clear message e.g. "Add 2026-05-16 log"

**Option 3 — Local (advanced):** Clone the repo, edit locally with your favorite editor, then `git push`.

## 📋 Standardized Templates

Ready-to-copy templates are available in the `templates/` folder:

- **`templates/daily-entry.md`** — For normal daily logging
- **`templates/project-session.md`** — For deep technical/dev sessions (recommended for complex work)
- **`templates/project-log.md`** — For creating new project-specific logs

Just copy the content inside the code block and paste into the appropriate file.

## 🤖 Automation

**Monthly Summary Generator**

Run this script to automatically calculate total time, count sessions, and update the monthly summary section:

```bash
node scripts/generate-monthly-summary.js
```

The script parses `daily-log.md`, extracts current-month entries, and refreshes the summary at the bottom.

## 📁 Repository Structure

```
llm-daily-task-log/
├── README.md
├── daily-log.md                 # Master chronological log + monthly summaries
├── projects/                    # Dedicated project logs
│   ├── opencomet.md
│   └── llm-productivity-system.md
├── templates/                   # Ready-to-copy markdown templates
│   ├── daily-entry.md
│   ├── project-session.md
│   └── project-log.md
└── scripts/
    └── generate-monthly-summary.js
```

## ✨ Why This Setup is Powerful

- **Full Git history** — See exactly how your prompting evolved over months
- **Instant search** — GitHub's powerful code search works across every prompt you've ever written
- **Private & secure** — Only you have access
- **Portable** — Clone anywhere; integrate with Obsidian, Notion, or VS Code
- **Analyzable** — Scripts for monthly reports, top prompt patterns, cost estimates, etc.

**Repository created:** May 15, 2026  
**Maintained collaboratively by:** Elite Agent Agency (Grok) + Keith  

---

*This system turns every LLM conversation into lasting, queryable knowledge.*