---
name: problem-framing-and-reframing
rank: 1
description: Use when a problem statement may be too narrow, solution-biased, politically loaded, unmeasurable, or based on symptoms instead of the real goal.
---

# Problem Framing and Reframing

## Use When

- The team is arguing over solutions before agreeing on the problem.
- The current problem statement implies one obvious fix.
- A proposed solution feels punitive, expensive, brittle, or hard to adopt.
- The problem keeps recurring after informal fixes.
- The team cannot name the baseline, boundary, or guardrail for success.

## Inputs

- A one-sentence problem statement, even if rough.
- The proposed solution, if one already exists.
- The stakeholder or user group affected.
- Any evidence that the problem is real.
- The decision deadline or time box.
- Any current baseline, target, or metric that defines the gap.

## Quick Start

Use a 15-minute framing pass before any solution discussion:

1. Write: "The problem is that..."
2. Cross out any causes, blame, or fixes hidden in the sentence.
3. Rewrite it as: "The goal is..., but..."
4. Add the aim, boundary, baseline, and guardrail.
5. Generate four alternate frames.
6. Pick the frame that makes the next evidence-gathering step clearest.

## Procedure

1. Write the current problem statement in one sentence.
2. Strip out implied causes and implied solutions.
3. Write the goal the system is trying to achieve.
4. Make the frame measurable:
   - aim statement: what should improve, by how much, and by when
   - system boundary: where the problem starts and stops
   - baseline: what is happening now
   - guardrail or balancing measure: what must not get worse
5. Rewrite the problem from at least four frames:
   - user or operator frame
   - manager or owner frame
   - system constraint frame
   - value or outcome frame
6. Ask the five reframing questions:
   - What are we actually trying to achieve?
   - What constraints did we impose without proof?
   - What happens if we remove a feature, policy, or assumption?
   - How can this be broken into smaller problems?
   - What happens if we do nothing?
7. Select the frame that creates the highest-value, most controllable next move.

## Template

```text
Original statement:

Hidden solution or cause:

Goal:

Aim statement:

System boundary:

Current baseline:

Guardrail or balancing measure:

Frame 1, user/operator:

Frame 2, owner/manager:

Frame 3, system constraint:

Frame 4, value/outcome:

Chosen frame:

Why this frame is better:

Next evidence needed:
```

## Output

- Original frame
- Reframed problem statement
- Explicit goal
- Aim, boundary, baseline, and guardrail
- Assumptions removed
- Next evidence needed

## Evidence Check

Before leaving this skill, confirm:

- The chosen frame can be tested or observed.
- The frame does not name a preferred solution as the problem.
- The frame names the affected user, workflow, or system.
- The aim and baseline make the gap measurable.
- The guardrail prevents "improvement" that damages another important outcome.
- The frame produces a smaller next step than the original statement.

## Handoff Prompt

```text
We are using Skill 1, Problem Framing and Reframing. Current problem: [original]. Proposed frame: [new frame]. Goal: [goal]. Aim: [target and date]. Boundary: [scope]. Baseline: [current state]. Guardrail: [what must not get worse]. Removed assumptions: [list]. Please challenge the frame and identify the next evidence needed before solution work begins.
```

## Watchouts

- Do not treat the first plausible explanation as the frame.
- Do not let the team discuss solutions while still writing symptoms and causes.
- Do not reward clever wording if the new frame cannot be tested.
- Do not accept a vague goal when a measurable aim can be written.
