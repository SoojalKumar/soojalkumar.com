import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = "public/project-assets";

const escape = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const write = (path, svg) => {
  const fullPath = join(root, path);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, svg);
};

const shell = (title, body, accent = "#06B6D4") => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="900" viewBox="0 0 1400 900" role="img" aria-label="${escape(title)}">
  <rect width="1400" height="900" fill="#F8FAFC"/>
  <rect x="70" y="70" width="1260" height="760" rx="34" fill="#FFFFFF" stroke="#D7E1EA" stroke-width="3"/>
  <rect x="70" y="70" width="1260" height="86" rx="34" fill="#0B1120"/>
  <circle cx="118" cy="113" r="12" fill="#F87171"/><circle cx="154" cy="113" r="12" fill="#FBBF24"/><circle cx="190" cy="113" r="12" fill="#34D399"/>
  <text x="700" y="124" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="800" fill="#FFFFFF">${escape(title)}</text>
  ${body}
  <rect x="98" y="778" width="220" height="28" rx="14" fill="${accent}" opacity=".16"/>
  <text x="118" y="798" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="700" fill="${accent}">Grounded project visual</text>
</svg>`;

const card = (x, y, w, h, title, lines, fill = "#FFFFFF", stroke = "#D7E1EA") => `
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="24" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
  <text x="${x + 28}" y="${y + 45}" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="800" fill="#111827">${escape(title)}</text>
  ${lines
    .map((line, index) => `<text x="${x + 28}" y="${y + 88 + index * 34}" font-family="Inter, Arial, sans-serif" font-size="21" fill="#475569">${escape(line)}</text>`)
    .join("")}`;

const arrow = (x1, y1, x2, y2) => `
  <path d="M${x1} ${y1} L${x2} ${y2}" stroke="#06B6D4" stroke-width="5" stroke-linecap="round"/>
  <path d="M${x2 - 18} ${y2 - 13} L${x2} ${y2} L${x2 - 18} ${y2 + 13}" fill="none" stroke="#06B6D4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`;

write(
  "campusstudy-ai/study-dashboard.svg",
  shell(
    "CampusStudy AI Dashboard",
    `
  <text x="118" y="230" font-family="Inter, Arial, sans-serif" font-size="42" font-weight="900" fill="#111827">Study Workspace</text>
  <text x="118" y="270" font-family="Inter, Arial, sans-serif" font-size="22" fill="#64748B">Courses, materials, AI assistant, and study workflows in one academic surface.</text>
  ${card(118, 320, 360, 190, "AI Assistant", ["Ask course-aware questions", "Generate study support"], "#ECFEFF", "#A5F3FC")}
  ${card(520, 320, 360, 190, "Study Planner", ["Upcoming material reviews", "Flashcards and quizzes"], "#FFFFFF", "#D7E1EA")}
  ${card(922, 320, 290, 190, "Course Context", ["Notes", "Materials", "Citations"], "#FFFFFF", "#D7E1EA")}
  ${card(118, 555, 1094, 150, "Recent Workflow", ["Upload material -> extract content -> retrieve context -> generate flashcards / quiz / notes"], "#F8FAFC", "#D7E1EA")}
  <rect x="760" y="596" width="380" height="18" rx="9" fill="#CBD5E1"/>
  <rect x="760" y="596" width="265" height="18" rx="9" fill="#06B6D4"/>`
  )
);

write(
  "campusstudy-ai/rag-flow.svg",
  shell(
    "CampusStudy AI RAG Flow",
    `
  ${card(118, 260, 220, 150, "Input", ["Notes", "Slides", "Questions"], "#ECFEFF", "#A5F3FC")}
  ${arrow(350, 335, 456, 335)}
  ${card(470, 260, 230, 150, "Chunking", ["Clean text", "Split sections"])}
  ${arrow(712, 335, 818, 335)}
  ${card(832, 260, 230, 150, "Retrieval", ["Find course", "context"])}
  ${arrow(1074, 335, 1180, 335)}
  ${card(1188, 260, 112, 150, "AI", ["Answer"])}
  ${card(250, 535, 900, 140, "Grounded Study Output", ["Generated answers keep a visible path back to the student's academic content."], "#F8FAFC", "#D7E1EA")}`
  )
);

