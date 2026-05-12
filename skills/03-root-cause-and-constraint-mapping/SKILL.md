---
name: root-cause-and-constraint-mapping
rank: 3
description: Use when a symptom list must be converted into causes, constraints, action strength, and a controllable causal model.
---

# Root Cause and Constraint Mapping

## Use When

- Symptoms are known but causes are contested.
- The team needs to know what actually needs to change.
- A complex system has multiple undesirable effects.
- The team may be optimizing a non-constraint.
- Proposed fixes are weak, such as training, reminders, or policy memos without system change.

## Inputs

- A selected problem frame.
- A list of observed undesirable effects.
- Any existing logs, interviews, artifacts, or workflow evidence.
- Known constraints, policies, dependencies, and owner boundaries.
- A definition of the system goal.

## Quick Start

Use a 25-minute causal map:

1. Write the system goal.
2. List the most important undesirable effects.
3. Connect effects with "if this, then that" logic.
4. Mark every unproven causal link.
5. Identify the active constraint or smallest controllable cause that could change multiple effects.
6. Rank candidate remedies by action strength before choosing one.

## Procedure

1. Define the goal of the system.
2. Write 3-7 undesirable effects as complete single-consequence statements.
3. Build a cause-and-effect map using if-then logic.
4. Run 5 Whys on the most important symptoms.
5. Check each causal link:
   - clarity
   - existence
   - causality
   - missing additional causes
   - insufficient cause
   - predicted observable effect
6. Avoid the single-root-cause trap. If the logic branches, preserve multiple contributing causes instead of forcing one tidy answer.
7. Identify the active constraint or small set of controllable causes.
8. Rank candidate interventions by action strength:
   - strong: redesigns workflow, tooling, constraints, automation, defaults, or forcing functions
   - moderate: adds checklists, decision aids, visibility, or standard work
   - weak: relies mainly on memory, training, warnings, persuasion, or policy reminders
9. Mark causes outside the team's control separately.

## Template

```text
System goal:

Undesirable effects:
1.
2.
3.

Cause chain:
If [cause], then [effect], because [logic/evidence].

Unproven links:

Active constraint:

Controllable causes:

Candidate interventions and action strength:
1.
2.
3.

Out-of-scope causes:

Next intervention candidate:
```

## Output

- Goal statement
- UDE list
- 5 Whys chains
- Current Reality Tree or equivalent cause map
- Constraint statement
- Action-strength ranking
- Controllable next intervention

## Evidence Check

Before leaving this skill, confirm:

- Each major causal link has evidence or is marked as an assumption.
- The constraint is not just the loudest symptom.
- At least one intervention targets a controllable cause.
- The selected intervention is not only a weak action unless stronger actions are impossible.
- Multiple contributing causes remain visible when the evidence supports a system pattern.
- Out-of-control causes are labeled for escalation, not hidden.

## Handoff Prompt

```text
We are using Skill 3, Root Cause and Constraint Mapping. Goal: [goal]. UDEs: [list]. Causal map summary: [summary]. Active constraint: [constraint]. Controllable interventions by action strength: [ranking]. Proposed intervention: [intervention]. Please check the causal logic and identify weak links before decision work.
```

## Watchouts

- Do not accept a 5 Whys chain without evidence.
- Do not force a single root cause when the logic branches.
- Do not solve causes outside your control unless the task is to escalate.
- Do not treat training or policy reminders as strong fixes unless the system already makes the right action easy.
