# Hyper-Frame Video Design

## Context

The static skill-domain images explain each problem-solving skill with four visual frames, plus a business example and coding example. The video pass turns those same images into short motion walkthroughs so a viewer can follow the lesson without reading the whole README first.

## Selected Approach

Use the existing SVGs as the source of truth, then generate one MP4 per skill. Each clip adds a temporary overlay that highlights the story cards in order:

1. Intro: show the whole workflow and call out `1 -> 2 -> 3 -> 4`.
2. Frame 1: highlight the starting situation.
3. Frame 2: highlight the correction or evidence step.
4. Frame 3: highlight the system view or test setup.
5. Frame 4: highlight the decision, proof, or learning output.

This keeps the video content consistent with the images and avoids rebuilding a separate motion design system.

## Output Shape

- Source script: `tools/generate-skill-videos.mjs`
- Source images: `assets/skill-domain-images/*.svg`
- Output videos: `assets/skill-domain-videos/*.mp4`
- Output index: `assets/skill-domain-videos/README.md`

Each video is a short H.264 MP4 at `1280x976`, no audio, with a white/accent hover-frame over the active panel.

## Acceptance Criteria

- Generate exactly nine MP4 files, one for each ranked skill.
- Each video highlights frames in the order `1 -> 2 -> 3 -> 4`.
- The README links every video from a dedicated Motion Walkthroughs section.
- Generated temporary PNG/SVG frames are not committed.
- `ffprobe` can read every MP4 without stream errors.