write(
  "campusstudy-ai/worker-pipeline.svg",
  shell(
    "CampusStudy AI Worker Pipeline",
    `
  ${card(130, 260, 250, 150, "Web / Mobile", ["Study request", "Material upload"], "#ECFEFF", "#A5F3FC")}
  ${arrow(396, 335, 500, 335)}
  ${card(514, 260, 250, 150, "FastAPI", ["Routes", "Validation"])}
  ${arrow(780, 335, 884, 335)}
  ${card(898, 260, 250, 150, "Workers", ["Extraction", "Generation"])}
  ${card(322, 525, 330, 150, "Study Data", ["Courses", "Materials", "Notes"], "#F8FAFC")}
  ${card(744, 525, 330, 150, "AI Provider", ["RAG prompt", "Study output"], "#F8FAFC")}
  ${arrow(640, 440, 520, 525)}
  ${arrow(900, 440, 900, 525)}`
  )
);

write(
  "cloud-api-service/api-response.svg",
  shell(
    "Cloud API Request / Response",
    `
  <rect x="120" y="230" width="1160" height="470" rx="24" fill="#0B1120"/>
  <text x="165" y="285" font-family="SFMono-Regular, Menlo, monospace" font-size="28" font-weight="800" fill="#67E8F9">GET /api/v1/tasks?status=open&amp;page=1</text>
  <text x="165" y="345" font-family="SFMono-Regular, Menlo, monospace" font-size="24" fill="#CBD5E1">x-api-key: development-api-key</text>
  <text x="165" y="430" font-family="SFMono-Regular, Menlo, monospace" font-size="24" fill="#A7F3D0">{</text>
  <text x="205" y="475" font-family="SFMono-Regular, Menlo, monospace" font-size="24" fill="#E0F2FE">"items": ["task objects"],</text>
  <text x="205" y="520" font-family="SFMono-Regular, Menlo, monospace" font-size="24" fill="#E0F2FE">"page": 1,</text>
  <text x="205" y="565" font-family="SFMono-Regular, Menlo, monospace" font-size="24" fill="#E0F2FE">"total": 24</text>
  <text x="165" y="610" font-family="SFMono-Regular, Menlo, monospace" font-size="24" fill="#A7F3D0">}</text>`
  )
);

write(
  "cloud-api-service/cicd-flow.svg",
  shell(
    "Cloud API CI/CD Flow",
    `
  ${card(120, 300, 220, 140, "React UI", ["Task dashboard"], "#ECFEFF", "#A5F3FC")}
  ${arrow(356, 370, 462, 370)}
  ${card(476, 300, 220, 140, "FastAPI", ["Routes", "Services"])}
  ${arrow(712, 370, 818, 370)}
  ${card(832, 300, 220, 140, "SQLite", ["Persistence"])}
  ${arrow(1068, 370, 1174, 370)}
  ${card(1188, 300, 120, 140, "Docker", ["Image"])}
  ${card(390, 545, 620, 130, "GitHub Actions", ["Install -> Test -> Build -> Deploy readiness"], "#F8FAFC", "#D7E1EA")}`
  )
);

write(
  "echowear/voice-flow.svg",
  shell(
    "EchoWear Voice Interaction Flow",
    `
  ${card(125, 295, 230, 150, "User Voice", ["Wake phrase", "Command"], "#ECFEFF", "#A5F3FC")}
  ${arrow(370, 370, 475, 370)}
  ${card(490, 295, 230, 150, "AVFoundation", ["Microphone", "Audio stream"])}
  ${arrow(735, 370, 840, 370)}
  ${card(855, 295, 230, 150, "Speech", ["Recognition", "Text output"])}
  ${arrow(1100, 370, 1205, 370)}
  ${card(1218, 295, 110, 150, "UI", ["Feedback"])}
  ${card(310, 555, 780, 130, "Accessibility Layer", ["Immediate visual confirmation and wearable-focused interaction patterns"], "#F8FAFC", "#D7E1EA")}`
  )
);

