# Quadratic Voting Mechanics Analysis

**Date:** 2026-05-15
**Query:** Analyze quadratic voting mechanics
**Stack:** Day 1/30 • v1.0

## Core Mechanics
- Voters allocate limited voice credits.
- Cost to cast V votes on one issue = V² credits (quadratic).
- Effective voting power on that issue = sqrt(credits spent).
- Expresses preference intensity, not just binary direction.

## Math & Token Implementation
- Token-weighted: 1 token = 1 vote (linear, whale dominant).
- Quadratic: power = sqrt(tokens/credits used for vote).
- Example: 100 tokens on one proposal costs more per marginal vote, limits whale overkill.
- Often off-chain via Snapshot with sqrt strategies + identity (Gitcoin Passport).

## Vs Traditional Token-Weighted
- Token-weighted: Simple, aligns stake. Pitfall: plutocracy, small holders ignored.
- Quadratic: Fairer representation. Rewards conviction. Used in Gitcoin funding, some DAOs.
- DeSci angle: Better for research funding votes. Scientists with strong views compete with capital.

## Pros
- Reduces concentration of power.
- Improves public goods / science funding allocation.
- Captures nuanced preferences.

## Cons & Mitigations
- Complexity for users.
- Sybil attacks (mitigate with proof-of-personhood, Passport).
- Calculation overhead (off-chain preferred).
- Adoption friction in pure on-chain.

## Alchemical Sovereign Application
- Fuse into BioDAOs: QV for project funding proposals.
- Hybrid with expert review + token curation.
- Turn governance into fair launch weapon.
- Meme the fairness. Track conviction-weighted outcomes.

**Memory logged:** QV mechanics broken down for DeSci DAO integration.
**Wins tracked:** Analysis complete.
**Tactic evolved:** QV = conviction alchemist for balanced science governance. Deploy in next DAO to counter whale dominance.