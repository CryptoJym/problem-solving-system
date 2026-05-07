# Problem Solving System

A public, reusable skill stack for solving messy problems without jumping straight to the first attractive solution.

The system is ordered by leverage. The highest-value skills come first because they prevent wasted work: framing the right problem, observing reality, proving causes, widening options, and testing assumptions before implementation.

## Quickstart

Use this system when a problem is messy, political, expensive to solve, unclear, or repeatedly coming back after informal fixes.

1. Start with [Problem Framing and Reframing](skills/01-problem-framing-and-reframing/SKILL.md) unless the problem is already sharply framed.
2. Move down the numbered list until you reach the first skill that has not been done well yet.
3. Produce the output artifact from that skill before moving to the next one.
4. Treat every solution as a hypothesis until it has been reality-tested or prototyped.
5. After action, run the retrospective skill and update the system with what was learned.

## The Skill Stack

| Rank | Skill | What It Is | When To Use It | How It Works | Output |
| --- | --- | --- | --- | --- | --- |
| 1 | [Problem Framing and Reframing](skills/01-problem-framing-and-reframing/SKILL.md) | Turns a vague, biased, or solution-shaped complaint into a testable problem frame. | Use before any serious solution work, especially when people are arguing about fixes. | Strip out hidden causes and solutions, name the goal, rewrite the problem from user, owner, system, and outcome frames, then choose the frame that creates the clearest next evidence step. | Reframed problem, explicit goal, removed assumptions, next evidence needed. |
| 2 | [Observation and Problem Finding](skills/02-observation-and-problem-finding/SKILL.md) | Finds the right problem by watching the real workflow instead of relying only on opinions. | Use when there are many possible problems, secondhand complaints, or weak evidence. | Collect candidate problems, observe users or operators, record surprises and workarounds, then rank candidates by pain, value, feasibility, control, and evidence. | Candidate problem list, symptoms, observation notes, selection rationale. |
| 3 | [Root Cause and Constraint Mapping](skills/03-root-cause-and-constraint-mapping/SKILL.md) | Converts symptoms into a causal map and identifies the constraint or controllable cause. | Use when symptoms are known but causes are contested. | Define the system goal, list undesirable effects, connect causes with if-then logic, run 5 Whys, and mark weak or unproven causal links. | Goal, UDE list, causal map, likely constraint, controllable intervention. |
| 4 | [Decision Hygiene and Option Widening](skills/04-decision-hygiene-and-option-widening/SKILL.md) | Prevents narrow yes/no decisions and premature commitment to a favorite option. | Use before choosing a solution or when the team has only one serious option. | Name decision risks, run the vanishing option test, add alternatives, identify assumptions, and define tripwires before action. | Option set, opportunity costs, assumptions, chosen option, pivot rules. |
| 5 | [Reality Testing and Evidence Seeking](skills/05-reality-testing-and-evidence-seeking/SKILL.md) | Checks the claims that must be true before money, time, or trust is spent. | Use when the cost of being wrong is high or the plan depends on behavior, policy, safety, or compliance. | List critical assumptions, gather zoom-out and zoom-in evidence, seek disagreement, and update confidence based on what changed. | Assumption register, evidence, confidence level, revised recommendation. |
| 6 | [Structured Ideation and Brainwriting](skills/06-structured-ideation-and-brainwriting/SKILL.md) | Generates better options without letting dominant voices or first-solution bias take over. | Use after the problem is formulated but the solution set is shallow. | Require pre-work, write silently, pass ideas for additions and combinations, cluster themes, then select finalists for testing. | Raw idea inventory, clusters, top concepts, testing candidates. |
| 7 | [Rapid Prototyping and Experiments](skills/07-rapid-prototyping-and-experiments/SKILL.md) | Makes a solution testable quickly before a full build or rollout. | Use when a concept looks promising but important uncertainty remains. | Pick the riskiest assumption, build the lowest-fidelity prototype that can test it, write the expected result, run the test, and decide what to do next. | Prototype artifact, expected vs actual result, learning, next decision. |
| 8 | [Operating Rhythm Implementation](skills/08-operating-rhythm-implementation/SKILL.md) | Turns a solution into repeated behavior, ownership, cadence, and measurement. | Use when success depends on people doing different work consistently. | Translate the solution into a recurring cadence, assign owners, define visible progress, communicate expectations, train, and review after the first cycle. | Cadence, roles, metric, communication script, review date. |
| 9 | [Learning Mindset and Retrospective](skills/09-learning-mindset-and-retrospective/SKILL.md) | Converts results, failures, and surprises into reusable learning. | Use after tests, launches, decisions, failures, or unexpected outcomes. | Compare expected vs actual, separate facts from interpretation, identify what was proved or disproved, and update the system. | Learning notes, updated assumptions, reusable rule, next move. |

## Operating Loop

Use the skills as a loop:

1. Frame or reframe the problem.
2. Observe the real system and find the problem worth solving.
3. Map symptoms, root causes, constraints, and controllable causes.
4. Widen the option set and check decision traps.
5. Reality-test assumptions with evidence, base rates, experts, and disagreement.
6. Generate options with structured ideation.
7. Prototype small and learn fast.
8. Implement through simple operating rhythms.
9. Capture learning and update the system.

## How To Choose The Next Skill

Use the lowest-numbered skill that has not been done well yet:

- If the problem statement already contains a solution, use Skill 1.
- If the team has not watched the real workflow, use Skill 2.
- If people disagree about causes, use Skill 3.
- If there is only one favored option, use Skill 4.
- If the plan depends on untested assumptions, use Skill 5.
- If the solution set is thin, use Skill 6.
- If debate is abstract, use Skill 7.
- If the solution is not becoming behavior, use Skill 8.
- If the team has acted but not learned, use Skill 9.

## What Good Looks Like

A good run through this system leaves behind inspectable artifacts:

- a problem frame that can be tested
- observation notes from the real system
- a causal model with assumptions marked
- a widened option set
- evidence that can change the recommendation
- prototype results before full buildout
- a recurring operating rhythm
- a retrospective that updates future behavior

## Source Scope

Primary sources reviewed were the Drive root docs, the CRT drawing, and high-signal class PDFs in `All Slides from Class`, including problem solving cycle, problem finding, formulation, ideation, decision hygiene, prototyping, failure/learning, and mindset material.

## Public Use

The repo is written as a practical playbook, not a transcript. It intentionally extracts reusable procedures, templates, and checks while excluding private source details and low-signal classroom noise.

For an individual problem, use one skill at a time. For a team workshop, assign a facilitator and require a visible artifact at the end of each skill before advancing.

## Repository Map

- [Detailed ordered rationale](docs/ordered-skill-system.md)
- [Source review notes](docs/source-review-notes.md)
- [Reusable skill playbooks](skills/README.md)
- [Public skill pack design](docs/plans/2026-05-07-public-skill-pack-design.md)