write(
  "genai-optimization/evolution-pipeline.svg",
  shell(
    "Genetic Algorithm Evolution Pipeline",
    `
  ${card(110, 300, 210, 145, "Population", ["Candidate", "strategies"], "#ECFEFF", "#A5F3FC")}
  ${arrow(335, 372, 440, 372)}
  ${card(455, 300, 210, 145, "Fitness", ["Score each", "strategy"])}
  ${arrow(680, 372, 785, 372)}
  ${card(800, 300, 210, 145, "Selection", ["Keep strong", "candidates"])}
  ${arrow(1025, 372, 1130, 372)}
  ${card(1145, 300, 150, 145, "Mutation", ["Explore"])}
  ${card(290, 545, 820, 125, "Best Strategy Output", ["Training/testing workflow writes JSON summaries and fitness plots for analysis."], "#F8FAFC", "#D7E1EA")}`
  )
);

write(
  "genai-optimization/json-summary.svg",
  shell(
    "GenAI Experiment Summary",
    `
  <rect x="130" y="230" width="1140" height="500" rx="24" fill="#0B1120"/>
  <text x="170" y="290" font-family="SFMono-Regular, Menlo, monospace" font-size="26" fill="#67E8F9">outputs/run_summary.json</text>
  <text x="170" y="360" font-family="SFMono-Regular, Menlo, monospace" font-size="24" fill="#A7F3D0">{</text>
  <text x="210" y="405" font-family="SFMono-Regular, Menlo, monospace" font-size="24" fill="#E0F2FE">"population_size": 100,</text>
  <text x="210" y="450" font-family="SFMono-Regular, Menlo, monospace" font-size="24" fill="#E0F2FE">"mutation_rate": 0.05,</text>
  <text x="210" y="495" font-family="SFMono-Regular, Menlo, monospace" font-size="24" fill="#E0F2FE">"generations": 50,</text>
  <text x="210" y="540" font-family="SFMono-Regular, Menlo, monospace" font-size="24" fill="#E0F2FE">"best_fitness": "experiment output"</text>
  <text x="170" y="585" font-family="SFMono-Regular, Menlo, monospace" font-size="24" fill="#A7F3D0">}</text>`
  )
);

write(
  "orbit-simulator/config-panel.svg",
  shell(
    "Orbit Simulator Configuration",
    `
  <rect x="130" y="230" width="1140" height="500" rx="24" fill="#0B1120"/>
  <text x="170" y="290" font-family="SFMono-Regular, Menlo, monospace" font-size="26" fill="#67E8F9">docs/sample_system.json</text>
  <text x="170" y="360" font-family="SFMono-Regular, Menlo, monospace" font-size="23" fill="#E0F2FE">central_star: mass, radius</text>
  <text x="170" y="410" font-family="SFMono-Regular, Menlo, monospace" font-size="23" fill="#E0F2FE">planets: semi_major_axis, eccentricity, period</text>
  <text x="170" y="460" font-family="SFMono-Regular, Menlo, monospace" font-size="23" fill="#E0F2FE">solver: Kepler equation -> orbital position</text>
  <text x="170" y="510" font-family="SFMono-Regular, Menlo, monospace" font-size="23" fill="#E0F2FE">renderer: Matplotlib static image + animated GIF</text>
  <circle cx="1020" cy="470" r="48" fill="#FBBF24"/>
  <ellipse cx="1020" cy="470" rx="175" ry="85" fill="none" stroke="#67E8F9" stroke-width="5"/>
  <circle cx="1160" cy="430" r="18" fill="#38BDF8"/>`
  )
);

write(
  "sentiment-analysis/nlp-pipeline.svg",
  shell(
    "Naive Bayes NLP Pipeline",
    `
  ${card(115, 300, 210, 145, "Review", ["Raw movie", "text"], "#ECFEFF", "#A5F3FC")}
  ${arrow(340, 372, 445, 372)}
  ${card(460, 300, 210, 145, "Clean", ["Lowercase", "punctuation"])}
  ${arrow(685, 372, 790, 372)}
  ${card(805, 300, 210, 145, "Tokens", ["Word", "features"])}
  ${arrow(1030, 372, 1135, 372)}
  ${card(1150, 300, 145, 145, "Model", ["Naive", "Bayes"])}
  ${card(270, 545, 860, 125, "Prediction", ["Positive / Negative review classification with Laplace smoothing and log probabilities."], "#F8FAFC", "#D7E1EA")}`
  )
);

