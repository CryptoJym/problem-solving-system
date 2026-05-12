# Calculation Notes: 80/20 Prioritization

Trace ID: `trc_20260512_skill_refinement_8020`

## Scoring Method

Candidate refinements and additional skills were scored qualitatively using:

`80/20 value = recurrence x consequence x gap coverage / implementation complexity`

Each factor is scored 1-5:

- `recurrence`: how often this failure appears across business and software problem solving.
- `consequence`: how expensive the failure is when it occurs.
- `gap coverage`: how poorly the current nine-skill system covers it.
- `implementation complexity`: how hard it is to teach, apply, and maintain.

This is not a statistical model. It is a prioritization aid to separate high-leverage additions from interesting but lower-yield methods.

## Candidate Additional Skills

The harvested Deep Research result supersedes the earlier local-only ranking.
The revised 80/20 conclusion is stricter: add one new core skill now, then fold
the remaining high-value refinements into existing skills.

| Candidate | Recurrence | Consequence | Gap Coverage | Complexity | 80/20 Priority |
| --- | ---: | ---: | ---: | ---: | --- |
| Stakeholder Alignment and Adoption Design | 5 | 5 | 5 | 3 | Add now |
| Measurement, Baselines, and Guardrails | 5 | 5 | 3 | 2 | Embed in existing skills |
| Premortem and Risk Reversibility | 4 | 5 | 3 | 2 | Embed in PS-04/PS-05 |
| Facilitation and Group Process Design | 4 | 4 | 2 | 3 | Defer / embed |
| Problem-Type and Stakes Triage | 4 | 4 | 2 | 2 | Defer until usage data shows need |
| Knowledge Reuse and Decision Memory | 4 | 4 | 2 | 2 | Embed in PS-09 |
| Formal Portfolio Prioritization | 3 | 4 | 2 | 3 | Defer |
| Formal Causal Inference / Statistics | 2 | 5 | 2 | 5 | Defer / specialist |
| Full Six Sigma DMAIC | 2 | 4 | 1 | 5 | Defer / heavy process |
| TRIZ | 2 | 3 | 1 | 4 | Defer / specialist |

## 80/20 Build Recommendation

1. Add `Stakeholder Alignment and Adoption Design` as the next core skill.
2. Embed measurement fields into PS-01, PS-05, PS-07, and PS-08.
3. Embed premortem/reversibility as a decision gate inside PS-04.
4. Add contextual inquiry prompts to PS-02 and action-strength checks to PS-03.
5. Upgrade PS-09 with after-action-review follow-through before creating any separate knowledge-management skill.
