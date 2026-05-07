# Video Visual Refinement

## Context

The narrated audio is now acceptable, but the visual pass still had weak teaching frames. The main issues were generic business and coding scenes, lead-flow cards that behaved like text boxes, and repeated visual language that did not give each skill enough context.

## Update

The media generators now produce more concrete visual teaching assets:

- static README SVGs use cleaner scenario copy without repeated "Business:" and "Coding:" prefixes
- video lead-flow cards include diagrammatic visuals for conversations, crossed-out assumptions, maps, evidence, options, owners, rhythms, and next actions
- every video has skill-specific business before/after context
- every video has a skill-specific coding problem, evidence step, and next action
- posters and MP4s are regenerated from the refined source frames

## Continuity

The audio provider remains unchanged from the neural voiceover refresh. This pass changes the visual storyboards and regenerated media while preserving the good narration path.

## Verification Target

- all nine static SVGs validate with `xmllint`
- all nine MP4s render with H.264 video and AAC audio
- every video includes concrete business and coding examples tied to its skill
- the public Pages player and README image references continue to use the same asset paths
