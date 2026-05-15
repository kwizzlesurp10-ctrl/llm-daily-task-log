# OpenComet Browser Assistant — Project Log

**Project:** OpenComet Browser Assistant  
**Current Version:** v5.1.0 (as of 2026-05-15)  
**Status:** Active Development  
**Repo:** browser-assistant-swarm  
**Stack:** Express + Socket.IO, LangGraph, Playwright, Ollama (text + vision), Chrome MV3 extension

---

## 🎯 Project Goals

- Build a powerful, reliable browser assistant that can see the page (vision) and act on it (DOM actions)
- Make everyday web tasks dramatically faster and more natural
- Create a best-in-class developer experience for browser automation + LLM agents

## 📊 Current Status (May 15, 2026)

**v5.1.0 Highlights:**
- Vision model migrated to **moondream** (stable, lower resource usage)
- Extension now correctly routes "describe" tasks to vision and action tasks to DOM loop
- Reliable scroll, click, and navigate actions with up to 12-step loops
- Strong Google.com guardrails (no unwanted searches)
- Robust bfcache recovery via new `tabBridge.js`
- 77 passing tests

**Next Milestones:**
- Hugging Face provider support
- Multi-tab research (STORM-style)
- Persistent memory layer (Redis/SQLite)
- Chrome Web Store release prep

---

## 📝 Session History

### 2026-05-15 — v5.1.0 Major Development Session
**Focus:** Vision reliability + Extension action capabilities + Edge case hardening

**Key Changes:**
- `lib/visionLlm.js` + `.env`: moondream migration + empty response fixes
- `extension/visionIntent.js` + `sidepanel.js`: Smart routing (describe → vision, actions → DOM)
- `extension/content.js` + `lib/googlePage.js`: DOM actions + Google guardrails
- `extension/tabBridge.js`: bfcache recovery solution
- Test expansion to 77 tests

**Outcome:** Major reliability leap. Extension is now production-viable for describe + action workflows.

**Full Notes:** See `SESSION-2026-05-15.md` in main repo

**Time Invested:** ~3h 35m

**Tags:** #vision-model #dom-actions #google-guardrails #bfcache #testing

---

## 🧠 Key Decisions Log

| Date       | Decision | Rationale |
|------------|----------|---------|
| 2026-05-15 | Switch primary vision model from llava → moondream | Lower VRAM usage, fewer GGML_ASSERT errors, good enough quality for UI description |
| 2026-05-15 | Separate vision vs DOM routing in extension | "Describe tab" needs visual context; click/scroll needs precise DOM targets |
| 2026-05-15 | Build custom `googlePage.js` normalizer | Prevent assistant from hijacking Google search when user didn't intend it |

---

## ❓ Open Questions & Roadmap

- How to best handle very long or complex pages for vision?
- Should we add cost/token tracking per session?
- Best architecture for multi-tab persistent memory?
- When to start Chrome Web Store submission process?

---

## 📈 Productivity Notes

This project benefits enormously from focused pairing sessions with comprehensive note capture. The daily log + project-specific log combo is proving very effective.

---

*Last updated: 2026-05-15 by Elite Agent Agency (Grok)*