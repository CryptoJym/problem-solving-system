# Skill Refinement and Gap Analysis

Date: 2026-05-12  
Trace ID: `trc_20260512_skill_refinement_8020`

## Executive Summary

The current Problem Solving System is directionally right. Its 80/20 strength is the sequence: stop premature solutions, observe reality, map causes, widen decisions, test assumptions, generate options, prototype, implement, and learn.

The biggest 80/20 improvement is not adding many methods. It is tightening the gates that force each skill to leave behind an inspectable artifact. The second biggest improvement is adding a small number of missing skills that prevent common failure modes the current stack only partially covers.

Recommended build order:

1. Add `PS-00 Problem-Type and Stakes Triage`.
2. Add `PS-10 Measurement and Success Signal Design`.
3. Add stakeholder/actor alignment as either a new skill or a required pre-observation subskill.
4. Add premortem/reversibility as a gate inside PS-04 first.
5. Upgrade PS-09 with decision memory before creating a separate knowledge-management skill.

## Research Basis

This synthesis uses:

- Local project artifacts: current README, ordered-skill rationale, source-review notes, and all nine `SKILL.md` files.
- External research lanes: problem formulation, contextual inquiry, Theory of Constraints, decision hygiene, premortems, inclusive ideation, lean startup, implementation science, psychological safety, stakeholder analysis, Cynefin, Pareto analysis, and measurement risk.

The direct ChatGPT Deep Research run was not claimed as launched. The UI was verified as logged in and showed `Latest • 5.5`, `Extended Pro`, and `Deep research`, but Chrome focus became unreliable after selecting the tool. The paste-ready prompt is preserved in `research/prompts/2026-05-12-01-framework-refinement.md`.

## Source-Backed Anchors

