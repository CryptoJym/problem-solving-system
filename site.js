const lessons = [
  {
    rank: "01",
    title: "Problem Framing and Reframing",
    slug: "problem-framing-and-reframing",
    accent: "#2563eb",
    useWhen: "The problem sounds vague, emotional, or already includes a fix.",
    promise: "Turn the complaint into a testable problem before anyone starts solving.",
    business: "A sales team says, 'We need more reps.' The reframed problem is a handoff delay after demos.",
    coding: "A team says, 'Rewrite the API.' The reframed problem is one slow endpoint hurting checkout.",
    transcript: "Start here. When someone says, we need more reps, pause before solving. That sentence already hides a fix. Strip the fix out, name the outcome, and look at the system. Maybe leads are stalling between marketing and sales. The useful question is simple: where does the evidence show the handoff breaking?"
  },
  {
    rank: "02",
    title: "Observation and Problem Finding",
    slug: "observation-and-problem-finding",
    accent: "#0891b2",
    useWhen: "People are guessing instead of watching the real work.",
    promise: "Find the problem worth solving by observing the workflow as it happens.",
    business: "Watch a support call before blaming training. The blocker may be the billing screen.",
    coding: "Replay a login flow before guessing the bug. The problem may be a stale session edge case.",
    transcript: "Before you accept the meeting-room story, watch the work happen. Sit with the support call, the signup flow, or the operator doing the task. Look for pauses, workarounds, repeated questions, and places people quietly recover from bad design. The real problem is often smaller, stranger, and more useful than the first complaint."
  },
  {
    rank: "03",
    title: "Root Cause and Constraint Mapping",
    slug: "root-cause-and-constraint-mapping",
    accent: "#7c3aed",
    useWhen: "Symptoms are clear, but causes are not.",
    promise: "Map what causes what, then find the bottleneck you can actually influence.",
    business: "Late orders come from an approval queue, not packing speed.",
    coding: "Flaky deploys come from shared test data, not the whole pipeline.",
    transcript: "When symptoms are clear but causes are not, slow down and map the chain. Name the goal. List the visible misses. Then connect causes with plain if-then logic and mark the links you have not proved yet. You are looking for the bottleneck you can influence, not a beautiful diagram. Fix the constraint, not the noise around it."
  },
  {
    rank: "04",
    title: "Decision Hygiene and Option Widening",
    slug: "decision-hygiene-and-option-widening",
    accent: "#ea580c",
    useWhen: "The team has only one favorite option.",
    promise: "Protect the decision from narrow framing, bias, and premature commitment.",
    business: "Compare three smaller software choices before buying the platform.",
    coding: "Compare tuning, splitting, and rollback before rewriting the service.",
    transcript: "Use this when the room has fallen in love with one answer. First name what could make the favorite fail. Then pretend that option disappeared and ask what you would do instead. Build at least three real paths, compare the tradeoffs, and set tripwires before work begins. A good decision has an escape route."
  },
  {
    rank: "05",
    title: "Reality Testing and Evidence Seeking",
    slug: "reality-testing-and-evidence-seeking",
    accent: "#16a34a",
    useWhen: "The plan depends on untested beliefs.",
    promise: "Check the claims that must be true before time, money, or trust is spent.",
    business: "Check real attendance data before changing a policy.",
    coding: "Inspect traces before adding a cache.",
    transcript: "Every plan rests on beliefs. Write down what must be true before the plan deserves time, money, or trust. Look wide for base rates and comparisons. Look close at logs, traces, interviews, or direct behavior. Then ask someone to argue against you. Confidence should move only when evidence moves."
  },
  {
    rank: "06",
    title: "Structured Ideation and Brainwriting",
    slug: "structured-ideation-and-brainwriting",
    accent: "#db2777",
    useWhen: "The team needs more and better ideas.",
    promise: "Generate options without letting the loudest voice or first idea dominate.",
    business: "Combine onboarding ideas before choosing one.",
    coding: "Combine test-speed ideas before changing CI.",
    transcript: "Once the problem is clear, do not let the loudest person choose the first idea. Give the group a sharp prompt. Have everyone write alone first. Then pass ideas around, combine them, and group the strongest themes. This creates more useful options before status, speed, or habit takes over."
  },
  {
    rank: "07",
    title: "Rapid Prototyping and Experiments",
    slug: "rapid-prototyping-and-experiments",
    accent: "#b77905",
    useWhen: "A big build can be tested with something small.",
    promise: "Learn from the smallest artifact that can test the riskiest assumption.",
    business: "Pilot a module with one team before rollout.",
    coding: "Test a stub before building the service.",
    transcript: "When the debate becomes abstract, make it testable. Pick the assumption most likely to break the plan. Build the smallest artifact that can teach you something: a pilot, a mockup, a stub, or a manual version of the workflow. Write the expected signal before the test. Then let the result change the plan."
  },
  {
    rank: "08",
    title: "Operating Rhythm Implementation",
    slug: "operating-rhythm-implementation",
    accent: "#0f766e",
    useWhen: "A solution must become repeated habit.",
    promise: "Turn a solution into ownership, cadence, visibility, and review.",
    business: "Review blockers and owners every week.",
    coding: "Check deploy health every day.",
    transcript: "A solution is not implemented just because someone announced it. It becomes real when people know the habit, the owner, the cadence, the visible score, and the review date. Decide what will happen every day, week, or cycle. Then make the progress visible enough that the system cannot quietly drift back."
  },
  {
    rank: "09",
    title: "Learning Mindset and Retrospective",
    slug: "learning-mindset-and-retrospective",
    accent: "#4f46e5",
    useWhen: "After action, one decision needs a lesson.",
    promise: "Convert results and surprises into better future behavior.",
    business: "A missed pilot target becomes a better script.",
    coding: "A noisy alert becomes a clearer signal.",
    transcript: "After action, capture the lesson while the evidence is still fresh. Compare what you expected with what actually happened. Separate facts from the story you want to tell. Name what the result proved, disproved, or left unknown. Then update the rule so the next decision starts smarter than this one did."
  }
];