write(
  "sentiment-analysis/classification-output.svg",
  shell(
    "Sentiment Classification Output",
    `
  ${card(140, 260, 1120, 170, "Input Review", ["The movie was surprisingly emotional and well acted."], "#ECFEFF", "#A5F3FC")}
  <rect x="140" y="500" width="1120" height="150" rx="24" fill="#0B1120"/>
  <text x="185" y="560" font-family="SFMono-Regular, Menlo, monospace" font-size="28" fill="#67E8F9">prediction = Positive Review</text>
  <text x="185" y="610" font-family="SFMono-Regular, Menlo, monospace" font-size="23" fill="#CBD5E1">scoring uses token frequencies, smoothing, and log-probability comparison</text>`
  )
);

write(
  "cache-simulator/cache-table.svg",
  shell(
    "Cache Simulator Hit / Miss Table",
    `
  <rect x="140" y="245" width="1120" height="420" rx="24" fill="#FFFFFF" stroke="#D7E1EA" stroke-width="2"/>
  <rect x="140" y="245" width="1120" height="70" rx="24" fill="#ECFEFF"/>
  <text x="185" y="290" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="800" fill="#111827">Address</text>
  <text x="440" y="290" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="800" fill="#111827">Set</text>
  <text x="620" y="290" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="800" fill="#111827">Tag</text>
  <text x="835" y="290" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="800" fill="#111827">Result</text>
  <text x="185" y="375" font-family="SFMono-Regular, Menlo, monospace" font-size="25" fill="#334155">0x1A3F</text><text x="450" y="375" font-size="25" font-family="SFMono-Regular, Menlo, monospace" fill="#334155">3</text><text x="620" y="375" font-size="25" font-family="SFMono-Regular, Menlo, monospace" fill="#334155">0x68</text><text x="835" y="375" font-size="25" font-family="Inter, Arial, sans-serif" font-weight="900" fill="#059669">HIT</text>
  <text x="185" y="465" font-family="SFMono-Regular, Menlo, monospace" font-size="25" fill="#334155">0x2B41</text><text x="450" y="465" font-size="25" font-family="SFMono-Regular, Menlo, monospace" fill="#334155">1</text><text x="620" y="465" font-size="25" font-family="SFMono-Regular, Menlo, monospace" fill="#334155">0xAD</text><text x="835" y="465" font-size="25" font-family="Inter, Arial, sans-serif" font-weight="900" fill="#DC2626">MISS</text>
  <text x="185" y="555" font-family="SFMono-Regular, Menlo, monospace" font-size="25" fill="#334155">0x1A3F</text><text x="450" y="555" font-size="25" font-family="SFMono-Regular, Menlo, monospace" fill="#334155">3</text><text x="620" y="555" font-size="25" font-family="SFMono-Regular, Menlo, monospace" fill="#334155">0x68</text><text x="835" y="555" font-size="25" font-family="Inter, Arial, sans-serif" font-weight="900" fill="#059669">HIT</text>`
  )
);

write(
  "cache-simulator/address-breakdown.svg",
  shell(
    "Memory Address Breakdown",
    `
  <rect x="160" y="330" width="1080" height="150" rx="24" fill="#0B1120"/>
  <rect x="200" y="365" width="330" height="80" rx="18" fill="#06B6D4"/>
  <rect x="550" y="365" width="330" height="80" rx="18" fill="#38BDF8"/>
  <rect x="900" y="365" width="290" height="80" rx="18" fill="#A5F3FC"/>
  <text x="365" y="415" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="27" font-weight="900" fill="#082F49">TAG</text>
  <text x="715" y="415" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="27" font-weight="900" fill="#082F49">INDEX</text>
  <text x="1045" y="415" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="27" font-weight="900" fill="#082F49">OFFSET</text>
  ${card(250, 575, 900, 115, "Lookup Flow", ["Parse address -> choose set -> compare tag -> update LRU and statistics"], "#F8FAFC", "#D7E1EA")}`
  )
);

