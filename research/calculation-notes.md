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

| Candidate | Recurrence | Consequence | Gap Coverage | Complexity | 80/20 Priority |
| --- | ---: | ---: | ---: | ---: | --- |
| Problem-Type and Stakes Triage | 5 | 5 | 4 | 2 | Very high |
| Measurement and Success Signal Design | 5 | 5 | 4 | 3 | Very high |
| Stakeholder and Actor Alignment | 5 | 4 | 4 | 3 | High |
| Premortem and Risk Reversibility | 4 | 5 | 3 | 2 | High |
| Knowledge Reuse and Decision Memory | 4 | 4 | 3 | 2 | Medium-high |
| Facilitation and Conflict Hygiene | 4 | 4 | 2 | 3 | Medium |
| Formal Portfolio Prioritization | 3 | 4 | 2 | 3 | Medium |
| Formal Causal Inference / Statistics | 2 | 5 | 2 | 5 | Defer / specialist |
| Full Six Sigma DMAIC | 2 | 4 | 1 | 5 | Defer / heavy process |
| TRIZ | 2 | 3 | 1 | 4 | Defer / specialist |

## 80/20 Build Recommendation

1. Add `PS-00 Problem-Type and Stakes Triage`.
2. Add `PS-10 Measurement and Success Signal Design`.
3. Add stakeholder/actor mapping either as `PS-02A` or a new `PS-02 Stakeholder and Actor Alignment`, then renumber only if the public UX can handle it.
4. Add premortem/reversibility as a decision gate inside PS-04 first; promote to a standalone skill only if repeated use shows it deserves its own workflow.
5. Upgrade PS-09 with decision memory before creating a separate knowledge-management skill.
