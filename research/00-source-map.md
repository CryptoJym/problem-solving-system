# Source Map: Skill Refinement and Gap Analysis

Date: 2026-05-12  
Trace ID: `trc_20260512_skill_refinement_8020`

## Decision To Support

Refine the nine-skill Problem Solving System and identify the smallest set of additional skills that would fill the highest-value framework gaps. Apply the 80/20 rule throughout: prioritize the few refinements and additions most likely to improve real-world problem-solving outcomes.

## Audience

- General business operators and managers
- Software/product teams using the system for coding and delivery problems
- AI agents or facilitators invoking the skills by code

## Local Project Context

- `README.md` - public system overview, skill stack, operating loop, and media links.
- `docs/ordered-skill-system.md` - rationale for the current nine-skill order.
- `docs/source-review-notes.md` - original Drive/class-source review notes.
- `skills/01-problem-framing-and-reframing/SKILL.md`
- `skills/02-observation-and-problem-finding/SKILL.md`
- `skills/03-root-cause-and-constraint-mapping/SKILL.md`
- `skills/04-decision-hygiene-and-option-widening/SKILL.md`
- `skills/05-reality-testing-and-evidence-seeking/SKILL.md`
- `skills/06-structured-ideation-and-brainwriting/SKILL.md`
- `skills/07-rapid-prototyping-and-experiments/SKILL.md`
- `skills/08-operating-rhythm-implementation/SKILL.md`
- `skills/09-learning-mindset-and-retrospective/SKILL.md`

## External Research Lanes

| Lane | Why It Matters | Representative Sources |
| --- | --- | --- |
| Problem framing and formulation | Validates the high priority of PS-01 and improves how frames are challenged. | HBR problem definition; Roth et al. intelligence-analysis problem formulation; design framing literature |
| Field observation and contextual inquiry | Improves PS-02 with stronger observation protocol and tacit-work capture. | Contextual Design / contextual inquiry |
| Constraints and causal logic | Improves PS-03 by separating constraints from symptoms and marking unproven links. | Lean Enterprise Institute TOC; 5 Whys / RCA sources |
| Decision hygiene | Improves PS-04 and PS-05 through WRAP, tripwires, premortems, and disconfirmation. | Heath Brothers Decisive resources; Gary Klein premortem |
| Ideation and facilitation | Improves PS-06 with more inclusive, lower-friction idea generation. | Brainwriting research; Liberating Structures |
| Prototyping and experimentation | Improves PS-07 with explicit learning thresholds and MVP discipline. | Lean Startup / validated learning |
| Implementation and behavior change | Identifies the highest-value new skill: stakeholder alignment and adoption design before operating rhythm. | Proctor implementation outcomes; CFIR; effective implementation sources; psychological safety |
| Learning systems | Improves PS-09 with psychological safety and after-action-review discipline. | Edmondson psychological safety; AAR sources |
| Measurement and prioritization | Refines PS-01, PS-05, PS-07, and PS-08 with aims, baselines, guardrails, evidence registers, experiment thresholds, and sustainment signals. | Model for Improvement; CEBMa; PDSA; Goodhart risk sources |
| Stakeholder alignment | Identifies the missing adoption-control layer between experiments and operating rhythm. | Implementation science; CFIR; psychological safety |

## ChatGPT Deep Research Status

The ChatGPT web UI was opened and verified as logged in. The UI displayed:

- Model menu label: `Latest • 5.5`
- Selected mode label after configuration: `Extended Pro`
- Tool menu option: `Deep research`

Direct run launch is tracked in `research/TRACKER.md`. The first browser attempt was blocked by unreliable Chrome focus, but the run was relaunched successfully in a clean Chrome window at `2026-05-12 12:18 MDT`. The final Deep Research content was supplied by the user in the Codex thread and preserved at `research/results/2026-05-12-01-framework-refinement-result.md`.

An OpenAI API Deep Research fallback was also attempted with `o4-mini-deep-research`, `web_search_preview`, background mode, and a bounded `max_tool_calls=60`. The API request failed with `insufficient_quota`, so it produced no result text.
