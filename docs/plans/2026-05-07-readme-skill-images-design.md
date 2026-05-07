# README Skill Images Design

## Context

The public README already explains the nine problem-solving skills in text. The requested improvement is to add visual explanations that make each skill easier to understand at a glance and show where it applies in both business and coding work.

## Selected Approach

Use one repo-native SVG image per skill domain. Each image includes:

- the skill name and rank
- a short "use when" trigger
- a four-step workflow shown as larger framed cards
- one business scenario
- one coding scenario
- the expected output artifact

This approach keeps the README durable on GitHub without relying on external image hosting. It also makes the images easy to regenerate from `tools/generate-skill-images.mjs` if the examples or visual style need to change later.

## Visual Layout

The workflow section uses a two-by-two frame layout instead of a single compressed row. This keeps long labels inside their cards and makes the sequence readable on GitHub's scaled README view. Each frame card also includes lightweight hover emphasis for SVG viewers that support it, while the static layout remains complete when hover or motion is unavailable.

## Acceptance Criteria

- Nine image assets exist under `assets/skill-domain-images/`.
- The top-level `README.md` embeds all nine images.
- Each image includes a business example and a coding example.
- The images illustrate how the skill works, not just decorate the page.
- Generated assets and README changes pass syntax and redaction checks.
