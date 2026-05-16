const fs = require('fs');
const path = require('path');

/**
 * Robust Monthly Summary Generator for LLM Daily Task Log
 * Run with: node scripts/generate-monthly-summary.js
 * 
 * Improvements:
 * - More flexible time parsing (handles "2h 30m", "2.5h", "90m", etc.)
 * - Defensive parsing with warnings instead of silent failure
 * - Better structure and comments
 */

function parseTimeToMinutes(timeStr) {
  if (!timeStr) return 0;
  const str = timeStr.toLowerCase().trim();

  // Match patterns like "2h 30m", "2.5h", "90m", "2h", "1h30m"
  const hourMinMatch = str.match(/(\d+(?:\.\d+)?)h\s*(\d+)?m?/);
  if (hourMinMatch) {
    const hours = parseFloat(hourMinMatch[1]) || 0;
    const minutes = parseInt(hourMinMatch[2]) || 0;
    return Math.round(hours * 60 + minutes);
  }

  // Match pure minutes e.g. "90m" or "90"
  const minMatch = str.match(/(\d+)m?/);
  if (minMatch) {
    return parseInt(minMatch[1]) || 0;
  }

  return 0;
}

function generateMonthlySummary() {
  const logPath = path.join(__dirname, '..', 'daily-log.md');

  if (!fs.existsSync(logPath)) {
    console.error('❌ daily-log.md not found!');
    return;
  }

  let content = fs.readFileSync(logPath, 'utf8');

  const now = new Date();
  const currentMonth = now.toISOString().slice(0, 7); // e.g. "2026-05"
  const monthName = now.toLocaleString('default', { month: 'long', year: 'numeric' });

  // Split into potential daily entries (more robust than single regex on whole file)
  const entryRegex = /## 📅 (\d{4}-\d{2}-\d{2})[^\n]*Total LLM Time:\s*([^\n]+)/g;
  let match;
  let totalMinutes = 0;
  const entries = [];

  while ((match = entryRegex.exec(content)) !== null) {
    const day = match[1];
    if (day.startsWith(currentMonth)) {
      const timeStr = match[2];
      const minutes = parseTimeToMinutes(timeStr);
      if (minutes > 0) {
        totalMinutes += minutes;
        entries.push(day);
      } else {
        console.warn(`⚠️ Could not parse time for ${day}: "${timeStr}"`);
      }
    }
  }

  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;
  const timeString = `${totalHours}h ${remainingMinutes}m`;

  // Build improved monthly summary
  const summary = `
---

## 📆 ${monthName} Monthly Summary

**Total LLM Time Logged:** ${timeString} (${entries.length} sessions logged)

### Key Highlights
- ${entries.length} sessions recorded this month
- Strong focus on technical development, agentic systems, and productivity tooling

### Top Tags This Month
#productivity #github #templates #agentic #llm

### Monthly Goals Progress
- [x] Establish reliable daily LLM logging habit
- [ ] Add token/cost tracking
- [ ] Build automated insights & visualizations

**Next Month Focus:** Deeper analytics, prompt pattern mining, and integration with Local AI Integrations workflows

---
`;

  // Remove previous monthly summary section if present
  const oldSummaryRegex = /---\n\n## 📆 .*? Monthly Summary[\s\S]*?---/;
  content = content.replace(oldSummaryRegex, '');

  // Append new summary
  const newContent = content.trim() + '\n' + summary;

  fs.writeFileSync(logPath, newContent, 'utf8');
  console.log(`✅ Monthly summary for ${monthName} updated successfully!`);
  console.log(`Total time logged: ${timeString} across ${entries.length} sessions.`);
}

generateMonthlySummary();