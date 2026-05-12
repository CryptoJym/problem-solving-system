# Skill Refinement and Gap Analysis

Date: 2026-05-12  
Trace ID: `trc_20260512_skill_refinement_8020`

## Executive Summary

The Deep Research result changes the recommendation from "add several missing
skills" to a stricter 80/20 answer:

1. Keep the leverage-first architecture.
2. Add one new core skill: `Stakeholder Alignment and Adoption Design`.
3. Reorder the learning path so structured ideation comes before decision
   narrowing.
4. Treat measurement as a cross-cutting discipline inside existing skills, not a
   standalone new skill.
5. Defer niche additions until usage data shows recurring failure modes.

The current system is strong because it improves the front end of messy work
before solution commitment: frame the problem, observe reality, map causes,
generate options, test assumptions, prototype, implement, and learn. The
highest-value gap is the social and operational adoption layer between a tested
prototype and a repeatable operating rhythm.

## Research Basis

This synthesis uses:

- Local project artifacts: current README, ordered-skill rationale, source-review
  notes, and all nine `SKILL.md` files.
- User-provided ChatGPT Deep Research result preserved at
  `research/results/2026-05-12-01-framework-refinement-result.md`.
- External research lanes named by the Deep Research result: design thinking,
  contextual inquiry, root cause analysis, Theory of Constraints, WRAP/decision
  hygiene, behavioral decision research, evidence-based management, creativity
  research, Lean Startup, PDSA/improvement science, implementation science,
  psychological safety, and after-action reviews.

The ChatGPT Deep Research run was launched in a clean Chrome window at
`2026-05-12 12:18 MDT`; the UI showed `Latest • 5.5`, `Extended Pro`, and
`Deep research` active. The final content was provided by the user in this Codex
thread and is treated as the harvested result. The ChatGPT citation tokens in
that pasted result were internal `turn...` markers, so the source register maps
the result to public source families and URLs rather than preserving unresolved
internal citation IDs as public links.

## 80/20 Diagnosis

The current nine-skill stack already covers the main path. The failure modes
worth fixing are not best handled by adding many more chapters.

| Gap | Why It Matters | 80/20 Action |
| --- | --- | --- |
| Adoption work starts too late | A well-framed, evidence-tested solution can still fail if incentives, workflow fit, role clarity, champions, readiness, or speaking-up norms are missing. | Add one new skill between prototyping and operating rhythm. |
| Measurement is spread across the system | Teams need aims, baselines, signals, guardrails, and experiment thresholds, but these moments naturally belong inside framing, evidence, experiments, and sustainment. | Embed measurement gates in existing skills. |
| Decision narrowing appears before ideation in the public order | The current order can be used well, but the teaching path is clearer if teams diverge before they converge. | Move structured ideation before decision hygiene in the recommended learning path. |
| Root-cause work can stop at weak remedies | Training, reminders, and policy memos often do not change the system. | Add active-constraint logic and action-strength ranking inside PS-03. |
| Retrospectives can stay reflective instead of operational | A lesson has little value if it does not change a checklist, cadence, decision rule, owner, or system artifact. | Upgrade PS-09 with after-action-review follow-through. |

## Refinements By Current Skill

| Skill | Keep | Refine | Recommendation |
| --- | --- | --- | --- |
| PS-01 Problem Framing and Reframing | Keep the "strip hidden fixes from the complaint" move. | Add a required aim statement, system boundary, baseline, and guardrail/balancing measure so framing produces a measurable problem. | Refine inside existing skill |
| PS-02 Observation and Problem Finding | Keep direct observation as a separate domain. | Upgrade it to contextual inquiry: observe in the real environment, validate recall with observation, record external resources, interruptions, workarounds, and edge cases, and separate what users say from what they do. | Refine inside existing skill |
| PS-03 Root Cause and Constraint Mapping | Keep cause mapping plus constraint focus. | Avoid the single-root-cause trap, identify the active constraint, and rank remedies by action strength. | Refine inside existing skill |
| PS-04 Decision Hygiene and Option Widening | Keep the anti-tunnel rule. | Add an outside-view/base-rate check, one premortem, and explicit kill criteria/tripwires. In the learning path, place this after ideation. | Refine inside existing skill |
| PS-05 Reality Testing and Evidence Seeking | Keep zoom-out/zoom-in evidence and disagreement seeking. | Add an evidence register distinguishing research evidence, local data, stakeholder evidence, and practitioner expertise, plus lightweight critical appraisal and confidence ratings. | Refine inside existing skill |
| PS-06 Structured Ideation and Brainwriting | Keep as a distinct skill. | Preserve silent first-round writing and add a combination/analogy round before voting. | Keep as-is |
| PS-07 Rapid Prototyping and Experiments | Keep one-assumption-at-a-time testing and low-fidelity prototypes. | Add an experiment card: focal assumption, smallest test, prediction, success/failure threshold, data to collect, and next decision. Distinguish MVP tests from PDSA cycles. | Refine inside existing skill |
| PS-08 Operating Rhythm Implementation | Keep cadence, owners, visible metrics, communication, training, and first review. | Narrow this skill to sustainment and standard work after adoption design has been handled. | Refine after adding new skill |
| PS-09 Learning Mindset and Retrospective | Keep retrospective as the closing skill. | Add an after-action-review structure: expected vs. actual, what helped, what hurt, why, corrective action owner, and system update. Keep the tone blame-light. | Refine inside existing skill |

## New Skill To Add

### Stakeholder Alignment and Adoption Design

Status: add now.

