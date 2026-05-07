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
    transcript: "Skill one is problem framing and reframing. Use it when the complaint is emotional, vague, or already hiding a fix. Do not start with, we need more reps, or rewrite the API. First remove the built in solution. Then name the outcome, map the system, and ask what evidence would prove the real problem. The output is a clearer problem, fewer assumptions, and a next proof step."
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
    transcript: "Skill two is observation and problem finding. Use it when everyone has an opinion but nobody has watched the work. Sit with the workflow. Notice the workarounds, the repeated questions, and the places where people hesitate. In business, that may reveal a billing screen instead of a training issue. In code, it may reveal a stale session instead of a broken login system. The output is an evidence backed target."
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
    transcript: "Skill three is root cause and constraint mapping. Use it when the symptoms are obvious but the causes are contested. Start with the system goal, then list the visible bad effects. Connect causes with if then logic and mark the weak links. The goal is not a huge diagram. The goal is to find the bottleneck you can influence. Late orders may be an approval queue. Flaky deploys may be shared test data."
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
    transcript: "Skill four is decision hygiene and option widening. Use it when the room has fallen in love with one answer. Name the risks before you defend the choice. Then run the vanishing option test: if the favorite disappeared, what would we do? Add real alternatives and define tripwires before work starts. This protects business purchases and coding rewrites from becoming expensive commitments with no escape route."
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
    transcript: "Skill five is reality testing and evidence seeking. Use it when a plan depends on beliefs that have not been checked. List what must be true. Look wide for base rates and comparisons. Look close at logs, interviews, traces, or direct behavior. Then invite pushback. A policy change may need attendance data first. A cache may need trace evidence first. Confidence should move only when the evidence moves."
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
    transcript: "Skill six is structured ideation and brainwriting. Use it after the problem is clear, but the solution set is thin. Start with a sharp prompt. Have people write alone first, so status and speed do not decide the answer. Then pass ideas around, combine them, and group themes. In business, this improves onboarding ideas. In code, it surfaces safer ways to speed up tests before changing the pipeline."
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
    transcript: "Skill seven is rapid prototyping and experiments. Use it when the debate is abstract and a small test could answer the risky question. Pick the assumption most likely to break the plan. Build only enough to test it. Write the expected signal before you run the test. A business module can pilot with one team. A service can start as a stub. The output is learning before full commitment."
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
    transcript: "Skill eight is operating rhythm implementation. Use it when the fix must become a habit. A solution is not implemented because someone announced it. It is implemented when there is an owner, a cadence, a visible score, and a review date. Business teams may review blockers weekly. Engineering teams may check deploy health daily. The output is a loop that keeps the change alive."
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
    transcript: "Skill nine is learning mindset and retrospective. Use it after action, especially when the result surprised you. Compare expected to actual. Separate the facts from the story. Name what the evidence proved or disproved, then update the belief. A missed pilot target can become a better script. A noisy alert can become a clearer signal. The output is a reusable lesson and a next move."
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

function selectLesson(index) {
  const lesson = lessons[index];
  const lessonPaths = paths(lesson);

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
}

const total = lessons.length;
lessons.forEach((lesson, index) => {
  // Table-of-contents row
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.type = "button";
  button.style.setProperty("--accent", lesson.accent);
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
    <div class="lesson-card-img">
      <img src="${lessonPaths.poster}" alt="${lesson.title} video poster" loading="lazy">
    </div>
    <div class="lesson-card-body">
      <div class="lc-head">
        <span class="lc-rank">${lesson.rank}</span>
        <strong>${lesson.title}</strong>
      </div>
      <p class="lc-use">${lesson.useWhen}</p>
      <a href="${lessonPaths.video}">Open narrated MP4</a>
    </div>
  `;
  lessonGrid.append(card);
});