const paths = (lesson) => ({
  video: `assets/skill-domain-videos/${lesson.rank}-${lesson.slug}.mp4`,
  poster: `assets/skill-domain-posters/${lesson.rank}-${lesson.slug}.jpg`,
  skill: `skills/${lesson.rank}-${lesson.slug}/SKILL.md`,
  voice: `assets/skill-domain-voiceovers/${lesson.rank}-${lesson.slug}.txt`
});

const root = document.documentElement;
const video = document.querySelector("#lesson-video");
const source = document.querySelector("#lesson-source");
const activeRank = document.querySelector("#active-rank");
const activeTitle = document.querySelector("#active-title");
const activeUse = document.querySelector("#active-use");
const notesTitle = document.querySelector("#notes-title");
const notesPromise = document.querySelector("#notes-promise");
const businessExample = document.querySelector("#business-example");
const codingExample = document.querySelector("#coding-example");
const transcript = document.querySelector("#transcript");
const videoLink = document.querySelector("#video-link");
const skillLink = document.querySelector("#skill-link");
const voiceLink = document.querySelector("#voice-link");
const playlist = document.querySelector("#playlist");
const lessonGrid = document.querySelector("#lesson-grid");

function pauseOtherVideos(activeVideo) {
  document.querySelectorAll("video").forEach((player) => {
    if (player !== activeVideo) {
      player.pause();
    }
  });
}

function selectLesson(index, options = {}) {
  const lesson = lessons[index];
  const lessonPaths = paths(lesson);

  pauseOtherVideos(video);
  root.style.setProperty("--active", lesson.accent);
  activeRank.textContent = lesson.rank;
  activeTitle.textContent = lesson.title;
  activeUse.textContent = lesson.useWhen;
  notesTitle.textContent = lesson.title;
  notesPromise.textContent = lesson.promise;
  businessExample.textContent = lesson.business;
  codingExample.textContent = lesson.coding;
  transcript.textContent = lesson.transcript;
  video.poster = lessonPaths.poster;
  source.src = lessonPaths.video;
  video.load();
  videoLink.href = lessonPaths.video;
  skillLink.href = lessonPaths.skill;
  voiceLink.href = lessonPaths.voice;

  playlist.querySelectorAll("button").forEach((button, buttonIndex) => {
    button.setAttribute("aria-selected", String(buttonIndex === index));
  });

  if (options.focusTheater) {
    document.querySelector(".theater").scrollIntoView({ behavior: "smooth", block: "start" });
    video.focus({ preventScroll: true });
  }
}

const total = lessons.length;
lessons.forEach((lesson, index) => {
  // Table-of-contents row
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.type = "button";
  button.style.setProperty("--accent", lesson.accent);
  button.setAttribute("role", "option");
  button.setAttribute("aria-selected", index === 0 ? "true" : "false");
  button.innerHTML = `
    <span class="toc-num">${lesson.rank}</span>
    <span class="toc-title">${lesson.title}</span>
    <span class="toc-leader" aria-hidden="true"></span>
    <span class="toc-folio">p.&thinsp;${String(index + 1).padStart(2, "0")}</span>
  `;
  button.addEventListener("click", () => selectLesson(index));
  li.append(button);
  playlist.append(li);

  // Lesson card (chapter)
  const card = document.createElement("article");
  card.className = "lesson-card";
  card.style.setProperty("--accent", lesson.accent);
  const lessonPaths = paths(lesson);
  card.innerHTML = `
    <div class="lesson-card-media">
      <video controls preload="metadata" playsinline poster="${lessonPaths.poster}" aria-label="${lesson.title} narrated lesson">
        <source src="${lessonPaths.video}" type="video/mp4">
      </video>
    </div>
    <div class="lesson-card-body">
      <div class="lc-head">
        <span class="lc-rank">${lesson.rank}</span>
        <strong>${lesson.title}</strong>
      </div>
      <p class="lc-use">${lesson.useWhen}</p>
      <div class="lc-actions">
        <button type="button" aria-label="Load ${lesson.title} in the featured theater">Load in theater</button>
        <a href="${lessonPaths.video}">Open MP4</a>
        <a href="${lessonPaths.skill}">Skill file</a>
      </div>
    </div>
  `;
  card.querySelector("video").addEventListener("play", (event) => pauseOtherVideos(event.currentTarget));
  card.querySelector("button").addEventListener("click", () => selectLesson(index, { focusTheater: true }));
  lessonGrid.append(card);
});

video.addEventListener("play", (event) => pauseOtherVideos(event.currentTarget));
