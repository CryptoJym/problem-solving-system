# Public Skill Pack Design

## Context

The repository already contains a ranked problem-solving system distilled from source course/project material. The next step is to make it useful outside the local workspace by turning each ranked item into a standalone, public-facing skill playbook and publishing the repository publicly on GitHub.

## Selected Approach

Use a skill-pack structure:

- Keep one folder per skill.
- Keep each `SKILL.md` usable on its own.
- Keep the ranked sequence visible in `README.md` and `skills/README.md`.
- Add concrete templates, evidence checks, and handoff prompts to each skill.
- Avoid private source excerpts, personal details, and unnecessary academic transcription.

This is better than a single long guide because problem solving work rarely starts at the same point every time. A user should be able to enter at the lowest-numbered skill that has not been done well yet. It is also simpler than packaging the repo as software, because the value is procedural reuse rather than runtime behavior.

## Public Repository Shape

The public repo should work for three audiences:

1. A person trying to solve one messy problem.
2. A facilitator running a team session.
3. An AI or operations agent selecting the next problem-solving move.

The repo should therefore include:

- a short top-level quickstart
- the ordered skill list
- one detailed `SKILL.md` per capability
- source review notes for provenance without leaking private/source noise
- a design note explaining the package structure

## Acceptance Criteria

- Each ranked item has a robust public-facing skill.
- Each skill includes when to use it, inputs, procedure, output, templates, evidence checks, and watchouts.
- Public docs avoid secrets, personal contact details, and offensive or private source language.
- Git history is clean and local verification passes.
- A public GitHub repository exists and `main` is pushed there.

