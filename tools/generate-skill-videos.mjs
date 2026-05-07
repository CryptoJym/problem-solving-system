import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync, rmdirSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const videoDir = "assets/skill-domain-videos";
const voiceDir = "assets/skill-domain-voiceovers";
const posterDir = "assets/skill-domain-posters";
const tmpDir = ".tmp";
const frameDir = join(tmpDir, "skill-video-frames");

const width = 1920;
const height = 1080;
const transition = 0.55;
const voice = process.env.SKILL_VOICE || "Samantha";
const voiceRate = process.env.SKILL_VOICE_RATE || "168";

mkdirSync(videoDir, { recursive: true });
mkdirSync(voiceDir, { recursive: true });
mkdirSync(posterDir, { recursive: true });
rmSync(frameDir, { recursive: true, force: true });
mkdirSync(frameDir, { recursive: true });

const skills = [
  {
    rank: "01",
    title: "Problem Framing and Reframing",
    slug: "problem-framing-and-reframing",
    accent: "#2563eb",
    useWhen: "The problem sounds vague, emotional, or already includes a fix.",
    promise: "Turn the complaint into a testable problem before anyone starts solving.",
    steps: [
      ["Hear complaint", "Capture the words people are actually using."],
      ["Remove hidden fix", "Cross out the solution pretending to be the problem."],
      ["Reframe goal", "Name the outcome the system should create."],
      ["Ask evidence question", "Decide what proof would change the next move."]
    ],
    business: "A sales team says, 'We need more reps.' The reframed problem is a handoff delay after demos.",
    coding: "A team says, 'Rewrite the API.' The reframed problem is one slow endpoint hurting checkout.",
    output: "Clear problem frame, goal, assumptions removed, and the next proof to gather.",
    voiceover: "Skill one is problem framing and reframing. Use it when the complaint is emotional, vague, or already hiding a fix. Do not start with, we need more reps, or rewrite the API. First remove the built in solution. Then name the outcome, map the system, and ask what evidence would prove the real problem. The output is a clearer problem, fewer assumptions, and a next proof step."
  },
  {
    rank: "02",
    title: "Observation and Problem Finding",
    slug: "observation-and-problem-finding",
    accent: "#0891b2",
    useWhen: "People are guessing instead of watching the real work.",
    promise: "Find the problem worth solving by observing the workflow as it happens.",
    steps: [
      ["Watch work", "Observe the real workflow without leading the witness."],
      ["Note surprises", "Write down workarounds, confusion, and skipped steps."],
      ["Sort signals", "Separate one-off noise from repeated pain."],
      ["Pick problem", "Choose the target with the strongest evidence."]
    ],
    business: "Watch a support call before blaming training. The blocker may be the billing screen.",
    coding: "Replay a login flow before guessing the bug. The problem may be a stale session edge case.",
    output: "Observed problems, notes, evidence strength, and a chosen target.",
    voiceover: "Skill two is observation and problem finding. Use it when everyone has an opinion but nobody has watched the work. Sit with the workflow. Notice the workarounds, the repeated questions, and the places where people hesitate. In business, that may reveal a billing screen instead of a training issue. In code, it may reveal a stale session instead of a broken login system. The output is an evidence backed target."
  },
  {
    rank: "03",
    title: "Root Cause and Constraint Mapping",
    slug: "root-cause-and-constraint-mapping",
    accent: "#7c3aed",
    useWhen: "Symptoms are clear, but causes are not.",
    promise: "Map what causes what, then find the bottleneck you can actually influence.",
    steps: [
      ["Name goal", "State what the system is supposed to produce."],
      ["List bad effects", "Capture visible misses, delays, errors, and waste."],
      ["Connect causes", "Build if-then links and mark weak assumptions."],
      ["Find bottleneck", "Pick the constraint or controllable cause."]
    ],
    business: "Late orders come from an approval queue, not packing speed.",
    coding: "Flaky deploys come from shared test data, not the whole pipeline.",
    output: "Cause map, bottleneck, weak links, and next fix candidate.",
    voiceover: "Skill three is root cause and constraint mapping. Use it when the symptoms are obvious but the causes are contested. Start with the system goal, then list the visible bad effects. Connect causes with if then logic and mark the weak links. The goal is not a huge diagram. The goal is to find the bottleneck you can influence. Late orders may be an approval queue. Flaky deploys may be shared test data."
  },
  {
    rank: "04",
    title: "Decision Hygiene and Option Widening",
    slug: "decision-hygiene-and-option-widening",
    accent: "#ea580c",
    useWhen: "The team has only one favorite option.",
    promise: "Protect the decision from narrow framing, bias, and premature commitment.",
    steps: [
      ["Name risk", "Write down what could make the choice fail."],
      ["Remove favorite", "Ask what you would do if the favorite vanished."],
      ["Add options", "Create at least three real paths."],
      ["Set stop rule", "Define tripwires before action begins."]
    ],
    business: "Compare three smaller software choices before buying the platform.",
    coding: "Compare tuning, splitting, and rollback before rewriting the service.",
    output: "Options, assumptions, selected path, and pivot rules.",
    voiceover: "Skill four is decision hygiene and option widening. Use it when the room has fallen in love with one answer. Name the risks before you defend the choice. Then run the vanishing option test: if the favorite disappeared, what would we do? Add real alternatives and define tripwires before work starts. This protects business purchases and coding rewrites from becoming expensive commitments with no escape route."
  },
  {
    rank: "05",
    title: "Reality Testing and Evidence Seeking",
    slug: "reality-testing-and-evidence-seeking",
    accent: "#16a34a",
    useWhen: "The plan depends on untested beliefs.",
    promise: "Check the claims that must be true before time, money, or trust is spent.",
    steps: [
      ["List beliefs", "Name what must be true for the plan to work."],
      ["Look wide", "Use base rates, comparisons, and outside evidence."],
      ["Look close", "Use direct observation, logs, interviews, or tests."],
      ["Invite pushback", "Ask what would make the plan wrong."]
    ],
    business: "Check real attendance data before changing a policy.",
    coding: "Inspect traces before adding a cache.",
    output: "Beliefs, evidence, confidence level, and revised recommendation.",
    voiceover: "Skill five is reality testing and evidence seeking. Use it when a plan depends on beliefs that have not been checked. List what must be true. Look wide for base rates and comparisons. Look close at logs, interviews, traces, or direct behavior. Then invite pushback. A policy change may need attendance data first. A cache may need trace evidence first. Confidence should move only when the evidence moves."
  },
  {
    rank: "06",
    title: "Structured Ideation and Brainwriting",
    slug: "structured-ideation-and-brainwriting",
    accent: "#db2777",
    useWhen: "The team needs more and better ideas.",
    promise: "Generate options without letting the loudest voice or first idea dominate.",
    steps: [
      ["Send prompt", "Give the group a clear problem and constraints."],
      ["Write alone", "Let everyone create ideas before discussion."],
      ["Build ideas", "Pass, combine, and improve the raw material."],
      ["Group themes", "Cluster ideas and choose tests."]
    ],
    business: "Combine onboarding ideas before choosing one.",
    coding: "Combine test-speed ideas before changing CI.",
    output: "Idea inventory, clusters, top concepts, and testing candidates.",
    voiceover: "Skill six is structured ideation and brainwriting. Use it after the problem is clear, but the solution set is thin. Start with a sharp prompt. Have people write alone first, so status and speed do not decide the answer. Then pass ideas around, combine them, and group themes. In business, this improves onboarding ideas. In code, it surfaces safer ways to speed up tests before changing the pipeline."
  },
  {
    rank: "07",
    title: "Rapid Prototyping and Experiments",
    slug: "rapid-prototyping-and-experiments",
    accent: "#ca8a04",
    useWhen: "A big build can be tested with something small.",
    promise: "Learn from the smallest artifact that can test the riskiest assumption.",
    steps: [
      ["Pick risk", "Choose the assumption most likely to break the plan."],
      ["Try small", "Build the lowest fidelity test that can teach you."],
      ["Predict signal", "Write what result would count before the test."],
      ["Decide next", "Stop, revise, scale, or continue."]
    ],
    business: "Pilot a module with one team before rollout.",
    coding: "Test a stub before building the service.",
    output: "Prototype, result, lesson, and next decision.",
    voiceover: "Skill seven is rapid prototyping and experiments. Use it when the debate is abstract and a small test could answer the risky question. Pick the assumption most likely to break the plan. Build only enough to test it. Write the expected signal before you run the test. A business module can pilot with one team. A service can start as a stub. The output is learning before full commitment."
  },
  {
    rank: "08",
    title: "Operating Rhythm Implementation",
    slug: "operating-rhythm-implementation",
    accent: "#0f766e",
    useWhen: "A solution must become repeated habit.",
    promise: "Turn a solution into ownership, cadence, visibility, and review.",
    steps: [
      ["Name habit", "Translate the solution into repeated behavior."],
      ["Set rhythm", "Choose the cadence and the visible check-in."],
      ["Pick owner", "Make one person accountable for the loop."],
      ["Check score", "Review the metric after the first cycle."]
    ],
    business: "Review blockers and owners every week.",
    coding: "Check deploy health every day.",
    output: "Rhythm, owner, score, review date, and communication script.",
    voiceover: "Skill eight is operating rhythm implementation. Use it when the fix must become a habit. A solution is not implemented because someone announced it. It is implemented when there is an owner, a cadence, a visible score, and a review date. Business teams may review blockers weekly. Engineering teams may check deploy health daily. The output is a loop that keeps the change alive."
  },
  {
    rank: "09",
    title: "Learning Mindset and Retrospective",
    slug: "learning-mindset-and-retrospective",
    accent: "#4f46e5",
    useWhen: "After action, one decision needs a lesson.",
    promise: "Convert results and surprises into better future behavior.",
    steps: [
      ["Compare result", "Separate expected from actual."],
      ["Name proof", "State what the evidence proved or disproved."],
      ["Update belief", "Change the rule, model, or assumption."],
      ["Choose next", "Decide what happens differently now."]
    ],
    business: "A missed pilot target becomes a better script.",
    coding: "A noisy alert becomes a clearer signal.",
    output: "Lesson, updated belief, reusable rule, and next move.",
    voiceover: "Skill nine is learning mindset and retrospective. Use it after action, especially when the result surprised you. Compare expected to actual. Separate the facts from the story. Name what the evidence proved or disproved, then update the belief. A missed pilot target can become a better script. A noisy alert can become a clearer signal. The output is a reusable lesson and a next move."
  }
];

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function commandExists(command) {
  try {
    execFileSync("which", [command], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function wrap(text, maxChars) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function textLines(text, x, y, options = {}) {
  const {
    maxChars = 42,
    size = 34,
    weight = 500,
    color = "#172033",
    lineHeight = Math.round(size * 1.28),
    anchor = "start",
    family = "Avenir Next, Helvetica Neue, Arial, sans-serif",
    maxLines = 8,
    className = ""
  } = options;
  const lines = wrap(text, maxChars).slice(0, maxLines);
  const tspans = lines
    .map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${esc(line)}</tspan>`)
    .join("");
  return `<text ${className ? `class="${className}"` : ""} x="${x}" y="${y}" text-anchor="${anchor}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${color}">${tspans}</text>`;
}

function background(skill, sceneLabel) {
  const dots = [];
  for (let y = 74; y < height; y += 68) {
    for (let x = 84; x < width; x += 68) {
      if ((x + y) % 3 === 0) {
        dots.push(`<circle cx="${x}" cy="${y}" r="2.2" fill="#182033" opacity="0.055"/>`);
      }
    }
  }
  return `
  <rect width="${width}" height="${height}" fill="#f4f1ea"/>
  <rect x="0" y="0" width="${width}" height="16" fill="${skill.accent}"/>
  <path d="M0 830 C360 760 540 980 940 900 C1310 828 1500 642 1920 730 L1920 1080 L0 1080 Z" fill="${skill.accent}" opacity="0.065"/>
  <path d="M1350 0 L1920 0 L1920 420 C1750 358 1582 300 1340 330 Z" fill="${skill.accent}" opacity="0.12"/>
  <g>${dots.join("")}</g>
  <text x="84" y="82" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="24" font-weight="800" fill="#172033" opacity="0.72">PROBLEM SOLVING SYSTEM</text>
  <text x="1836" y="82" text-anchor="end" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="22" font-weight="800" fill="${skill.accent}">${esc(sceneLabel)}</text>
  <line x1="84" y1="116" x2="1836" y2="116" stroke="#172033" stroke-width="2" opacity="0.12"/>
  `;
}

function sceneShell(skill, sceneLabel, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  ${background(skill, sceneLabel)}
  ${body}
</svg>`;
}

function pill(x, y, text, skill, w = 190) {
  return `
  <rect x="${x}" y="${y}" width="${w}" height="46" rx="23" fill="${skill.accent}"/>
  <text x="${x + w / 2}" y="${y + 30}" text-anchor="middle" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="22" font-weight="900" fill="#ffffff">${esc(text)}</text>`;
}

function flowCard(x, y, w, h, step, label, desc, skill) {
  return `
  <g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="26" fill="#ffffff" stroke="#172033" stroke-opacity="0.12" stroke-width="3"/>
    <rect x="${x + 24}" y="${y + 24}" width="58" height="58" rx="18" fill="${skill.accent}"/>
    <text x="${x + 53}" y="${y + 62}" text-anchor="middle" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="28" font-weight="900" fill="#ffffff">${step}</text>
    ${textLines(label, x + 104, y + 62, { maxChars: 18, size: 32, weight: 900, color: "#172033", lineHeight: 34, maxLines: 2 })}
    <rect x="${x + 24}" y="${y + 118}" width="${w - 48}" height="${h - 150}" rx="22" fill="${skill.accent}" opacity="0.09"/>
    ${textLines(desc, x + 44, y + 178, { maxChars: 24, size: 27, weight: 650, color: "#263143", lineHeight: 36, maxLines: 4 })}
  </g>`;
}

function miniPerson(x, y, skill, opacity = 1) {
  return `
  <circle cx="${x}" cy="${y}" r="20" fill="${skill.accent}" opacity="${opacity}"/>
  <path d="M${x - 34} ${y + 62} C${x - 28} ${y + 30} ${x + 28} ${y + 30} ${x + 34} ${y + 62} Z" fill="${skill.accent}" opacity="${opacity * 0.35}"/>`;
}

function sceneIntro(skill) {
  return sceneShell(skill, "NARRATED LESSON", `
    <text x="84" y="252" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="160" font-weight="900" fill="${skill.accent}">${skill.rank}</text>
    ${textLines(skill.title, 84, 382, { maxChars: 24, size: 82, weight: 900, color: "#172033", lineHeight: 88, maxLines: 3 })}
    ${textLines(skill.promise, 88, 642, { maxChars: 46, size: 39, weight: 650, color: "#3e4858", lineHeight: 52, maxLines: 3 })}
    ${pill(88, 812, "USE WHEN", skill, 176)}
    ${textLines(skill.useWhen, 292, 845, { maxChars: 54, size: 32, weight: 700, color: "#172033", lineHeight: 42, maxLines: 2 })}
    <rect x="1216" y="238" width="532" height="610" rx="38" fill="#ffffff" stroke="#172033" stroke-width="3" stroke-opacity="0.12"/>
    <text x="1266" y="314" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="30" font-weight="900" fill="#172033">Before solving</text>
    <path d="M1280 395 L1684 395" stroke="${skill.accent}" stroke-width="7" stroke-linecap="round"/>
    <rect x="1280" y="444" width="174" height="120" rx="22" fill="#f4f1ea" stroke="#172033" stroke-width="2" stroke-opacity="0.12"/>
    <rect x="1512" y="444" width="174" height="120" rx="22" fill="${skill.accent}" opacity="0.12" stroke="${skill.accent}" stroke-width="3"/>
    <path d="M1458 504 L1500 504" stroke="#172033" stroke-width="4" stroke-linecap="round"/>
    <path d="M1490 486 L1510 504 L1490 522" fill="none" stroke="#172033" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    ${textLines("Complaint", 1302, 604, { maxChars: 18, size: 24, weight: 800, color: "#596274" })}
    ${textLines("Testable lesson", 1534, 604, { maxChars: 18, size: 24, weight: 800, color: "#596274" })}
    <text x="1266" y="718" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="30" font-weight="900" fill="#172033">What the video gives you</text>
    ${textLines(skill.output, 1268, 770, { maxChars: 30, size: 28, weight: 650, color: "#3e4858", lineHeight: 38, maxLines: 3 })}
  `);
}

function sceneFlow(skill) {
  const xs = [84, 534, 984, 1434];
  const cards = skill.steps.map(([label, desc], index) =>
    flowCard(xs[index], 286, 360, 476, index + 1, label, desc, skill)
  ).join(`
    <path d="M0 0" />
  `);
  const arrows = [444, 894, 1344].map((x) => `
    <path d="M${x} 524 L${x + 54} 524" stroke="${skill.accent}" stroke-width="7" stroke-linecap="round"/>
    <path d="M${x + 40} 500 L${x + 66} 524 L${x + 40} 548" fill="none" stroke="${skill.accent}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  `).join("");
  return sceneShell(skill, "LEAD FLOW", `
    ${textLines("Lead flow: the four moves", 84, 218, { maxChars: 34, size: 62, weight: 900, color: "#172033", lineHeight: 70 })}
    ${arrows}
    ${cards}
    <rect x="84" y="852" width="1752" height="98" rx="26" fill="#ffffff" stroke="#172033" stroke-width="2" stroke-opacity="0.10"/>
    ${textLines(skill.output, 128, 912, { maxChars: 84, size: 32, weight: 760, color: "#172033", lineHeight: 42, maxLines: 2 })}
  `);
}

function sceneBusiness(skill) {
  return sceneShell(skill, "BUSINESS EXAMPLE", `
    <text x="84" y="218" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="64" font-weight="900" fill="#172033">Business example</text>
    ${textLines(skill.business, 88, 298, { maxChars: 48, size: 42, weight: 700, color: "#344052", lineHeight: 54, maxLines: 3 })}
    <rect x="104" y="520" width="530" height="250" rx="34" fill="#ffffff" stroke="#172033" stroke-width="3" stroke-opacity="0.12"/>
    ${miniPerson(210, 618, skill)}
    ${miniPerson(292, 618, skill, 0.78)}
    ${miniPerson(374, 618, skill, 0.56)}
    <rect x="456" y="584" width="110" height="78" rx="12" fill="#f4f1ea" stroke="${skill.accent}" stroke-width="4"/>
    <path d="M482 626 L540 626" stroke="${skill.accent}" stroke-width="5" stroke-linecap="round"/>
    <path d="M482 606 L522 606" stroke="#172033" stroke-width="4" opacity="0.28" stroke-linecap="round"/>
    <path d="M482 646 L534 646" stroke="#172033" stroke-width="4" opacity="0.28" stroke-linecap="round"/>
    <path d="M704 646 L826 646" stroke="${skill.accent}" stroke-width="8" stroke-linecap="round"/>
    <path d="M806 606 L858 646 L806 686" fill="none" stroke="${skill.accent}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="928" y="460" width="824" height="388" rx="34" fill="#ffffff" stroke="#172033" stroke-width="3" stroke-opacity="0.12"/>
    ${pill(976, 510, "MOVE", skill, 134)}
    ${textLines("Watch the real handoff. Find the step that actually slows the work.", 976, 610, { maxChars: 44, size: 38, weight: 760, color: "#172033", lineHeight: 50, maxLines: 3 })}
    <rect x="976" y="744" width="690" height="34" rx="17" fill="${skill.accent}" opacity="0.18"/>
    <rect x="976" y="744" width="430" height="34" rx="17" fill="${skill.accent}"/>
    <text x="976" y="824" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="26" font-weight="800" fill="#596274">Proof replaces opinion.</text>
  `);
}

function sceneCoding(skill) {
  return sceneShell(skill, "CODING EXAMPLE", `
    <text x="84" y="218" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="64" font-weight="900" fill="#172033">Coding example</text>
    ${textLines(skill.coding, 88, 298, { maxChars: 48, size: 42, weight: 700, color: "#344052", lineHeight: 54, maxLines: 3 })}
    <rect x="84" y="440" width="780" height="390" rx="28" fill="#172033"/>
    <circle cx="132" cy="492" r="11" fill="#ff6b6b"/>
    <circle cx="168" cy="492" r="11" fill="#ffd166"/>
    <circle cx="204" cy="492" r="11" fill="#06d6a0"/>
    <text x="132" y="574" font-family="Menlo, Consolas, monospace" font-size="31" font-weight="700" fill="#dce6f7">$ inspect the narrow symptom</text>
    <text x="132" y="638" font-family="Menlo, Consolas, monospace" font-size="31" font-weight="700" fill="${skill.accent}">trace -> measure -> isolate</text>
    <text x="132" y="702" font-family="Menlo, Consolas, monospace" font-size="31" font-weight="700" fill="#dce6f7">$ change only what evidence supports</text>
    <rect x="1004" y="448" width="670" height="100" rx="22" fill="#ffffff" stroke="${skill.accent}" stroke-width="4"/>
    <rect x="1004" y="608" width="670" height="100" rx="22" fill="#ffffff" stroke="${skill.accent}" stroke-width="4" opacity="0.82"/>
    <rect x="1004" y="768" width="670" height="100" rx="22" fill="#ffffff" stroke="${skill.accent}" stroke-width="4" opacity="0.68"/>
    <text x="1040" y="510" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="34" font-weight="900" fill="#172033">Symptom</text>
    <text x="1040" y="670" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="34" font-weight="900" fill="#172033">Evidence</text>
    <text x="1040" y="830" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="34" font-weight="900" fill="#172033">Small fix</text>
    <path d="M1316 554 L1316 596" stroke="${skill.accent}" stroke-width="7" stroke-linecap="round"/>
    <path d="M1296 582 L1316 604 L1336 582" fill="none" stroke="${skill.accent}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1316 714 L1316 756" stroke="${skill.accent}" stroke-width="7" stroke-linecap="round"/>
    <path d="M1296 742 L1316 764 L1336 742" fill="none" stroke="${skill.accent}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  `);
}

function sceneOutput(skill) {
  const outputs = skill.output.split(",").map((item) => item.trim().replace(/\.$/, ""));
  return sceneShell(skill, "OUTPUT", `
    <text x="84" y="224" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="76" font-weight="900" fill="#172033">What this skill gives you</text>
    <rect x="84" y="318" width="840" height="500" rx="36" fill="#ffffff" stroke="#172033" stroke-width="3" stroke-opacity="0.12"/>
    ${outputs.map((item, index) => `
      <circle cx="148" cy="${408 + index * 86}" r="18" fill="${skill.accent}"/>
      ${textLines(item, 190, 420 + index * 86, { maxChars: 32, size: 34, weight: 800, color: "#172033", lineHeight: 42, maxLines: 2 })}
    `).join("")}
    <rect x="1030" y="318" width="744" height="500" rx="36" fill="${skill.accent}" opacity="0.12" stroke="${skill.accent}" stroke-width="4"/>
    <text x="1092" y="426" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="42" font-weight="900" fill="#172033">Decision rule</text>
    ${textLines("Do not move to the next skill until this output exists in a form someone else can inspect.", 1092, 508, { maxChars: 34, size: 38, weight: 760, color: "#172033", lineHeight: 52, maxLines: 4 })}
    <path d="M1094 748 L1628 748" stroke="${skill.accent}" stroke-width="8" stroke-linecap="round"/>
    <path d="M1598 718 L1634 748 L1598 778" fill="none" stroke="${skill.accent}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  `);
}

function renderFrame(skill, sceneName, svg) {
  const dir = join(frameDir, `${skill.rank}-${skill.slug}`);
  mkdirSync(dir, { recursive: true });
  const svgPath = join(dir, `${sceneName}.svg`);
  const pngPath = join(dir, `${sceneName}.png`);
  writeFileSync(svgPath, svg);
  execFileSync("magick", ["-background", "#f4f1ea", svgPath, pngPath], { stdio: "inherit" });
  return pngPath;
}

function renderPoster(skill, introPng) {
  const posterPath = join(posterDir, `${skill.rank}-${skill.slug}.jpg`);
  execFileSync("magick", [introPng, "-quality", "88", posterPath], { stdio: "inherit" });
  return posterPath;
}

function renderVoiceover(skill) {
  const m4aPath = join(voiceDir, `${skill.rank}-${skill.slug}.m4a`);
  const transcriptPath = join(voiceDir, `${skill.rank}-${skill.slug}.txt`);
  writeFileSync(transcriptPath, `${skill.title}\n\n${skill.voiceover}\n`);

  if (!commandExists("say")) {
    return null;
  }

  const aiffPath = join(frameDir, `${skill.rank}-${skill.slug}.aiff`);
  execFileSync("say", ["-v", voice, "-r", voiceRate, "-o", aiffPath, skill.voiceover], { stdio: "inherit" });
  execFileSync("ffmpeg", [
    "-v", "error",
    "-y",
    "-i", aiffPath,
    "-ac", "1",
    "-ar", "44100",
    "-c:a", "aac",
    "-b:a", "128k",
    m4aPath
  ], { stdio: "inherit" });
  return m4aPath;
}

function mediaDuration(path) {
  if (!path || !existsSync(path)) {
    return 30;
  }
  const output = execFileSync("ffprobe", [
    "-v", "error",
    "-show_entries", "format=duration",
    "-of", "default=noprint_wrappers=1:nokey=1",
    path
  ], { encoding: "utf8" }).trim();
  return Number(output) || 30;
}

function renderSilentVideo(skill, pngs, targetDuration) {
  const silentPath = join(frameDir, `${skill.rank}-${skill.slug}-silent.mp4`);
  const segmentDuration = (targetDuration + transition * (pngs.length - 1)) / pngs.length;

  const args = ["-v", "error", "-y"];
  for (const png of pngs) {
    args.push("-loop", "1", "-t", segmentDuration.toFixed(3), "-i", png);
  }

  const prepared = pngs.map((_, index) => {
    const driftX = 18 + index * 3;
    const driftY = 10 + index * 2;
    return `[${index}:v]scale=2000:1125,crop=${width}:${height}:x='(iw-ow)/2+${driftX}*sin(t*.45+${index})':y='(ih-oh)/2+${driftY}*cos(t*.38+${index})',setsar=1,fps=30,format=yuv420p[v${index}]`;
  }).join(";");

  let chain = "";
  let last = "v0";
  for (let index = 1; index < pngs.length; index += 1) {
    const out = index === pngs.length - 1 ? "outv" : `x${index}`;
    const offset = index * (segmentDuration - transition);
    chain += `;[${last}][v${index}]xfade=transition=fade:duration=${transition}:offset=${offset.toFixed(3)}[${out}]`;
    last = out;
  }

  args.push(
    "-filter_complex", `${prepared}${chain}`,
    "-map", `[${last}]`,
    "-c:v", "libx264",
    "-crf", "20",
    "-preset", "veryfast",
    "-pix_fmt", "yuv420p",
    "-movflags", "+faststart",
    silentPath
  );

  execFileSync("ffmpeg", args, { stdio: "inherit" });
  return silentPath;
}

function renderVideo(skill) {
  const audioPath = renderVoiceover(skill);
  const audioDuration = mediaDuration(audioPath);
  const targetDuration = Math.max(30, audioDuration + 2.2);

  const scenes = [
    ["01-intro", sceneIntro(skill)],
    ["02-flow", sceneFlow(skill)],
    ["03-business", sceneBusiness(skill)],
    ["04-coding", sceneCoding(skill)],
    ["05-output", sceneOutput(skill)]
  ];
  const pngs = scenes.map(([name, svg]) => renderFrame(skill, name, svg));
  renderPoster(skill, pngs[0]);
  const silentPath = renderSilentVideo(skill, pngs, targetDuration);
  const outputPath = join(videoDir, `${skill.rank}-${skill.slug}.mp4`);

  if (audioPath) {
    execFileSync("ffmpeg", [
      "-v", "error",
      "-y",
      "-i", silentPath,
      "-i", audioPath,
      "-map", "0:v:0",
      "-map", "1:a:0",
      "-c:v", "copy",
      "-c:a", "aac",
      "-b:a", "128k",
      "-movflags", "+faststart",
      outputPath
    ], { stdio: "inherit" });
  } else {
    execFileSync("ffmpeg", [
      "-v", "error",
      "-y",
      "-i", silentPath,
      "-c", "copy",
      "-movflags", "+faststart",
      outputPath
    ], { stdio: "inherit" });
  }

  return outputPath;
}

const outputs = skills.map(renderVideo);

const transcriptIndex = `# Skill Voiceover Transcripts

Voiceover files are generated with macOS \`say\` when available. If \`say\` is not available, the generator still emits silent MP4s and transcript text.

${skills.map((skill) => `## ${skill.rank}. ${skill.title}

${skill.voiceover}
`).join("\n")}
`;

const videoIndex = `# Skill Domain Videos

These narrated videos are generated from structured skill data with:

\`\`\`bash
node tools/generate-skill-videos.mjs
\`\`\`

Each clip teaches one skill through a paced five-scene sequence: overview, lead flow, business example, coding example, and output. The MP4s include voiceover when macOS \`say\` is available.

For browser-native playback controls, use the GitHub Pages gallery:

https://cryptojym.github.io/problem-solving-system/

${skills.map((skill) => `- [${skill.rank}. ${skill.title}](${skill.rank}-${skill.slug}.mp4)`).join("\n")}
`;

writeFileSync(join(voiceDir, "README.md"), transcriptIndex);
writeFileSync(join(videoDir, "README.md"), videoIndex);

rmSync(frameDir, { recursive: true, force: true });
try {
  rmdirSync(tmpDir);
} catch (error) {
  if (error.code !== "ENOENT" && error.code !== "ENOTEMPTY") {
    throw error;
  }
}

console.log(`Generated ${outputs.length} narrated videos in ${videoDir}`);
