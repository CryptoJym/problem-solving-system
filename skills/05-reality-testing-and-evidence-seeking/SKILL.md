---
name: reality-testing-and-evidence-seeking
rank: 5
description: Use when assumptions, policies, expert claims, feasibility, or expected outcomes need evidence before implementation.
---

# Reality Testing and Evidence Seeking

## Use When

- The team is relying on opinion.
- The cost of being wrong is high.
- A policy, people, legal, HR, safety, or compliance issue is involved.
- The solution depends on behavior change.

## Inputs

- The decision or solution concept.
- The assumptions that must be true.
- Available evidence sources.
- Risk level if the assumption is wrong.
- People or systems that can disconfirm the idea.

## Quick Start

Use a 30-minute evidence pass:

1. List the five claims most likely to break the plan.
2. Mark each claim as fact, base rate, expert pattern, user reaction, or constraint.
3. Find one zoom-out source and one zoom-in source.
4. Seek disagreement from someone with relevant experience.
5. Update confidence and revise the recommendation.

## Procedure

1. List the claims that must be true for the solution to work.
2. Split claims into:
   - observable facts
   - base rates
   - expert patterns
   - user/operator reactions
   - operational constraints
3. Zoom out:
   - ask for base rates, not predictions
   - search comparable systems
   - look at historical performance
4. Zoom in:
   - inspect the actual workflow
   - interview the people doing the work
   - look for edge cases and exceptions
5. Seek disagreement:
   - ask what would have to be true for each option to be best
   - ask an expert what typically goes wrong
6. Update the problem frame and decision after evidence moves.

## Template

```text
Recommendation being tested:

Critical assumptions:
1.
2.
3.

Evidence source for each assumption:

Zoom-out evidence:

Zoom-in evidence:

Disagreement sought:

What changed our mind:

Confidence before:

Confidence after:

Revised recommendation:
```

## Output

- Assumption register
- Evidence gathered
- Confidence level
- Disconfirmed assumptions
- Revised recommendation

## Evidence Check

Before leaving this skill, confirm:

- At least one source could have contradicted the preferred answer.
- Evidence is connected to specific assumptions.
- Confidence changed or stayed the same for a stated reason.
- Failed assumptions are reflected in the recommendation.

## Handoff Prompt

```text
We are using Skill 5, Reality Testing and Evidence Seeking. Recommendation: [recommendation]. Critical assumptions: [list]. Evidence gathered: [evidence]. Disconfirmed or weak assumptions: [list]. Revised confidence: [level]. Please identify remaining blind spots before prototyping or implementation.
```

## Watchouts

- Do not ask experts only for their preferred answer.
- Do not generalize from one anecdote unless it is the system you are changing.
- Do not keep a solution whose key assumption failed.
