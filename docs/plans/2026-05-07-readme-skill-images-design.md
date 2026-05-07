# README Skill Images Design

## Context

The public README already explains the nine problem-solving skills in text. The requested improvement is to add visual explanations that make each skill easier to understand at a glance and show where it applies in both business and coding work.

## Selected Approach

Use one repo-native SVG image per skill domain. Each image includes:

- the skill name and rank
- a short "use when" trigger
- a four-step workflow
- one business scenario
- one coding scenario
- the expected output artifact

This approach keeps the README durable on GitHub without relying on external image hosting. It also makes the images easy to regenerate from `tools/generate-skill-images.mjs` if the examples or visual style need to change later.

## Acceptance Criteria

- Nine image assets exist under `assets/skill-domain-images/`.
- The top-level `README.md` embeds all nine images.
- Each image includes a business example and a coding example.
- The images illustrate how the skill works, not just decorate the page.
- Generated assets and README changes pass syntax and redaction checks.