write(
  "banking-system/class-diagram.svg",
  shell(
    "Banking System OOP Class Diagram",
    `
  ${card(535, 220, 330, 120, "Bank", ["owns accounts", "routes operations"], "#ECFEFF", "#A5F3FC")}
  ${arrow(700, 350, 700, 440)}
  ${card(510, 455, 380, 125, "BankAccount", ["account number", "balance", "deposit / withdraw"])}
  ${arrow(620, 590, 430, 665)}
  ${arrow(780, 590, 970, 665)}
  ${card(210, 670, 360, 110, "CheckingAccount", ["checking-specific behavior"], "#F8FAFC")}
  ${card(830, 670, 360, 110, "SavingsAccount", ["savings-specific behavior"], "#F8FAFC")}`
  )
);

write(
  "banking-system/transaction-flow.svg",
  shell(
    "Banking Transaction Console Flow",
    `
  <rect x="140" y="230" width="1120" height="500" rx="24" fill="#0B1120"/>
  <text x="185" y="295" font-family="SFMono-Regular, Menlo, monospace" font-size="25" fill="#67E8F9">create CheckingAccount #1024</text>
  <text x="185" y="355" font-family="SFMono-Regular, Menlo, monospace" font-size="25" fill="#E0F2FE">deposit 250.00</text>
  <text x="185" y="415" font-family="SFMono-Regular, Menlo, monospace" font-size="25" fill="#E0F2FE">withdraw 40.00</text>
  <text x="185" y="475" font-family="SFMono-Regular, Menlo, monospace" font-size="25" fill="#A7F3D0">balance -> 210.00</text>
  <text x="185" y="570" font-family="SFMono-Regular, Menlo, monospace" font-size="22" fill="#CBD5E1">Console interface exercises C++ classes, account state, and transaction methods.</text>`
  )
);

write(
  "zerog-survival/gameplay-scene.svg",
  shell(
    "Zero-G Survival Gameplay Scene",
    `
  <rect x="120" y="220" width="1160" height="480" rx="24" fill="#050816"/>
  <circle cx="210" cy="300" r="3" fill="#FFFFFF"/><circle cx="330" cy="520" r="4" fill="#FFFFFF"/><circle cx="620" cy="285" r="3" fill="#FFFFFF"/><circle cx="940" cy="610" r="4" fill="#FFFFFF"/><circle cx="1130" cy="360" r="3" fill="#FFFFFF"/>
  <image href="/project-assets/zerog-survival/space-man.png" x="225" y="330" width="180" height="160" preserveAspectRatio="xMidYMid meet"/>
  <image href="/project-assets/zerog-survival/big-meteor.png" x="790" y="285" width="165" height="165" preserveAspectRatio="xMidYMid meet"/>
  <image href="/project-assets/zerog-survival/big-meteor.png" x="1015" y="500" width="105" height="105" preserveAspectRatio="xMidYMid meet"/>
  <rect x="180" y="640" width="370" height="26" rx="13" fill="#1E293B"/><rect x="180" y="640" width="235" height="26" rx="13" fill="#06B6D4"/>
  <text x="180" y="625" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="800" fill="#FFFFFF">Oxygen</text>
  <text x="930" y="645" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="800" fill="#A5F3FC">Reach the station</text>`
  )
);

write(
  "zerog-survival/survival-loop.svg",
  shell(
    "Zero-G Survival Game Loop",
    `
  ${card(115, 310, 210, 140, "Input", ["Move", "Navigate"], "#ECFEFF", "#A5F3FC")}
  ${arrow(340, 380, 445, 380)}
  ${card(460, 310, 210, 140, "Update", ["Position", "Oxygen"])}
  ${arrow(685, 380, 790, 380)}
  ${card(805, 310, 210, 140, "Hazards", ["Asteroids", "Collisions"])}
  ${arrow(1030, 380, 1135, 380)}
  ${card(1150, 310, 145, 140, "State", ["Win", "Lose"])}
  ${card(285, 555, 830, 120, "Survival Pressure", ["Limited oxygen and obstacle avoidance create the core player decision loop."], "#F8FAFC", "#D7E1EA")}`
  )
);

