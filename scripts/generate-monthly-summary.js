const fs = require('fs');
const path = require('path');

/**
 * Simple Monthly Summary Generator for LLM Daily Task Log
 * Run with: node scripts/generate-monthly-summary.js
 */

function generateMonthlySummary() {
  const logPath = path.join(__dirname, '..', 'daily-log.md');
  let content = fs.readFileSync(logPath, 'utf8');

  const now = new Date();
  const currentMonth = now.toISOString().slice(0, 7); // e.g. "2026-05"
  const monthName = now.toLocaleString('default', { month: 'long', year: 'numeric' });

  // Find all entries for current month
  const monthRegex = new RegExp(`## 📅 (${currentMonth}-\d{2}) .*?Total LLM Time: (\d+)h?\s*(\d+)?m?`, 'g');
  let match;
  let totalMinutes = 0;
  const entries = [];

  while ((match = monthRegex.exec(content)) !== null) {
    const day = match[1];
    const hours = parseInt(match[2]) || 0;
    const minutes = parseInt(match[3]) || 0;
    totalMinutes += hours * 60 + minutes;
    entries.push(day);
  }

  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;
  const timeString = `${totalHours}h ${remainingMinutes}m`;

  // Build new monthly summary
  const summary = `
---

## 📆 ${monthName} Monthly Summary

**Total LLM Time Logged:** ${timeString} (${entries.length} sessions logged)

### Key Highlights
- ${entries.length} sessions recorded this month
- Strong focus on technical development and system building

### Top Tags This Month
#productivity #github #templates #opencomet #meta

### Monthly Goals Progress
- [x] Establish reliable daily LLM logging habit
- [ ] Add token/cost tracking
- [ ] Build automated insights

**Next Month Focus:** Deeper analytics + continued project development

---
`;

  // Remove old monthly summary if exists
  const oldSummaryRegex = /---\n\n## 📆 .*? Monthly Summary[\s\S]*?---/;
  content = content.replace(oldSummaryRegex, '');

  // Append new summary at the end
  const newContent = content.trim() + '\n' + summary;

  fs.writeFileSync(logPath, newContent, 'utf8');
  console.log(`\u2705 Monthly summary for ${monthName} updated successfully!`);
  console.log(`Total time logged: ${timeString} across ${entries.length} sessions.`);
}

generateMonthlySummary();