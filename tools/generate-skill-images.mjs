import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = "assets/skill-domain-images";
mkdirSync(outDir, { recursive: true });

const skills = [
  {
    rank: "01",
    title: "Problem Framing and Reframing",
    file: "01-problem-framing-and-reframing.svg",
    accent: "#2563eb",
    tint: "#dbeafe",
    useWhen: "The problem sounds vague, emotional, or already includes a fix.",
    steps: [
      { label: "Hear complaint", scene: "meeting", title: "Team meeting", example: "We need more people." },
      { label: "Cross out fix", scene: "board-x", title: "First fix removed", example: "Hiring is not the problem." },
      { label: "Map the flow", scene: "workflow", title: "Work handoff", example: "Leads stall here." },
      { label: "Check proof", scene: "dashboard", title: "Look at data", example: "Where is the stall?" }
    ],
    business: "Sales demos stall after handoff; hiring is the hidden fix, not the problem.",
    coding: "One checkout endpoint is slow; rewriting the whole API is premature.",
    output: "Clear problem, goal, assumptions, next proof."
  },
  {
    rank: "02",
    title: "Observation and Problem Finding",
    file: "02-observation-and-problem-finding.svg",
    accent: "#0891b2",
    tint: "#cffafe",
    useWhen: "People are guessing instead of watching real work.",
    steps: [
      { label: "Watch work", scene: "desk", title: "Real workflow", example: "Same data typed twice." },
      { label: "Note surprises", scene: "notes", title: "Surprise note", example: "Mistakes start here." },
      { label: "Sort signals", scene: "sort", title: "Four buckets", example: "Complaint, cause, fix." },
      { label: "Pick problem", scene: "matrix", title: "Best target", example: "Fix duplicate entry." }
    ],
    business: "A support call shows billing-screen rework before anyone blames training.",
    coding: "A replay shows a stale session edge case before anyone rewrites login.",
    output: "Observed problems, notes, chosen target."
  },
  {
    rank: "03",
    title: "Root Cause and Constraint Mapping",
    file: "03-root-cause-and-constraint-mapping.svg",
    accent: "#7c3aed",
    tint: "#ede9fe",
    useWhen: "Symptoms are clear but causes are not.",
    steps: [
      { label: "Name goal", scene: "target-board", title: "Clear goal", example: "Ship on time." },
      { label: "List bad effects", scene: "list-board", title: "What goes wrong", example: "Late, rework, refunds." },
      { label: "Connect causes", scene: "cause-map", title: "Cause chain", example: "Waiting causes delay." },
      { label: "Find bottleneck", scene: "bottleneck", title: "Slowest point", example: "Approval blocks flow." }
    ],
    business: "Late orders come from a two-day approval queue, not packing speed.",
    coding: "Flaky deploys share one test-data fixture, not a broken pipeline.",
    output: "Cause map, bottleneck, next fix."
  },
  {
    rank: "04",
    title: "Decision Hygiene and Option Widening",
    file: "04-decision-hygiene-and-option-widening.svg",
    accent: "#ea580c",
    tint: "#ffedd5",
    useWhen: "The team has only one favorite option.",
    steps: [
      { label: "Name risk", scene: "warning-board", title: "One-option trap", example: "Only one idea exists." },
      { label: "Remove favorite", scene: "board-x", title: "Pretend it vanished", example: "What else works?" },
      { label: "Add options", scene: "options-board", title: "Three paths", example: "Fix, pilot, stage." },
      { label: "Set stop rule", scene: "metric-flag", title: "Tripwire", example: "Low use means pivot." }
    ],
    business: "Compare patching, piloting, and staged rollout before buying the platform.",
    coding: "Compare tuning, splitting, rollback, and rewrite before touching the service.",
    output: "Options, assumptions, chosen path, stop rules."
  },
  {
    rank: "05",
    title: "Reality Testing and Evidence Seeking",
    file: "05-reality-testing-and-evidence-seeking.svg",
    accent: "#16a34a",
    tint: "#dcfce7",
    useWhen: "The plan depends on untested beliefs.",
    steps: [
      { label: "List beliefs", scene: "list-board", title: "What must be true", example: "Policy changes behavior." },
      { label: "Look wide", scene: "chart", title: "Trend view", example: "Check the pattern." },
      { label: "Look close", scene: "interview", title: "Ask the worker", example: "What happens here?" },
      { label: "Invite pushback", scene: "debate", title: "Opposite view", example: "How could this fail?" }
    ],
    business: "Check shift-level attendance data before changing the policy.",
    coding: "Inspect traces before assuming a cache is the right fix.",
    output: "Beliefs, evidence, confidence, next recommendation."
  },
  {
    rank: "06",
    title: "Structured Ideation and Brainwriting",
    file: "06-structured-ideation-and-brainwriting.svg",
    accent: "#db2777",
    tint: "#fce7f3",
    useWhen: "The team needs more and better ideas.",
    steps: [
      { label: "Send prompt", scene: "brief", title: "Before meeting", example: "Bring three ideas." },
      { label: "Write alone", scene: "sticky-table", title: "No debate yet", example: "Everyone writes first." },
      { label: "Build ideas", scene: "pass-notes", title: "Pass cards", example: "Add one improvement." },
      { label: "Group themes", scene: "cluster-board", title: "Choose tests", example: "Pick best clusters." }
    ],
    business: "Silent onboarding ideas become stronger themes before the team chooses one.",
    coding: "Sharding, caching, pruning, and parallelism are compared before changing CI.",
    output: "Ideas, groups, top concepts, tests."
  },
  {
    rank: "07",
    title: "Rapid Prototyping and Experiments",
    file: "07-rapid-prototyping-and-experiments.svg",
    accent: "#ca8a04",
    tint: "#fef9c3",
    useWhen: "A big build can be tested with something small.",
    steps: [
      { label: "Pick risk", scene: "warning-board", title: "Biggest unknown", example: "Will it expose blockers?" },
      { label: "Try small", scene: "prototype", title: "One-team pilot", example: "Test for one week." },
      { label: "Predict signal", scene: "chart", title: "Expected result", example: "Blockers appear early." },
      { label: "Decide next", scene: "review-board", title: "Review result", example: "Stop, revise, scale." }
    ],
    business: "Pilot one team for a week before rolling the module out everywhere.",
    coding: "Use a stub to test the contract before building the full service.",
    output: "Prototype, result, lesson, next decision."
  },
  {
    rank: "08",
    title: "Operating Rhythm Implementation",
    file: "08-operating-rhythm-implementation.svg",
    accent: "#0f766e",
    tint: "#ccfbf1",
    useWhen: "A solution must become a repeated habit.",
    steps: [
      { label: "Name habit", scene: "checklist-human", title: "New behavior", example: "Say blockers daily." },
      { label: "Set rhythm", scene: "calendar", title: "Repeat time", example: "Monday review." },
      { label: "Pick owner", scene: "owner", title: "One person owns it", example: "Owner per blocker." },
      { label: "Check score", scene: "metrics", title: "Visible progress", example: "Conversion moves." }
    ],
    business: "A weekly owner review keeps blockers visible after launch.",
    coding: "A daily deploy-health check catches rollback risk early.",
    output: "Rhythm, owner, score, review date."
  },
  {
    rank: "09",
    title: "Learning Mindset and Retrospective",
    file: "09-learning-mindset-and-retrospective.svg",
    accent: "#4f46e5",
    tint: "#e0e7ff",
    useWhen: "A test, launch, or decision needs a lesson.",
    steps: [
      { label: "Compare result", scene: "split-board", title: "Expected vs actual", example: "Target beside result." },
      { label: "Name proof", scene: "evidence-table", title: "Evidence table", example: "Usage, survey, notes." },
      { label: "Update belief", scene: "edit-board", title: "New lesson", example: "Scripts before metrics." },
      { label: "Choose next", scene: "next-flag", title: "Next action", example: "Revise and retest." }
    ],
    business: "A missed pilot target becomes a clearer script and next test.",
    coding: "A noisy alert becomes a better threshold and clearer signal.",
    output: "Lesson, updated belief, next move."
  }
];

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrap(text, maxChars) {
  const words = text.split(/\s+/);
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

function textBlock({ text, x, y, width = 44, size = 22, weight = 400, fill = "#172033", lineHeight = 1.28, anchor = "start" }) {
  const lines = wrap(text, width);
  const tspans = lines
    .map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : size * lineHeight}">${esc(line)}</tspan>`)
    .join("");
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${fill}" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif">${tspans}</text>`;
}

function stroke(accent, width = 4, extra = "") {
  return `stroke="${accent}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" fill="none" ${extra}`;
}

function person(x, y, accent, scale = 1) {
  return `
    <circle cx="${x}" cy="${y}" r="${12 * scale}" fill="${accent}" opacity="0.92"/>
    <path d="M ${x - 23 * scale} ${y + 45 * scale} Q ${x} ${y + 22 * scale} ${x + 23 * scale} ${y + 45 * scale}" fill="${accent}" opacity="0.18" stroke="${accent}" stroke-width="${3 * scale}"/>
  `;
}

function board(x, y, w, h, accent, title = "") {
  return `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="#ffffff" stroke="${accent}" stroke-opacity="0.48" stroke-width="4"/>
    ${title ? textBlock({ text: title, x: x + 18, y: y + 31, width: 18, size: 16, weight: 850, fill: accent }) : ""}
  `;
}

function bubble(x, y, w, h, accent, text) {
  return `
    <path d="M ${x + 14} ${y} H ${x + w - 14} Q ${x + w} ${y} ${x + w} ${y + 14} V ${y + h - 18} Q ${x + w} ${y + h - 4} ${x + w - 14} ${y + h - 4} H ${x + 36} L ${x + 18} ${y + h + 10} V ${y + h - 4} H ${x + 14} Q ${x} ${y + h - 4} ${x} ${y + h - 18} V ${y + 14} Q ${x} ${y} ${x + 14} ${y} Z" fill="#ffffff" stroke="${accent}" stroke-opacity="0.55" stroke-width="3"/>
    ${textBlock({ text, x: x + 14, y: y + 27, width: 13, size: 13, weight: 800, fill: "#172033", lineHeight: 1.12 })}
  `;
}

function sticky(x, y, w, h, accent, text, opacity = 0.17) {
  return `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="9" fill="${accent}" opacity="${opacity}" stroke="${accent}" stroke-opacity="0.35" stroke-width="2"/>
    ${textBlock({ text, x: x + 10, y: y + 24, width: 12, size: 13, weight: 800, fill: "#172033", lineHeight: 1.1 })}
  `;
}

function scene(step, x, y, accent, tint) {
  const bg = `<rect x="${x}" y="${y}" width="280" height="184" rx="22" fill="${tint}" opacity="0.72"/>`;
  const floor = `<path d="M ${x + 26} ${y + 158} H ${x + 254}" ${stroke(accent, 3, 'opacity="0.14"')}/>`;
  const tx = x;
  const ty = y;

  const common = (body) => `<g class="step-art">${bg}${body}${floor}</g>`;
  const local = (body) => `<g transform="translate(${tx}, ${ty})">${body}</g>`;

  const scenes = {
    meeting: common(local(`
      <rect x="68" y="112" width="145" height="28" rx="14" fill="#ffffff" stroke="${accent}" stroke-opacity="0.35" stroke-width="3"/>
      ${person(64, 92, accent, 0.95)}
      ${person(216, 92, accent, 0.95)}
      ${bubble(86, 33, 126, 58, accent, "We need more reps")}
    `)),
    "board-x": common(local(`
      ${person(51, 113, accent, 0.9)}
      ${board(86, 35, 145, 96, accent)}
      ${sticky(110, 61, 82, 40, accent, "Hire reps", 0.14)}
      <path d="M 111 61 L 193 101 M 193 61 L 111 101" ${stroke(accent, 4)}/>
    `)),
    workflow: common(local(`
      ${person(39, 116, accent, 0.85)}
      ${board(72, 36, 175, 98, accent)}
      <rect x="92" y="73" width="48" height="28" rx="8" fill="#ffffff" stroke="${accent}" stroke-width="3"/>
      <rect x="171" y="73" width="48" height="28" rx="8" fill="#ffffff" stroke="${accent}" stroke-width="3"/>
      <path d="M 141 87 H 169" ${stroke(accent, 4)}/>
      <path d="M 163 79 L 176 87 L 163 95" ${stroke(accent, 4)}/>
      <circle cx="156" cy="87" r="11" fill="${accent}" opacity="0.9"/>
      <text x="156" y="92" text-anchor="middle" font-size="12" font-weight="900" fill="#ffffff" font-family="Inter, ui-sans-serif">stall</text>
    `)),
    dashboard: common(local(`
      ${person(50, 116, accent, 0.85)}
      <rect x="85" y="44" width="140" height="88" rx="14" fill="#ffffff" stroke="${accent}" stroke-opacity="0.48" stroke-width="4"/>
      <path d="M 107 100 L 130 78 L 154 88 L 191 57" ${stroke(accent, 4)}/>
      <circle cx="209" cy="56" r="20" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <text x="209" y="66" text-anchor="middle" font-size="32" font-weight="900" fill="${accent}" font-family="Inter, ui-sans-serif">?</text>
    `)),
    desk: common(local(`
      <rect x="68" y="111" width="154" height="24" rx="12" fill="#ffffff" stroke="${accent}" stroke-opacity="0.35" stroke-width="3"/>
      ${person(64, 92, accent, 0.9)}
      <rect x="112" y="58" width="78" height="48" rx="8" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 127 78 H 174 M 127 93 H 160" ${stroke(accent, 3, 'opacity="0.32"')}/>
      <path d="M 204 65 H 238 M 204 83 H 238" ${stroke(accent, 4, 'opacity="0.5"')}/>
    `)),
    notes: common(local(`
      ${person(48, 114, accent, 0.85)}
      <rect x="88" y="36" width="120" height="105" rx="12" fill="#ffffff" stroke="${accent}" stroke-opacity="0.45" stroke-width="4"/>
      ${sticky(105, 55, 72, 30, accent, "Surprise", 0.16)}
      <path d="M 105 102 H 187 M 105 119 H 166" ${stroke(accent, 3, 'opacity="0.28"')}/>
      <text x="221" y="78" text-anchor="middle" font-size="46" font-weight="900" fill="${accent}" font-family="Inter, ui-sans-serif">!</text>
    `)),
    sort: common(local(`
      ${board(35, 34, 210, 104, accent)}
      <path d="M 105 51 V 126 M 175 51 V 126" ${stroke(accent, 3, 'opacity="0.22"')}/>
      ${sticky(49, 72, 43, 28, accent, "S", 0.16)}
      ${sticky(119, 72, 43, 28, accent, "C", 0.12)}
      ${sticky(189, 72, 43, 28, accent, "Fix", 0.16)}
      ${person(38, 141, accent, 0.72)}
    `)),
    matrix: common(local(`
      ${board(51, 35, 170, 105, accent)}
      <path d="M 136 49 V 126 M 64 88 H 208" ${stroke(accent, 3, 'opacity="0.22"')}/>
      <path d="M 178 64 L 186 80 L 204 83 L 191 95 L 194 113 L 178 105 L 162 113 L 165 95 L 152 83 L 170 80 Z" fill="${accent}"/>
      ${person(50, 143, accent, 0.72)}
    `)),
    "target-board": common(local(`
      ${person(49, 119, accent, 0.8)}
      ${board(83, 34, 148, 98, accent)}
      <circle cx="157" cy="84" r="34" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <circle cx="157" cy="84" r="18" fill="none" stroke="${accent}" stroke-opacity="0.4" stroke-width="4"/>
      <circle cx="157" cy="84" r="7" fill="${accent}"/>
    `)),
    "list-board": common(local(`
      ${person(49, 119, accent, 0.8)}
      ${board(83, 34, 148, 98, accent)}
      <circle cx="111" cy="68" r="6" fill="${accent}"/>
      <circle cx="111" cy="91" r="6" fill="${accent}" opacity="0.65"/>
      <circle cx="111" cy="114" r="6" fill="${accent}" opacity="0.4"/>
      <path d="M 128 68 H 199 M 128 91 H 189 M 128 114 H 204" ${stroke(accent, 3, 'opacity="0.3"')}/>
    `)),
    "cause-map": common(local(`
      ${person(39, 126, accent, 0.72)}
      ${board(70, 32, 178, 105, accent)}
      <circle cx="107" cy="78" r="15" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <circle cx="158" cy="111" r="15" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <circle cx="207" cy="72" r="15" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 120 86 L 145 103 M 171 102 L 194 80" ${stroke(accent, 4, 'opacity="0.5"')}/>
    `)),
    bottleneck: common(local(`
      ${person(49, 119, accent, 0.8)}
      ${board(82, 39, 150, 90, accent)}
      <path d="M 112 58 H 204 L 173 84 L 204 110 H 112 L 143 84 Z" fill="${accent}" opacity="0.16" stroke="${accent}" stroke-width="4" stroke-linejoin="round"/>
      <path d="M 143 84 H 173" ${stroke(accent, 4)}/>
    `)),
    "warning-board": common(local(`
      ${person(51, 119, accent, 0.8)}
      ${board(86, 36, 145, 96, accent)}
      <path d="M 159 58 L 199 119 H 119 Z" fill="#ffffff" stroke="${accent}" stroke-width="4" stroke-linejoin="round"/>
      <path d="M 159 79 V 99" ${stroke(accent, 4)}/>
      <circle cx="159" cy="110" r="4" fill="${accent}"/>
    `)),
    "options-board": common(local(`
      ${person(46, 122, accent, 0.78)}
      ${board(82, 35, 150, 100, accent)}
      ${sticky(101, 55, 95, 22, accent, "Clean flow", 0.14)}
      ${sticky(101, 84, 95, 22, accent, "Pilot add-on", 0.14)}
      ${sticky(101, 113, 95, 22, accent, "Stage rollout", 0.14)}
    `)),
    "metric-flag": common(local(`
      ${person(48, 122, accent, 0.76)}
      ${board(82, 37, 151, 96, accent)}
      <path d="M 108 105 L 135 82 L 158 91 L 199 59" ${stroke(accent, 4)}/>
      <path d="M 195 50 V 82" ${stroke(accent, 4)}/>
      <path d="M 195 50 H 222 L 213 63 L 222 76 H 195" fill="${accent}" opacity="0.85"/>
    `)),
    chart: common(local(`
      ${person(49, 119, accent, 0.78)}
      ${board(84, 38, 148, 96, accent)}
      <rect x="110" y="97" width="16" height="24" rx="4" fill="${accent}" opacity="0.35"/>
      <rect x="143" y="78" width="16" height="43" rx="4" fill="${accent}" opacity="0.55"/>
      <rect x="176" y="58" width="16" height="63" rx="4" fill="${accent}"/>
    `)),
    interview: common(local(`
      ${person(58, 112, accent, 0.82)}
      ${person(212, 112, accent, 0.82)}
      ${bubble(92, 37, 95, 54, accent, "What actually happens?")}
      <rect x="107" y="122" width="70" height="12" rx="6" fill="${accent}" opacity="0.14"/>
    `)),
    debate: common(local(`
      ${person(55, 115, accent, 0.82)}
      ${person(214, 115, accent, 0.82)}
      ${bubble(78, 34, 76, 47, accent, "What fails?")}
      ${bubble(156, 57, 76, 47, accent, "Edge case")}
    `)),
    brief: common(local(`
      ${person(50, 118, accent, 0.78)}
      ${board(84, 35, 147, 98, accent)}
      ${sticky(105, 56, 89, 28, accent, "Bring 3 ideas", 0.15)}
      <path d="M 112 104 H 199" ${stroke(accent, 3, 'opacity="0.3"')}/>
    `)),
    "sticky-table": common(local(`
      <rect x="55" y="118" width="170" height="22" rx="11" fill="#ffffff" stroke="${accent}" stroke-opacity="0.32" stroke-width="3"/>
      ${person(56, 91, accent, 0.72)}
      ${person(224, 91, accent, 0.72)}
      ${sticky(96, 55, 36, 28, accent, "", 0.18)}
      ${sticky(141, 55, 36, 28, accent, "", 0.12)}
      ${sticky(119, 88, 36, 28, accent, "", 0.15)}
    `)),
    "pass-notes": common(local(`
      ${person(54, 118, accent, 0.75)}
      ${person(226, 118, accent, 0.75)}
      ${sticky(79, 61, 54, 38, accent, "Idea", 0.15)}
      ${sticky(149, 61, 54, 38, accent, "+ build", 0.15)}
      <path d="M 134 80 H 148" ${stroke(accent, 4)}/>
      <path d="M 144 72 L 157 80 L 144 88" ${stroke(accent, 4)}/>
    `)),
    "cluster-board": common(local(`
      ${person(47, 122, accent, 0.76)}
      ${board(83, 35, 148, 99, accent)}
      ${sticky(102, 55, 31, 25, accent, "", 0.16)}
      ${sticky(139, 55, 31, 25, accent, "", 0.16)}
      ${sticky(176, 55, 31, 25, accent, "", 0.16)}
      <path d="M 120 102 H 192 M 156 102 V 124" ${stroke(accent, 4, 'opacity="0.38"')}/>
    `)),
    prototype: common(local(`
      ${person(50, 122, accent, 0.76)}
      ${board(83, 35, 148, 100, accent)}
      <rect x="108" y="61" width="94" height="50" rx="9" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 118 84 H 191 M 118 100 H 158" ${stroke(accent, 3, 'opacity="0.28"')}/>
      <path d="M 91 126 L 222 45" ${stroke(accent, 3, 'opacity="0.22"')}/>
    `)),
    "review-board": common(local(`
      ${person(49, 122, accent, 0.76)}
      ${board(82, 35, 150, 100, accent)}
      <path d="M 109 101 L 132 82 L 154 91 L 195 59" ${stroke(accent, 4)}/>
      <path d="M 184 106 L 199 121 L 225 88" ${stroke(accent, 4)}/>
    `)),
    "checklist-human": common(local(`
      ${person(50, 122, accent, 0.76)}
      ${board(84, 35, 146, 100, accent)}
      <path d="M 110 66 L 123 78 L 149 51 M 110 94 L 123 106 L 149 79" ${stroke(accent, 4)}/>
      <path d="M 160 66 H 207 M 160 94 H 202" ${stroke(accent, 3, 'opacity="0.3"')}/>
    `)),
    calendar: common(local(`
      ${person(50, 122, accent, 0.76)}
      ${board(86, 37, 144, 94, accent)}
      <path d="M 86 61 H 230" ${stroke(accent, 3, 'opacity="0.28"')}/>
      <circle cx="118" cy="89" r="7" fill="${accent}" opacity="0.35"/>
      <circle cx="151" cy="89" r="7" fill="${accent}" opacity="0.35"/>
      <circle cx="184" cy="89" r="7" fill="${accent}"/>
    `)),
    owner: common(local(`
      ${person(139, 86, accent, 1.05)}
      <rect x="161" y="43" width="43" height="43" rx="21" fill="${accent}"/>
      <text x="183" y="72" text-anchor="middle" font-size="24" font-weight="900" fill="#ffffff" font-family="Inter, ui-sans-serif">1</text>
      <rect x="72" y="124" width="139" height="13" rx="7" fill="${accent}" opacity="0.16"/>
    `)),
    metrics: common(local(`
      ${person(50, 122, accent, 0.76)}
      ${board(84, 36, 148, 98, accent)}
      <rect x="111" y="96" width="16" height="22" rx="4" fill="${accent}" opacity="0.32"/>
      <rect x="146" y="76" width="16" height="42" rx="4" fill="${accent}" opacity="0.58"/>
      <rect x="181" y="58" width="16" height="60" rx="4" fill="${accent}"/>
    `)),
    "split-board": common(local(`
      ${person(49, 123, accent, 0.76)}
      ${board(83, 36, 148, 99, accent)}
      <path d="M 157 52 V 121" ${stroke(accent, 3, 'opacity="0.25"')}/>
      <path d="M 104 83 H 138 M 176 83 H 210 M 176 105 H 201" ${stroke(accent, 3, 'opacity="0.34"')}/>
    `)),
    "evidence-table": common(local(`
      ${person(49, 123, accent, 0.76)}
      ${board(83, 36, 148, 99, accent)}
      <path d="M 103 63 H 211 M 103 88 H 211 M 103 113 H 211 M 139 50 V 125" ${stroke(accent, 3, 'opacity="0.28"')}/>
      <circle cx="214" cy="117" r="16" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 226 129 L 242 145" ${stroke(accent, 4)}/>
    `)),
    "edit-board": common(local(`
      ${person(49, 123, accent, 0.76)}
      ${board(83, 36, 148, 99, accent)}
      <path d="M 105 70 H 198 M 105 94 H 174" ${stroke(accent, 3, 'opacity="0.28"')}/>
      <path d="M 132 117 L 202 47" ${stroke(accent, 4)}/>
      <path d="M 196 41 L 211 56 L 201 66 L 186 51 Z" fill="${accent}"/>
    `)),
    "next-flag": common(local(`
      ${person(49, 123, accent, 0.76)}
      <path d="M 92 43 V 134" ${stroke(accent, 4)}/>
      <path d="M 92 46 H 188 L 215 68 L 188 90 H 92 Z" fill="#ffffff" stroke="${accent}" stroke-width="4" stroke-linejoin="round"/>
      <path d="M 117 68 H 184" ${stroke(accent, 3, 'opacity="0.3"')}/>
    `))
  };

  return scenes[step.scene] ?? scenes.board;
}

function stepFrame(step, x, y, accent, tint, index) {
  return `
    <g class="frame-card">
      <rect class="frame-bg" x="${x}" y="${y}" width="340" height="430" rx="22" fill="#ffffff" stroke="${accent}" stroke-opacity="0.36" stroke-width="2"/>
      <rect x="${x + 22}" y="${y + 22}" width="78" height="30" rx="15" fill="${accent}" opacity="0.12"/>
      <text x="${x + 61}" y="${y + 43}" text-anchor="middle" font-size="13" font-weight="900" fill="${accent}" letter-spacing="0" font-family="Inter, ui-sans-serif, system-ui">STEP ${index}</text>
      <circle cx="${x + 49}" cy="${y + 96}" r="27" fill="${accent}"/>
      <text x="${x + 49}" y="${y + 106}" text-anchor="middle" font-size="25" font-weight="900" fill="#ffffff" font-family="Inter, ui-sans-serif, system-ui">${index}</text>
      ${textBlock({ text: step.label, x: x + 92, y: y + 88, width: 19, size: 25, weight: 880, fill: "#172033", lineHeight: 1.05 })}
      ${scene(step, x + 30, y + 150, accent, tint)}
      ${textBlock({ text: step.title, x: x + 30, y: y + 365, width: 28, size: 17, weight: 900, fill: accent, lineHeight: 1.08 })}
      ${textBlock({ text: step.example, x: x + 30, y: y + 392, width: 29, size: 17, weight: 650, fill: "#243047", lineHeight: 1.12 })}
    </g>
  `;
}

function arrow(x1, y, x2, accent) {
  return `
    <path d="M ${x1} ${y} H ${x2}" stroke="${accent}" stroke-width="4" stroke-linecap="round" opacity="0.56"/>
    <path d="M ${x2 - 11} ${y - 8} L ${x2 + 1} ${y} L ${x2 - 11} ${y + 8}" fill="none" stroke="${accent}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity="0.56"/>
  `;
}

function exampleCard({ title, text, x, y, accent, label }) {
  return `
    <rect x="${x}" y="${y}" width="690" height="172" rx="18" fill="#ffffff" stroke="#d9e2ef" stroke-width="2"/>
    <rect x="${x}" y="${y}" width="690" height="46" rx="18" fill="${accent}" opacity="0.94"/>
    <text x="${x + 24}" y="${y + 31}" font-size="20" font-weight="850" fill="#ffffff" font-family="Inter, ui-sans-serif, system-ui">${esc(title)}</text>
    <text x="${x + 642}" y="${y + 31}" text-anchor="end" font-size="15" font-weight="850" fill="#ffffff" opacity="0.88" font-family="Inter, ui-sans-serif, system-ui">${esc(label)}</text>
    ${textBlock({ text, x: x + 24, y: y + 84, width: 58, size: 21, weight: 620, fill: "#243047", lineHeight: 1.25 })}
  `;
}

function image(skill) {
  const cardX = [70, 445, 820, 1195];
  const cardY = 300;
  const cardW = 340;
  const arrowY = cardY + 216;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1220" viewBox="0 0 1600 1220" role="img" aria-labelledby="title desc">
  <title id="title">${esc(skill.rank)} ${esc(skill.title)}</title>
  <desc id="desc">Humanized illustrated workflow with business and coding examples for ${esc(skill.title)}.</desc>
  <style>
    .frame-card .frame-bg { transition: stroke-width 160ms ease, filter 160ms ease; }
    .frame-card:hover .frame-bg { stroke-width: 4; filter: url(#softShadow); }
    @media (prefers-reduced-motion: reduce) {
      .frame-card .frame-bg { transition: none; }
    }
  </style>
  <defs>
    <filter id="softShadow" x="-8%" y="-18%" width="116%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#0f172a" flood-opacity="0.13"/>
    </filter>
  </defs>
  <rect width="1600" height="1220" fill="#f8fafc"/>
  <rect x="34" y="34" width="1532" height="1152" rx="30" fill="#ffffff" stroke="#d9e2ef" stroke-width="2"/>
  <rect x="34" y="34" width="1532" height="170" rx="30" fill="${skill.tint}"/>
  <circle cx="105" cy="116" r="46" fill="${skill.accent}"/>
  <text x="105" y="130" text-anchor="middle" font-size="35" font-weight="900" fill="#ffffff" font-family="Inter, ui-sans-serif, system-ui">${skill.rank}</text>
  <text x="176" y="98" font-size="43" font-weight="900" fill="#111827" font-family="Inter, ui-sans-serif, system-ui">${esc(skill.title)}</text>
  ${textBlock({ text: `Use when: ${skill.useWhen}`, x: 178, y: 142, width: 92, size: 24, weight: 610, fill: "#263244", lineHeight: 1.22 })}

  <text x="70" y="256" font-size="27" font-weight="900" fill="#111827" font-family="Inter, ui-sans-serif, system-ui">How it works: concrete example flow, 1 -> 2 -> 3 -> 4</text>
  ${skill.steps.map((step, index) => stepFrame(step, cardX[index], cardY, skill.accent, skill.tint, index + 1)).join("")}
  ${arrow(cardX[0] + cardW + 11, arrowY, cardX[1] - 18, skill.accent)}
  ${arrow(cardX[1] + cardW + 11, arrowY, cardX[2] - 18, skill.accent)}
  ${arrow(cardX[2] + cardW + 11, arrowY, cardX[3] - 18, skill.accent)}

  ${exampleCard({ title: "Business example", text: skill.business, x: 70, y: 800, accent: skill.accent, label: "scenario" })}
  ${exampleCard({ title: "Coding example", text: skill.coding, x: 840, y: 800, accent: skill.accent, label: "scenario" })}
  <rect x="70" y="1036" width="1460" height="58" rx="15" fill="#f8fafc" stroke="#e5edf6"/>
  <text x="96" y="1073" font-size="20" font-weight="900" fill="${skill.accent}" font-family="Inter, ui-sans-serif, system-ui">Output</text>
  ${textBlock({ text: skill.output, x: 184, y: 1073, width: 110, size: 20, weight: 700, fill: "#263244", lineHeight: 1.18 })}
</svg>
`;
}

for (const skill of skills) {
  writeFileSync(join(outDir, skill.file), image(skill).replace(/[ \t]+$/gm, ""));
}

console.log(`Generated ${skills.length} SVG images in ${outDir}`);
