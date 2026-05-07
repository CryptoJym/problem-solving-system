# Skill Domain Videos

These narrated videos are generated from structured skill data with:

```bash
node tools/generate-skill-videos.mjs
```

The checked-in neural narration path can be regenerated with:

```bash
python3 -m pip install --user edge-tts
VOICE_PROVIDER=edge EDGE_TTS_VOICE=en-US-AndrewNeural EDGE_TTS_RATE=-4% node tools/generate-skill-videos.mjs
```

Each clip teaches one skill through a paced five-scene sequence: overview, lead flow, business example, coding example, and output. The MP4s include voiceover from the configured narrator provider when available.

Last generated with edge-tts voice en-US-AndrewNeural at rate -4%.

For browser-native playback controls, use the GitHub Pages gallery:

https://cryptojym.github.io/problem-solving-system/

- [01. Problem Framing and Reframing](01-problem-framing-and-reframing.mp4)
- [02. Observation and Problem Finding](02-observation-and-problem-finding.mp4)
- [03. Root Cause and Constraint Mapping](03-root-cause-and-constraint-mapping.mp4)
- [04. Decision Hygiene and Option Widening](04-decision-hygiene-and-option-widening.mp4)
- [05. Reality Testing and Evidence Seeking](05-reality-testing-and-evidence-seeking.mp4)
- [06. Structured Ideation and Brainwriting](06-structured-ideation-and-brainwriting.mp4)
- [07. Rapid Prototyping and Experiments](07-rapid-prototyping-and-experiments.mp4)
- [08. Operating Rhythm Implementation](08-operating-rhythm-implementation.mp4)
- [09. Learning Mindset and Retrospective](09-learning-mindset-and-retrospective.mp4)