| Source | What It Supports |
| --- | --- |
| [HBR: Are You Solving the Right Problem?](https://hbr.org/2012/09/are-you-solving-the-right-problem) | Problem definition deserves early, explicit attention. |
| [Roth et al.: Problem formulation in intelligence analysis](https://journals.sagepub.com/doi/10.1518/155534310X12844000801087) | Framing should uncover underlying intent, context, and information needs. |
| [Contextual Design](https://www.interaction-design.org/literature/book/the-encyclopedia-of-human-computer-interaction-2nd-ed/contextual-design) | Observation should happen in the user's natural work context and capture tacit details. |
| [Lean Enterprise Institute: Theory of Constraints](https://www.lean.org/the-lean-post/articles/what-is-the-theory-of-constraints-and-how-does-it-compare-to-lean-thinking/) | Constraint work should focus on the limiting factor in the system, not isolated local improvements. |
| [Heath Brothers: Decisive resources](https://heathbrothers.com/decisive-paths/) | Decision hygiene should include widening, multitracking, disconfirmation, and tripwires. |
| [Liberating Structures: 1-2-4-All](https://www.liberatingstructures.com/1-1-2-4-all/) | Inclusive ideation benefits from structured individual-to-group progression. |
| [Lean Startup](https://www.lean.org/lexicon-terms/lean-startup/) | Prototype work should maximize validated learning with minimal build cost. |
| [Edmondson: Psychological Safety and Learning Behavior](https://journals.sagepub.com/doi/abs/10.2307/2666999) | Learning and retrospectives require conditions where people can take interpersonal risk. |
| [PMI: Stakeholder Analysis](https://www.pmi.org/learning/library/stakeholder-analysis-pivotal-practice-projects-8905) | Stakeholder mapping is a missing control surface for cross-functional problems. |
| [Cynefin](https://cynefin.io/index.php/Cynefin) | A method-selection skill should classify the problem space before action. |
| [ASQ: Pareto Chart](https://asq.org/quality-resources/pareto) | 80/20 prioritization should focus on the most significant causes or categories. |
| [PubMed: Goodhart's Law](https://pubmed.ncbi.nlm.nih.gov/29180439/) | Metric design should include anti-gaming and unintended-consequence checks. |

## 80/20 Diagnosis

The current framework already covers the main path of problem solving. The gaps are mostly "control surfaces" around the path:

| Gap | Why It Matters | 80/20 Action |
| --- | --- | --- |
| Problem type is not diagnosed before method choice | Complex, complicated, obvious, and chaotic problems require different action logic. | Add `PS-00` before framing. |
| Success measures are late or implicit | Teams can frame and prototype well but still optimize the wrong signal. | Add `PS-10` before prototype/implementation. |
| Stakeholders are present but not mapped | Political, cross-functional, and customer-facing problems fail when hidden actors are missed. | Add stakeholder map gate before PS-02 or as a new skill. |
| Risk/reversibility is scattered | Expensive or irreversible decisions need premortem and tripwire discipline before action. | Add premortem/reversibility gate to PS-04. |
| Learning is captured but not reused systematically | Without decision memory, teams rediscover old lessons. | Upgrade PS-09 with reusable decision records. |

## Refinements By Current Skill

| Skill | Keep | Refine | 80/20 Upgrade |
| --- | --- | --- | --- |
| PS-01 Problem Framing and Reframing | Keep as the first normal operating skill. Research and local source notes both support framing as high leverage. | Add a frame-quality checklist: actor, desired outcome, current obstacle, evidence, excluded hidden fix. Add "underlying intent" and "information request" checks from problem-formulation research. | Create a one-page `Frame Ledger`: complaint, hidden fix, stakeholders, alternate frames, chosen frame, evidence that would change the frame. |
| PS-02 Observation and Problem Finding | Keep. Contextual Design strongly supports going into the field and observing work in natural context. | Require at least one direct observation source and one artifact/log source. Add "standard case, edge case, failure case" sampling. | Add an `Observation Log`: expected behavior, observed behavior, workaround, emotional spike, repeated delay, candidate problem. |
| PS-03 Root Cause and Constraint Mapping | Keep. It is the correct bridge from symptoms to intervention. | Separate root causes, bottlenecks, constraints, and policy constraints. Mark every causal link as evidence-backed or assumed. | Add a `Constraint Test`: if this constraint improves, which downstream measure should move first? |
| PS-04 Decision Hygiene and Option Widening | Keep. It already maps closely to WRAP. | Make WRAP explicit: widen options, reality-test assumptions, attain distance, prepare to be wrong. Add "what would have to be true?" and a premortem for high-stakes decisions. | Add a required `Decision Card`: options, assumptions, disconfirming evidence, tripwires, rollback/reversibility. |
| PS-05 Reality Testing and Evidence Seeking | Keep. It prevents plans from becoming belief systems. | Add an evidence ladder: direct system data > observed behavior > comparable base rate > expert pattern > stakeholder opinion. Require at least one source that could contradict the preferred answer. | Add a `Confidence Update`: before confidence, after confidence, what changed, what would still change the recommendation. |
| PS-06 Structured Ideation and Brainwriting | Keep. It protects against production blocking and dominant voices. | Add 1-2-4-All as a fast inclusive variant and separate divergence from convergence. Do not vote until ideas have been combined and sharpened. | Add an `Idea Funnel`: raw ideas, clusters, combinations, top concepts, assumption each concept tests. |
| PS-07 Rapid Prototyping and Experiments | Keep. Lean Startup and MVP logic support the "smallest artifact that teaches" approach. | Add a learning contract before any build: riskiest assumption, test surface, expected signal, stop/revise/scale decision rule. | Add an `Experiment Card`: assumption, prototype, metric/signal, threshold, result, decision. |
| PS-08 Operating Rhythm Implementation | Keep. This is a distinctive strength of the current system. | Add behavior-change diagnosis before cadence design: capability, opportunity, motivation, friction, owner, cadence, visible signal. | Add a `Rhythm Card`: behavior, owner, cadence, signal, training, first review date, adjustment rule. |
| PS-09 Learning Mindset and Retrospective | Keep. It closes the loop. | Add psychological-safety conditions and after-action-review questions. Force distinction between fact, interpretation, feeling, and reusable rule. | Add a `Learning Record`: expected, actual, evidence, assumption updated, system update, where the lesson is stored. |

## Additional Skills To Add

### 1. PS-00 Problem-Type and Stakes Triage

Status: add now.

Purpose: Decide what kind of problem this is before applying the rest of the stack.

Research basis: Cynefin frames method choice around the kind of problem space. The current system assumes the user can select the next skill, but novices often cannot tell whether they are dealing with an obvious operational issue, a complicated expert problem, a complex adaptive problem, or an urgent chaotic incident.

80/20 value: Very high. A short triage prevents using the wrong method for the problem class.

Output:

- Problem type: obvious, complicated, complex, chaotic, or unclear.
- Stakes: low, medium, high, irreversible.
- Time horizon and decision deadline.
- Recommended first skill.
- Escalation or safety boundary.

### 2. PS-10 Measurement and Success Signal Design

Status: add now.

Purpose: Define what success, failure, leading indicators, lagging indicators, and unintended consequences look like before prototyping or implementation.

Research basis: ASQ's Pareto guidance supports focusing on the most significant causes when many causes exist. Goodhart's law warns that measures can break when they become targets. The current system asks for evidence, but it does not yet provide a dedicated metric-design skill.

80/20 value: Very high. Many otherwise good problem-solving efforts fail by optimizing the wrong metric.

Output:

- Goal metric.
- Leading signal.
- Lagging outcome.
- Guardrail metric.
- Goodhart / gaming risk.
- Review cadence.

### 3. Stakeholder and Actor Alignment

Status: add after PS-00 and PS-10, or embed between PS-01 and PS-02.

Purpose: Identify who is affected, who controls resources, who supplies evidence, who can block implementation, and who experiences the problem.

Research basis: PMI stakeholder analysis treats stakeholders as people or organizations involved in or affected by execution and outcomes. The current framework mentions stakeholders as inputs, but does not force a map.

80/20 value: High. Many business problems are not solved by better logic alone; they fail through missed actors, incentives, or power boundaries.

Output:

- Direct users/operators.
- Indirect users.
- Decision owners.
- Blockers.
- Beneficiaries and losers.
- Evidence holders.
- Communication plan.

### 4. Premortem and Risk Reversibility

Status: first embed in PS-04; promote later if used often.

Purpose: Before expensive action, imagine the decision failed and identify likely failure paths, early warning signs, tripwires, and rollback options.

Research basis: Gary Klein's premortem method and AHRQ's premortem tool support prospective failure analysis before launch. Heath Brothers decision resources also emphasize tripwires and preparing to be wrong.

80/20 value: High for high-stakes work; medium for small reversible decisions.

Output:

- Failure story.
- Top risks by likelihood and impact.
- Early warning signals.
- Reversibility rating.
- Prevention actions.
- Rollback rule.

### 5. Knowledge Reuse and Decision Memory

Status: upgrade PS-09 first; standalone skill later if the library grows.

Purpose: Make lessons findable and reusable so future teams do not rediscover old decisions, assumptions, and failures.

Research basis: This is mostly an inference from the current framework's artifact-driven style plus the learning literature. Psychological safety helps teams surface learning; decision memory makes the learning operational.

80/20 value: Medium-high. It compounds over time, but it is less urgent than triage, measurement, and stakeholder alignment.

Output:

- Decision record.
- Reusable rule.
- Tags/problem type.
- Linked evidence.
- When to reuse.
- When not to reuse.

## Suggested Future Stack

Use this order if expanding the framework:

| New Order | Code | Skill |
| ---: | --- | --- |
| 0 | PS-00 | Problem-Type and Stakes Triage |
| 1 | PS-01 | Problem Framing and Reframing |
| 2 | PS-02A or PS-02 | Stakeholder and Actor Alignment |
| 3 | PS-02 or PS-03 | Observation and Problem Finding |
| 4 | PS-03 or PS-04 | Root Cause and Constraint Mapping |
| 5 | PS-04 or PS-05 | Decision Hygiene and Option Widening |
| 6 | PS-05 or PS-06 | Reality Testing and Evidence Seeking |
| 7 | PS-10 | Measurement and Success Signal Design |
| 8 | PS-06 or PS-07 | Structured Ideation and Brainwriting |
| 9 | PS-07 or PS-08 | Rapid Prototyping and Experiments |
| 10 | PS-04 Gate or PS-11 | Premortem and Risk Reversibility |
| 11 | PS-08 | Operating Rhythm Implementation |
| 12 | PS-09 | Learning Mindset, Retrospective, and Decision Memory |

If you want to avoid renumbering the public system, keep PS-01 through PS-09 stable and add:

- `PS-00`
- `PS-10`
- `PS-11`
- `PS-12`

## What Not To Add Yet

| Candidate | Reason To Defer |
| --- | --- |
| Full Six Sigma DMAIC | Too heavy for the general skill stack; borrow Pareto, RCA, and control-chart ideas selectively. |
| Formal causal inference | Valuable for data-heavy systems, but too specialized for a default problem-solving framework. |
| TRIZ | Useful for invention/engineering contradictions, but lower recurrence for the general audience. |
| Full portfolio prioritization | Useful for PM organizations, but the current ask is problem solving, not portfolio governance. |
| Legal/compliance review | Add only as a domain-specific overlay; do not turn the core framework into compliance process. |

## Confidence Matrix

| Recommendation | Confidence | Basis |
| --- | --- | --- |
| Keep the nine-skill sequence | High | Strong local source fit and external support for framing, observation, causality, decisions, experiments, implementation, and learning. |
| Add PS-00 triage | High | Current system lacks method-selection guidance; Cynefin and practical operations both support context diagnosis. |
| Add PS-10 measurement | High | Current system under-specifies success signals; ASQ/Pareto and Goodhart risks support explicit metric design. |
| Add stakeholder alignment | Medium-high | PMI and local business applicability support it; placement needs UX decision. |
| Add premortem/reversibility | Medium-high | Strong source support, but may work best as a PS-04 gate before becoming standalone. |
| Upgrade PS-09 with decision memory | Medium | Strong local fit, but external source base is more inferential than direct. |

## Open Questions

1. Should public skill codes remain stable as PS-01 through PS-09, with new skills added as PS-00, PS-10, PS-11, and PS-12?
2. Should stakeholder alignment be standalone or embedded into PS-01/PS-02?
3. Should premortem be a separate skill or a high-stakes branch inside PS-04?
4. Should the public README teach the expanded stack or keep the nine-skill beginner path and put advanced skills in a second layer?

## Recommended Next Build Pass

1. Add `skills/00-problem-type-and-stakes-triage/SKILL.md`.
2. Add `skills/10-measurement-and-success-signal-design/SKILL.md`.
3. Update every existing skill with a compact `Activation Code`, `Entry Gate`, `Exit Gate`, and `Artifact`.
4. Add a "Skill Codes" section to the README using PS-00 through PS-10.
5. Add stakeholder alignment and premortem after validating whether users understand the first two additions.
