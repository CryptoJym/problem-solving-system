# Skill Voiceover Transcripts

Last generated with edge-tts voice en-US-AndrewNeural at rate -4%.

The generator supports OpenAI Text-to-Speech through `VOICE_PROVIDER=openai`, `OPENAI_TTS_MODEL=gpt-4o-mini-tts`, and `OPENAI_TTS_VOICE=marin`. It also supports neural Edge TTS through `VOICE_PROVIDER=edge`, `EDGE_TTS_VOICE=en-US-AndrewNeural`, and `EDGE_TTS_RATE=-4%`. In `VOICE_PROVIDER=auto`, it tries OpenAI first when `OPENAI_API_KEY` is present, then Edge TTS when available, then macOS `say` with `LOCAL_TTS_VOICE="Reed (English (US))"` and `LOCAL_TTS_RATE=158`.

To regenerate the checked-in neural narration path:

```bash
python3 -m pip install --user edge-tts
VOICE_PROVIDER=edge EDGE_TTS_VOICE=en-US-AndrewNeural EDGE_TTS_RATE=-4% node tools/generate-skill-videos.mjs
```

## 01. Problem Framing and Reframing

Start here. When someone says, we need more reps, pause before solving. That sentence already hides a fix. Strip the fix out, name the outcome, and look at the system. Maybe leads are stalling between marketing and sales. The useful question is simple: where does the evidence show the handoff breaking?

## 02. Observation and Problem Finding

Before you accept the meeting-room story, watch the work happen. Sit with the support call, the signup flow, or the operator doing the task. Look for pauses, workarounds, repeated questions, and places people quietly recover from bad design. The real problem is often smaller, stranger, and more useful than the first complaint.

## 03. Root Cause and Constraint Mapping

When symptoms are clear but causes are not, slow down and map the chain. Name the goal. List the visible misses. Then connect causes with plain if-then logic and mark the links you have not proved yet. You are looking for the bottleneck you can influence, not a beautiful diagram. Fix the constraint, not the noise around it.

## 04. Decision Hygiene and Option Widening

Use this when the room has fallen in love with one answer. First name what could make the favorite fail. Then pretend that option disappeared and ask what you would do instead. Build at least three real paths, compare the tradeoffs, and set tripwires before work begins. A good decision has an escape route.

## 05. Reality Testing and Evidence Seeking

Every plan rests on beliefs. Write down what must be true before the plan deserves time, money, or trust. Look wide for base rates and comparisons. Look close at logs, traces, interviews, or direct behavior. Then ask someone to argue against you. Confidence should move only when evidence moves.

## 06. Structured Ideation and Brainwriting

Once the problem is clear, do not let the loudest person choose the first idea. Give the group a sharp prompt. Have everyone write alone first. Then pass ideas around, combine them, and group the strongest themes. This creates more useful options before status, speed, or habit takes over.

## 07. Rapid Prototyping and Experiments

When the debate becomes abstract, make it testable. Pick the assumption most likely to break the plan. Build the smallest artifact that can teach you something: a pilot, a mockup, a stub, or a manual version of the workflow. Write the expected signal before the test. Then let the result change the plan.

## 08. Operating Rhythm Implementation

A solution is not implemented just because someone announced it. It becomes real when people know the habit, the owner, the cadence, the visible score, and the review date. Decide what will happen every day, week, or cycle. Then make the progress visible enough that the system cannot quietly drift back.

## 09. Learning Mindset and Retrospective

After action, capture the lesson while the evidence is still fresh. Compare what you expected with what actually happened. Separate facts from the story you want to tell. Name what the result proved, disproved, or left unknown. Then update the rule so the next decision starts smarter than this one did.