Purpose: make a tested solution adoptable before it becomes an operating rhythm.

Research basis: implementation science separates implementation outcomes from
business or clinical outcomes and names constructs such as acceptability,
adoption, appropriateness, feasibility, fidelity, cost, penetration, and
sustainability. CFIR similarly frames implementation around barriers and
facilitators across innovation, outer setting, inner setting, individuals, and
implementation process. Psychological-safety research adds that teams need
conditions where people can speak up about risk, friction, and failure early.

80/20 value: very high. It prevents the expensive failure mode where a good
solution never becomes routine behavior.

Core output:

- Stakeholder map: affected users, operators, decision owners, blockers,
  beneficiaries, and evidence holders.
- Adoption risks: incentives, workflow fit, readiness, role clarity, local
  barriers, and local facilitators.
- Champion and escalation plan.
- Acceptability / feasibility / fidelity checks.
- Psychological-safety prompt: what must be safe to report early?
- Rollout readiness decision: proceed, adjust, pilot again, or stop.

## What Not To Add Yet

| Candidate | Reason To Defer |
| --- | --- |
| Standalone Measurement, Baselines, and Guardrails | High-value, but better embedded in PS-01, PS-05, PS-07, and PS-08 than taught as a separate chapter. |
| Standalone Risk Premortems and Failure Forecasting | Important for high-stakes decisions, but the highest-value moves fit inside PS-04 and PS-05. |
| Standalone Facilitation and Group Process Design | Useful, but the most common failure is already partly handled by brainwriting, silent-first ideation, and psychological-safety design. |
| Advanced Systems Modeling and Scenario Planning | Powerful in some contexts, but too specialized for the public core stack. |
| Benefits Realization / Portfolio Triage | Useful for organizations managing many initiatives, but not the highest current gap in this problem-solving framework. |
| Full Six Sigma DMAIC, formal causal inference, TRIZ, legal/compliance review | Valuable domain overlays, but too heavy or specialized for the general core path. |

## Suggested Future Stack

Use this order for the next public learning path:

| New Order | Code | Skill |
| ---: | --- | --- |
| 1 | PS-01 | Problem Framing and Reframing |
| 2 | PS-02 | Observation and Problem Finding |
| 3 | PS-03 | Root Cause and Constraint Mapping |
| 4 | PS-04 | Structured Ideation and Brainwriting |
| 5 | PS-05 | Decision Hygiene and Option Selection |
| 6 | PS-06 | Reality Testing and Evidence Seeking |
| 7 | PS-07 | Rapid Prototyping and Experiments |
| 8 | PS-08 | Stakeholder Alignment and Adoption Design |
| 9 | PS-09 | Operating Rhythm and Sustainment |
| 10 | PS-10 | Learning Mindset and After-Action Review |

If preserving existing public numbering matters, keep the current PS-01 through
PS-09 folders stable for now and add the adoption skill as `PS-08A` or `PS-10`
until a larger versioned release can renumber the learning path.

## Confidence Matrix

| Recommendation | Confidence | Basis |
| --- | --- | --- |
| Add Stakeholder Alignment and Adoption Design | High | Strong convergence across implementation outcomes, CFIR/barriers/facilitators, effective implementation, and psychological safety; clear gap in current stack. |
| Add aims, baselines, and guardrails to PS-01 | High | Converges with design process, improvement science, and evidence-based practice. |
| Upgrade PS-02 to contextual inquiry discipline | High | Strong fit for business operations and software/product work. |
| Strengthen PS-03 with action hierarchy and active-constraint logic | Medium-high | Strong systems logic, though some action-hierarchy evidence comes from healthcare safety. |
| Add outside-view, premortem, and tripwires to PS-04 | Medium-high | Strong support from decision-hygiene and forecasting literature. |
| Keep PS-06 as a distinct brainwriting skill | High | Well-supported by creativity research and directly aligned with current design. |
| Use MVP and PDSA explicitly in PS-07 | High | Strong convergence across Lean Startup and improvement science. |
| Defer standalone facilitation, forecasting, scenario planning, and portfolio triage | Medium | Sensible 80/20 call, but depends on audience and observed usage data. |

## Validation Tests

1. Frame quality test: audit the first 20 real uses of PS-01/PS-02 and measure
   how often the original complaint changes materially after observation.
2. Option quality test: require artifacts showing at least three materially
   different options, one outside-view check, one premortem, and objective
   tripwires.
3. Experiment quality test: audit whether each PS-07 experiment shows one focal
   assumption, a prediction, a smallest-possible test, a measurement plan, and a
   next-decision rule.
4. Adoption readiness test: after adding the new skill, compare implementation
   stall rate before and after. Measure acceptability, adoption, feasibility,
   fidelity, and sustainment at 30, 60, and 90 days.
5. Learning-loop closure test: check whether each retrospective produces a named
   system update, owner, and review date; then track recurrence of the same
   failure class.

## Recommended Next Build Pass

1. Add `skills/10-stakeholder-alignment-and-adoption-design/SKILL.md`.
2. Update PS-01 with aim, boundary, baseline, and guardrail fields.
3. Update PS-02 with contextual-inquiry prompts and say/do separation.
4. Update PS-03 with active-constraint and action-strength checks.
5. Update PS-04 with outside-view, premortem, and tripwire fields.
6. Update PS-07 with MVP/PDSA experiment-card variants.
7. Update PS-09 with after-action-review follow-through.
8. Keep public numbering stable until the new adoption skill has examples,
   visuals, video, and README integration.
