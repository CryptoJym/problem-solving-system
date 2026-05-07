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
    useWhen: "The problem statement is vague, political, solution-shaped, or stuck on symptoms.",
    steps: [
      { label: "Current complaint", scene: "meeting", title: "Sales meeting", example: "VP says: We need more reps." },
      { label: "Remove hidden fix", scene: "board-x", title: "Hidden fix crossed out", example: "Hire more reps is a solution, not the problem." },
      { label: "Reframe goal/system", scene: "workflow", title: "Lead handoff map", example: "Leads stall between marketing and sales." },
      { label: "Ask evidence question", scene: "dashboard", title: "CRM evidence check", example: "Where exactly do qualified leads stall?" }
    ],
    business: "Sales says: hire more reps. Reframe: qualified leads stall because handoffs between marketing and sales are unclear.",
    coding: "Team says: rewrite the API. Reframe: one endpoint slows only when cache misses force repeated database reads.",
    output: "Testable frame, explicit goal, removed assumptions, next evidence needed."
  },
  {
    rank: "02",
    title: "Observation and Problem Finding",
    file: "02-observation-and-problem-finding.svg",
    accent: "#0891b2",
    tint: "#cffafe",
    useWhen: "There are many possible problems and the team is relying on secondhand reports.",
    steps: [
      { label: "Watch real work", scene: "desk", title: "Watch the billing call", example: "Agent enters the same customer data twice." },
      { label: "Record surprises", scene: "notes", title: "Surprise note", example: "Duplicate entry creates avoidable mistakes." },
      { label: "Separate symptoms", scene: "sort", title: "Sort the notes", example: "Complaint, symptom, cause, and fix go in separate columns." },
      { label: "Pick high-value problem", scene: "matrix", title: "Priority choice", example: "Fix duplicate billing entry first." }
    ],
    business: "Support tickets blame training. Call shadowing shows the billing screen forces duplicate entry and creates mistakes.",
    coding: "Users report login bugs. Session replay shows the real issue is an OAuth redirect loop after expired sessions.",
    output: "Candidate problems, observed symptoms, selection rationale, open questions."
  },
  {
    rank: "03",
    title: "Root Cause and Constraint Mapping",
    file: "03-root-cause-and-constraint-mapping.svg",
    accent: "#7c3aed",
    tint: "#ede9fe",
    useWhen: "Symptoms are known but the causal story is contested or incomplete.",
    steps: [
      { label: "Name system goal", scene: "target-board", title: "Goal board", example: "Ship orders on time." },
      { label: "List UDEs", scene: "list-board", title: "Undesirable effects", example: "Late orders, rework, refunds." },
      { label: "Map if-then causes", scene: "cause-map", title: "Cause chain", example: "If approval waits, shipping starts late." },
      { label: "Find constraint", scene: "bottleneck", title: "Bottleneck found", example: "One approval batch controls the whole flow." }
    ],
    business: "Orders ship late. Mapping shows the real constraint is a once-daily approval batch, not warehouse speed.",
    coding: "Deploys fail randomly. Causal mapping shows flaky tests depend on shared mutable seed data across jobs.",
    output: "Causal map, weak links, likely constraint, controllable intervention."
  },
  {
    rank: "04",
    title: "Decision Hygiene and Option Widening",
    file: "04-decision-hygiene-and-option-widening.svg",
    accent: "#ea580c",
    tint: "#ffedd5",
    useWhen: "The decision has collapsed into one favorite option or a yes/no debate.",
    steps: [
      { label: "Name decision risk", scene: "warning-board", title: "Risk on the table", example: "We only have one serious option." },
      { label: "Vanish favorite option", scene: "board-x", title: "Favorite removed", example: "If the CRM vanished, what would we try?" },
      { label: "Add alternatives", scene: "options-board", title: "Three paths", example: "Clean workflow, pilot add-on, staged rollout." },
      { label: "Set tripwires", scene: "metric-flag", title: "Tripwire metric", example: "If adoption stays under 60 percent, pivot." }
    ],
    business: "Instead of buy a CRM or do nothing, compare workflow cleanup, a pilot add-on, and a staged rollout.",
    coding: "Instead of rewrite as microservices, compare index tuning, queue isolation, endpoint split, and rollback criteria.",
    output: "Wider option set, assumptions by option, chosen path, pivot rules."
  },
  {
    rank: "05",
    title: "Reality Testing and Evidence Seeking",
    file: "05-reality-testing-and-evidence-seeking.svg",
    accent: "#16a34a",
    tint: "#dcfce7",
    useWhen: "The plan depends on claims that are expensive, risky, or behavior-dependent.",
    steps: [
      { label: "List assumptions", scene: "list-board", title: "Assumption board", example: "New policy will change attendance behavior." },
      { label: "Zoom out", scene: "chart", title: "Base-rate view", example: "Look at absence trends by month." },
      { label: "Zoom in", scene: "interview", title: "Manager interview", example: "Ask what actually happens on late days." },
      { label: "Seek disagreement", scene: "debate", title: "Disconfirming view", example: "What would make this policy fail?" }
    ],
    business: "Before a new attendance policy, check absence trends, manager interviews, legal constraints, and edge cases.",
    coding: "Before adding Redis, inspect traces, model cache hit rates, ask SRE what fails, and test failure behavior.",
    output: "Assumption register, evidence, confidence level, revised recommendation."
  },
  {
    rank: "06",
    title: "Structured Ideation and Brainwriting",
    file: "06-structured-ideation-and-brainwriting.svg",
    accent: "#db2777",
    tint: "#fce7f3",
    useWhen: "The problem is formulated but the team has too few or too-similar ideas.",
    steps: [
      { label: "Pre-work", scene: "brief", title: "Prompt sent early", example: "Bring three onboarding ideas." },
      { label: "Silent ideas", scene: "sticky-table", title: "Silent writing", example: "Everyone writes before anyone debates." },
      { label: "Pass and build", scene: "pass-notes", title: "Build on cards", example: "Add one useful variation to the next card." },
      { label: "Cluster and test", scene: "cluster-board", title: "Theme clusters", example: "Pick the concepts worth testing." }
    ],
    business: "Onboarding ideas combine into a first-week checklist, buddy system, manager script, and scorecard.",
    coding: "CI speed ideas combine test sharding, dependency caching, fixture pruning, and flaky-test quarantine.",
    output: "Raw idea inventory, clusters, top concepts, testing candidates."
  },
  {
    rank: "07",
    title: "Rapid Prototyping and Experiments",
    file: "07-rapid-prototyping-and-experiments.svg",
    accent: "#ca8a04",
    tint: "#fef9c3",
    useWhen: "A solution looks promising but important uncertainty remains before full buildout.",
    steps: [
      { label: "Choose risk", scene: "warning-board", title: "Riskiest assumption", example: "Will huddles expose real blockers?" },
      { label: "Make low-fi test", scene: "prototype", title: "One-week pilot", example: "Try the huddle with one team." },
      { label: "Predict result", scene: "chart", title: "Expected signal", example: "Blockers should surface by day three." },
      { label: "Observe and decide", scene: "review-board", title: "Review result", example: "Revise, stop, retest, or scale." }
    ],
    business: "Run a one-week daily huddle with one team before rolling the operating rhythm across the company.",
    coding: "Build a feature-flagged stub to validate an API contract before investing in the complete service.",
    output: "Prototype artifact, expected vs actual result, learning, next decision."
  },
  {
    rank: "08",
    title: "Operating Rhythm Implementation",
    file: "08-operating-rhythm-implementation.svg",
    accent: "#0f766e",
    tint: "#ccfbf1",
    useWhen: "The solution only works if people repeat a new behavior with accountability.",
    steps: [
      { label: "Define behavior", scene: "checklist-human", title: "New habit", example: "Name blockers daily." },
      { label: "Set cadence", scene: "calendar", title: "Weekly rhythm", example: "Monday pipeline review." },
      { label: "Assign owner", scene: "owner", title: "Clear DRI", example: "One owner per blocker." },
      { label: "Review metric", scene: "metrics", title: "Visible score", example: "Stage conversion moves." }
    ],
    business: "Weekly pipeline review names owner, blockers, next actions, and stage-conversion movement.",
    coding: "Daily deploy health check covers failed jobs, rollback readiness, DRI ownership, and open blockers.",
    output: "Cadence, roles, visible metric, communication script, review date."
  },
  {
    rank: "09",
    title: "Learning Mindset and Retrospective",
    file: "09-learning-mindset-and-retrospective.svg",
    accent: "#4f46e5",
    tint: "#e0e7ff",
    useWhen: "A test, launch, failure, or decision produced results that should become reusable learning.",
    steps: [
      { label: "Expected vs actual", scene: "split-board", title: "Compare result", example: "Target and result go side by side." },
      { label: "Name evidence", scene: "evidence-table", title: "Evidence table", example: "Survey, usage, notes." },
      { label: "Update assumptions", scene: "edit-board", title: "Updated belief", example: "Managers need scripts before metrics." },
      { label: "Choose next move", scene: "next-flag", title: "Next action", example: "Revise pilot and retest." }
    ],
    business: "A pilot misses target. The lesson: managers need scripts and practice before accountability metrics.",
    coding: "An incident review shows alerts were noisy. The lesson: alert on user impact, not raw CPU threshold.",
    output: "Learning notes, updated assumptions, reusable rule, next experiment or change."
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
