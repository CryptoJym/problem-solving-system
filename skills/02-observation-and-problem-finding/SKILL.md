---
name: observation-and-problem-finding
rank: 2
description: Use when the team needs to find the right problem, collect symptoms, compare candidate problems, or observe how work actually happens in context.
---

# Observation and Problem Finding

## Use When

- There are many possible problems and no agreed priority.
- The problem is described secondhand.
- The team has opinions but little observation.
- The system is operational, behavioral, or customer-facing.
- Users say one thing but logs, artifacts, or behavior may show another.

## Inputs

- The domain, workflow, team, or customer segment to observe.
- A time box for observation.
- Known complaints or suspected problem areas.
- Access to at least one direct user, operator, artifact, log, or workflow.
- Constraints on what can be changed.
- Permission to observe the real environment without correcting it midstream.

## Quick Start

Run a 30-minute observation pass:

1. List suspected problems before looking.
2. Observe the real workflow in context without correcting it.
3. Record what people say separately from what they do.
4. Capture surprises, delays, interruptions, workarounds, edge cases, and external resources.
5. Convert observations into candidate problems.
6. Rank candidates by pain, value, feasibility, control, and evidence.

## Procedure

1. Collect candidate problems independently before group discussion.
2. Require each contributor to bring 3-5 observed problems or symptoms.
3. Separate symptoms from causes and solutions.
4. Use contextual inquiry methods:
   - shadow an operator or user
   - map behavior in a physical or digital space
   - walk the customer or operator journey
   - journal repeated observations
   - interview extreme users or edge cases
5. During observation, record:
   - what people say the process is
   - what they actually do
   - tools, notes, spreadsheets, scripts, or other external resources
   - interruptions, handoffs, waits, rework, and hidden recovery steps
   - variations between normal cases and edge cases
6. Validate recall with observation: when someone describes a step, ask to see the artifact, screen, log, ticket, or handoff it leaves behind.
7. Compare candidates by:
   - value if solved
   - feasibility within the time box
   - control over the causes
   - evidence strength
   - stakeholder pain
8. Select one or two finalists for deeper formulation.

## Template

```text
Observation target:

Observation method:

What we expected:

What surprised us:

What people said:

What people did:

Observed symptoms:

Workarounds:

External resources used:

Interruptions and handoffs:

Edge cases or variations:

Candidate problems:

Ranking criteria:

Selected problem(s):

Why selected:
```

## Output

- Candidate problem list
- Symptom list
- Contextual observation notes
- Say/do gaps
- Workarounds, interruptions, handoffs, and edge cases
- Problem selection rationale
- Open questions

## Evidence Check

Before leaving this skill, confirm:

- At least one candidate problem came from direct observation, not only opinion.
- The artifact separates what people said from what they did.
- Symptoms are separated from causes and solutions.
- Workarounds and edge cases are captured, not dismissed as noise.
- The selected problem is within the team's influence.
- The rationale explains why other candidates were deferred.

## Handoff Prompt

```text
We are using Skill 2, Observation and Problem Finding. Observation target: [target]. Methods used: [methods]. What people said: [summary]. What people did: [summary]. Candidate problems: [list]. Selected problem: [problem]. Evidence: [observations]. Please check whether we selected the right problem before root-cause mapping.
```

## Watchouts

- Do not select the most interesting problem if it is outside scope.
- Do not confuse volume of complaints with value.
- Do not rely only on what people say; observe what they do.
- Do not clean up the messy context before learning from it.
