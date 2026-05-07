# Neural Voiceover Refresh

## Context

The first narrated lesson videos used macOS `say` as the checked-in fallback voice. That made the files reproducible, but the audio sounded like system dictation and weakened the public lesson experience.

## Update

The generator now supports a better fallback chain:

- OpenAI Text-to-Speech when `VOICE_PROVIDER=openai` or when `VOICE_PROVIDER=auto` has a usable `OPENAI_API_KEY`
- neural Edge TTS when `VOICE_PROVIDER=edge` or when OpenAI is unavailable in `auto`
- macOS `say` only as the final local fallback

The checked-in media was regenerated with `VOICE_PROVIDER=edge`, `EDGE_TTS_VOICE=en-US-AndrewNeural`, and `EDGE_TTS_RATE=-4%`.

Regeneration command:

```bash
python3 -m pip install --user edge-tts
VOICE_PROVIDER=edge EDGE_TTS_VOICE=en-US-AndrewNeural EDGE_TTS_RATE=-4% node tools/generate-skill-videos.mjs
```

## Content Change

The narration scripts were rewritten from label-like descriptions into short guided lesson scripts. The videos were also tightened from roughly 30 seconds to roughly 24 seconds so the motion does not continue long after the narration ends.

## Verification Target

- all nine MP4s include H.264 video and AAC audio
- all nine voiceover transcript files match the new scripts
- the Pages theater and inline library still load the regenerated MP4s
