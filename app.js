// ===== DATA =====
const timelineData = [
  { date: "12-18 Months Before", title: "Candidate Announcements", desc: "Candidates declare their intention to run for office and begin building campaign teams.", details: "Candidates file official paperwork, hire staff, begin fundraising, and start traveling to key states. They outline policy platforms and start building name recognition.", phase: "pre" },
  { date: "6-12 Months Before", title: "Primary & Caucus Season", desc: "Voters in each state choose their preferred candidate within each party.", details: "Primaries are state-run elections where voters cast secret ballots. Caucuses are local gatherings where voters publicly show support. Delegates are awarded based on results, determining who will represent each party.", phase: "pre" },
  { date: "4-5 Months Before", title: "National Conventions", desc: "Each major party officially nominates its candidate for president.", details: "Delegates from all states gather at national conventions. The candidate with the most delegates wins the nomination. The nominee selects a vice-presidential running mate and delivers an acceptance speech.", phase: "pre" },
  { date: "2-3 Months Before", title: "General Election Campaign", desc: "Nominated candidates campaign nationwide, debating and presenting platforms.", details: "Candidates participate in nationally televised debates, hold rallies across battleground states, and run advertising campaigns. Voter registration drives intensify during this period.", phase: "pre" },
  { date: "Weeks Before", title: "Early & Absentee Voting", desc: "Many states allow voters to cast ballots before Election Day.", details: "Early voting allows in-person voting before Election Day. Absentee voting lets voters mail in their ballots. Rules vary by state — some require an excuse, others offer no-excuse absentee voting.", phase: "during" },
  { date: "First Tuesday in November", title: "Election Day", desc: "Voters across the nation head to polling stations to cast their votes.", details: "Polls open early in the morning and close in the evening (times vary by state). Voters select candidates for president, Congress, and local offices. Exit polls and early returns begin reporting in the evening.", phase: "during" },
  { date: "Days to Weeks After", title: "Vote Counting & Certification", desc: "All ballots are counted, results are verified, and outcomes are certified.", details: "Each state counts and certifies its results. Close races may trigger automatic recounts. The certified results determine how each state's Electoral College votes are allocated.", phase: "post" },
  { date: "December", title: "Electoral College Vote", desc: "Electors formally cast their votes for president and vice president.", details: "Each state's electors meet in their state capitals to cast votes. A candidate needs 270 of 538 electoral votes to win. Results are sent to Congress for the official count.", phase: "post" },
  { date: "January 6", title: "Congressional Certification", desc: "Congress meets in joint session to certify the Electoral College results.", details: "The Vice President presides over the session. Electoral votes from all states are opened and counted. If no candidate reaches 270, the House of Representatives chooses the president.", phase: "post" },
  { date: "January 20", title: "Inauguration Day", desc: "The newly elected president is sworn into office.", details: "The Chief Justice of the Supreme Court administers the oath of office. The new president delivers an inaugural address outlining their vision. The peaceful transfer of power is one of democracy's most important traditions.", phase: "post" }
];

const stepsData = [
  { title: "Check Your Eligibility", desc: "Confirm you meet the requirements to vote in your state.", expanded: "You must be a U.S. citizen, meet your state's residency requirements, and be 18 years old on or before Election Day. Some states allow 17-year-olds to vote in primaries." },
  { title: "Register to Vote", desc: "Complete voter registration before your state's deadline.", expanded: "You can register online, by mail, or in person at your local election office. Some states offer same-day registration. Check your state's deadline — it can be 30 days before the election." },
  { title: "Learn About Candidates", desc: "Research the candidates and their positions on key issues.", expanded: "Visit candidate websites, watch debates, read voter guides from nonpartisan organizations, and attend town halls. Understanding each candidate's platform helps you make an informed choice." },
  { title: "Know Your Polling Place", desc: "Find out where and when you can cast your vote.", expanded: "Your polling place is based on your registered address. Check your state or county election website for location, hours, and any ID requirements. Consider early voting options if available." },
  { title: "Prepare Your ID & Documents", desc: "Gather any identification required by your state.", expanded: "ID requirements vary by state. Some require photo ID, others accept non-photo ID or allow you to sign an affidavit. Check your state's specific requirements well in advance." },
  { title: "Cast Your Vote", desc: "Vote in person, by mail, or through early voting.", expanded: "On Election Day, go to your designated polling place during operating hours. Follow instructions on the ballot carefully. If you make a mistake, ask for a new ballot. Voting is private and confidential." },
  { title: "Track Your Ballot", desc: "If voting by mail, verify your ballot was received and counted.", expanded: "Many states offer online ballot tracking tools. You can confirm your mail-in or absentee ballot was received, verified, and counted. If there's an issue, you may be able to 'cure' your ballot." },
  { title: "Stay Informed on Results", desc: "Follow the vote count and certification process.", expanded: "Results may not be final on election night. Mail-in ballots can take days to count. Official results are certified by each state, then the Electoral College meets in December to formally elect the president." }
];

const faqData = [
  { q: "Who is eligible to vote in the United States?", a: "U.S. citizens who are at least 18 years old on or before Election Day and meet their state's residency requirements. Some states restore voting rights to formerly incarcerated individuals." },
  { q: "How do I register to vote?", a: "You can register online at vote.gov, by mail, or in person at your local election office, DMV, or other designated agencies. Some states offer same-day voter registration at polling places." },
  { q: "What is the Electoral College?", a: "The Electoral College is a group of 538 electors who formally elect the president. Each state gets electors equal to its Congressional representation. A candidate needs 270 electoral votes to win." },
  { q: "What is the difference between a primary and a general election?", a: "Primaries are intra-party elections where voters choose their party's nominee. The general election is the final contest between nominees from different parties, held on the first Tuesday after the first Monday in November." },
  { q: "Can I vote if I'm abroad or in the military?", a: "Yes! The Uniformed and Overseas Citizens Absentee Voting Act (UOCAVA) allows military and overseas voters to register and vote absentee in federal elections from anywhere in the world." },
  { q: "What happens if there's a tie in the Electoral College?", a: "If no candidate reaches 270 electoral votes, the House of Representatives chooses the president (each state delegation gets one vote), and the Senate chooses the vice president." },
  { q: "What is gerrymandering?", a: "Gerrymandering is the practice of drawing electoral district boundaries to favor a particular party or group. It can reduce electoral competitiveness and is a subject of ongoing legal and political debate." },
  { q: "What are swing states?", a: "Swing states (or battleground states) are states where either major party candidate has a reasonable chance of winning. Campaigns focus heavily on these states because they can determine the election outcome." },
  { q: "How are votes counted?", a: "After polls close, election workers count ballots using methods that vary by jurisdiction — paper ballots, optical scanners, or electronic systems. Results are then reported to county and state election boards for certification." },
  { q: "What is ranked-choice voting?", a: "Ranked-choice voting allows voters to rank candidates by preference. If no candidate gets a majority, the last-place candidate is eliminated and their votes redistribute based on second choices, continuing until someone wins a majority." },
  { q: "When is the next presidential election?", a: "U.S. presidential elections occur every four years. The most recent was in 2024, so the next will be in 2028, held on the first Tuesday after the first Monday in November." },
  { q: "What ID do I need to vote?", a: "Requirements vary by state. Some require government-issued photo ID, others accept non-photo ID, utility bills, or bank statements. Several states require no ID at all. Check your state's specific requirements." }
];

const quizData = [
  { question: "How many electoral votes are needed to win the presidency?", options: ["200", "270", "300", "538"], correct: 1 },
  { question: "When is Election Day in the United States?", options: ["First Monday in November", "First Tuesday after the first Monday in November", "November 1st", "Last Tuesday in October"], correct: 1 },
  { question: "What is the total number of Electoral College votes?", options: ["435", "500", "538", "600"], correct: 2 },
  { question: "Who presides over the counting of Electoral College votes in Congress?", options: ["The Speaker of the House", "The Vice President", "The Chief Justice", "The Secretary of State"], correct: 1 },
  { question: "What is a caucus?", options: ["A type of ballot", "A local gathering where voters publicly show support", "A televised debate", "A recount process"], correct: 1 },
  { question: "On what date is Inauguration Day?", options: ["January 1", "January 6", "January 15", "January 20"], correct: 3 },
  { question: "What happens if no candidate reaches 270 electoral votes?", options: ["A runoff election is held", "The Supreme Court decides", "The House of Representatives chooses the president", "The sitting president stays in office"], correct: 2 },
  { question: "What is the minimum voting age in U.S. federal elections?", options: ["16", "17", "18", "21"], correct: 2 }
];

const chatKnowledge = {
  "register": "To register to vote, you can:\n\n• **Online**: Visit vote.gov and follow your state's registration link\n• **By Mail**: Download, print, and mail the National Voter Registration Form\n• **In Person**: Visit your local election office, DMV, or armed forces recruitment center\n\nMost states require registration 15-30 days before the election. Some states offer same-day registration. You'll need your name, address, date of birth, and often the last 4 digits of your SSN.",
  "electoral college": "The **Electoral College** is the system used to elect the U.S. President:\n\n• There are **538 total electors** across all states\n• A candidate needs at least **270 electoral votes** to win\n• Each state gets electors equal to its total Congressional representation (House + Senate)\n• Most states use a **winner-take-all** system\n• Electors meet in December to formally cast their votes\n• Maine and Nebraska use a proportional system",
  "election day": "**Election Day** is held on the **first Tuesday after the first Monday in November** every four years for presidential elections.\n\n• Polls typically open between 6-7 AM and close between 7-8 PM (varies by state)\n• Many states also hold elections for Congress, governor, and local offices\n• You vote at your designated polling place based on your registered address\n• Results start coming in as polls close across time zones",
  "steps": "The election process follows these key steps:\n\n1. **Candidate Announcements** — Candidates declare their run\n2. **Primaries & Caucuses** — Parties select their nominees\n3. **National Conventions** — Official nominations\n4. **General Campaign** — Debates and campaigning\n5. **Early & Absentee Voting** — Pre-Election Day voting\n6. **Election Day** — Nationwide voting\n7. **Vote Counting & Certification** — Results verified\n8. **Electoral College Vote** — Electors formally vote\n9. **Congressional Certification** — Congress certifies results\n10. **Inauguration** — President sworn in on January 20",
  "primary": "A **primary election** is how political parties choose their nominees:\n\n• **Closed primaries**: Only registered party members can vote\n• **Open primaries**: Any registered voter can participate\n• **Semi-closed**: Varies — independents may participate\n• Delegates are awarded based on primary results\n• The candidate with the most delegates wins the nomination at the national convention",
  "count": "After polls close, votes are counted through several methods:\n\n• **Paper ballots** scanned by optical readers\n• **Electronic voting machines** with digital records\n• **Hand counting** in some jurisdictions\n\nThe process involves:\n1. Precinct-level counting on election night\n2. County-level canvassing over following days\n3. State certification (usually within 2-4 weeks)\n4. Recounts if margins are extremely close\n\nMail-in and provisional ballots may take additional days to process.",
  "absentee": "**Absentee voting** lets you vote by mail without going to a polling place:\n\n• Some states require a valid excuse (illness, travel, etc.)\n• Many states now offer **no-excuse absentee voting**\n• You must request a ballot before the deadline\n• Complete and return it by mail or drop-off box\n• Most states let you **track your ballot** online\n• Deadlines vary — check your state's election website",
  "swing": "**Swing states** (battleground states) are states where the outcome is uncertain:\n\n• Neither party has a reliable majority\n• Campaigns invest heavily in these states\n• Recent swing states include Pennsylvania, Michigan, Wisconsin, Arizona, Georgia, and Nevada\n• They often determine the overall election outcome\n• Candidates spend the most time and money campaigning in these states",
  "inauguration": "**Inauguration Day** occurs on **January 20** following the election:\n\n• The Chief Justice administers the presidential oath of office\n• The new president delivers an inaugural address\n• It marks the official **transfer of power**\n• A parade and inaugural balls follow the ceremony\n• The outgoing president traditionally attends as a sign of peaceful transition\n• If January 20 falls on a Sunday, a private swearing-in occurs that day with public ceremonies on the 21st",
  "default": "That's a great question about the election process! Here's what I can tell you:\n\nThe U.S. election process involves multiple stages — from candidate announcements and primary elections through to Election Day and inauguration. Each step ensures that the democratic process is fair and transparent.\n\nTry asking me about specific topics like:\n• **Voter registration**\n• **The Electoral College**\n• **Primary elections**\n• **How votes are counted**\n• **Swing states**\n• **Inauguration Day**"
};

// ===== SECURITY UTILITIES =====
const Security = {
  MAX_INPUT_LENGTH: 500,
  sanitize(str) {
    if (!str || typeof str !== 'string') return '';
    return str.replace(/[<>'"&]/g, c => ({'<':'&lt;','>':'&gt;',"'":"&#39;",'"':'&quot;','&':'&amp;'}[c]));
  },
  validateAddress(addr) {
    if (!addr || typeof addr !== 'string') return false;
    if (addr.length > this.MAX_INPUT_LENGTH) return false;
    if (/<script|javascript:|on\w+\s*=/i.test(addr)) return false;
    return addr.trim().length >= 5;
  },
  validateChatInput(text) {
    if (!text || typeof text !== 'string') return false;
    if (text.length > this.MAX_INPUT_LENGTH) return false;
    return text.trim().length > 0;
  },
  sanitizeUrl(url) {
    if (!url || typeof url !== 'string') return '#';
    try {
      const u = new URL(url);
      if (!['http:', 'https:'].includes(u.protocol)) return '#';
      return u.href;
    } catch(e) { return '#'; }
  },
  createTextEl(tag, text, className) {
    const el = document.createElement(tag);
    el.textContent = text;
    if (className) el.className = className;
    return el;
  }
};

// Rate limiter to prevent API abuse
const RateLimiter = {
  _timestamps: {},
  check(key, intervalMs = 3000) {
    const now = Date.now();
    if (this._timestamps[key] && (now - this._timestamps[key]) < intervalMs) return false;
    this._timestamps[key] = now;
    return true;
  }
};

// ===== EFFICIENCY UTILITIES =====
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
}

// Cached DOM references (populated on DOMContentLoaded)
const DOM = {};

// ===== GOOGLE CIVIC INFORMATION API =====
const CIVIC_API_KEY = 'AIzaSyDemoKeyForTesting'; // Replace with your Google API key
const CIVIC_API_BASE = 'https://www.googleapis.com/civicinfo/v2';
const GOOGLE_MAPS_KEY = 'AIzaSyDemoKeyForTesting'; // Replace with your Maps API key

// ===== APP LOGIC =====
document.addEventListener('DOMContentLoaded', () => {
  ['main-nav','nav-toggle','nav-links','timeline-container','steps-grid',
   'progress-fill','progress-label','faq-list','faq-search','quiz-body',
   'quiz-result','quiz-next-btn','quiz-question-num','quiz-score',
   'quiz-progress-fill','quiz-question','quiz-options','result-icon',
   'result-title','result-desc','quiz-restart-btn','chat-input',
   'chat-send-btn','chat-messages','civic-address','civic-reps-btn',
   'civic-elections-btn','civic-results','civic-map-container','civic-map-iframe'
  ].forEach(id => { DOM[id] = document.getElementById(id); });
  initNav(); initHeroStats(); initTimeline(); initSteps(); initFAQ();
  initQuiz(); initChat(); initCivicInfo(); initScrollAnimations(); trackPageView();
});

// --- Navigation (Efficiency: passive scroll, debounced, event delegation) ---
function initNav() {
  const navbar = DOM['main-nav'], toggle = DOM['nav-toggle'], links = DOM['nav-links'];
  const debouncedNav = debounce(updateActiveNav, 100);
  window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 50); debouncedNav(); }, { passive: true });
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.addEventListener('click', (e) => { if (e.target.closest('.nav-link')) links.classList.remove('open'); });
}
function updateActiveNav() {
  const sections = ['hero','timeline','civic','steps','faq','quiz','assistant'];
  let current = 'hero';
  sections.forEach(id => { const el = document.getElementById(id); if (el && window.scrollY >= el.offsetTop - 200) current = id; });
  document.querySelectorAll('.nav-link').forEach(link => { link.classList.toggle('active', link.dataset.section === current); });
}

// --- Hero Stats ---
function initHeroStats() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.stat-number').forEach(el => {
          const target = +el.dataset.count; let current = 0; const step = Math.ceil(target / 30);
          const timer = setInterval(() => { current += step; if (current >= target) { current = target; clearInterval(timer); } el.textContent = current; }, 40);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });
  const hero = document.getElementById('hero'); if (hero) observer.observe(hero);
}

// --- Timeline (Security: safe DOM; Efficiency: DocumentFragment, event delegation) ---
function initTimeline() {
  const container = DOM['timeline-container'];
  const fragment = document.createDocumentFragment();
  const phaseMap = { pre: ['tag-pre','Pre-Election'], during: ['tag-during','During Election'], post: ['tag-post','Post-Election'] };
  timelineData.forEach((item, i) => {
    const el = document.createElement('div'); el.className = 'timeline-item';
    el.dataset.phase = item.phase; el.style.animationDelay = `${i * 0.1}s`;
    el.setAttribute('role','button'); el.setAttribute('aria-expanded','false');
    const [tagClass, tagLabel] = phaseMap[item.phase];
    el.appendChild(Security.createTextEl('div', item.date, 'timeline-date'));
    el.appendChild(Security.createTextEl('div', item.title, 'timeline-title'));
    el.appendChild(Security.createTextEl('div', item.desc, 'timeline-desc'));
    el.appendChild(Security.createTextEl('span', tagLabel, `timeline-tag ${tagClass}`));
    const details = document.createElement('div'); details.className = 'timeline-details';
    details.appendChild(Security.createTextEl('p', item.details));
    el.appendChild(details); fragment.appendChild(el);
  });
  container.appendChild(fragment);
  container.addEventListener('click', (e) => { const item = e.target.closest('.timeline-item'); if (item) { item.classList.toggle('expanded'); item.setAttribute('aria-expanded', item.classList.contains('expanded')); } });
  const filterContainer = document.getElementById('timeline-filter');
  filterContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn'); if (!btn) return;
    filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active');
    const filter = btn.dataset.filter;
    container.querySelectorAll('.timeline-item').forEach(item => { item.classList.toggle('hidden-item', filter !== 'all' && item.dataset.phase !== filter); });
  });
}

// --- Steps (Security: safe DOM; Efficiency: DocumentFragment, event delegation) ---
function initSteps() {
  const grid = DOM['steps-grid'];
  const fragment = document.createDocumentFragment();
  stepsData.forEach((step, i) => {
    const el = document.createElement('div'); el.className = 'step-card';
    el.setAttribute('role','button'); el.setAttribute('aria-expanded','false');
    el.appendChild(Security.createTextEl('div', i + 1, 'step-number'));
    const info = document.createElement('div'); info.className = 'step-info';
    info.appendChild(Security.createTextEl('div', step.title, 'step-title'));
    info.appendChild(Security.createTextEl('div', step.desc, 'step-desc'));
    const expanded = document.createElement('div'); expanded.className = 'step-expanded';
    expanded.appendChild(Security.createTextEl('p', step.expanded));
    info.appendChild(expanded); el.appendChild(info);
    const check = Security.createTextEl('div', '✓', 'step-check'); check.dataset.step = i;
    el.appendChild(check); fragment.appendChild(el);
  });
  grid.appendChild(fragment);
  grid.addEventListener('click', (e) => {
    const check = e.target.closest('.step-check'), card = e.target.closest('.step-card');
    if (check && card) { e.stopPropagation(); card.classList.toggle('completed'); updateProgress(grid.querySelectorAll('.step-card.completed').length); return; }
    const info = e.target.closest('.step-info');
    if (info && card) { card.classList.toggle('expanded'); card.setAttribute('aria-expanded', card.classList.contains('expanded')); }
  });
}
function updateProgress(count) {
  const total = stepsData.length, pct = (count / total) * 100;
  const fill = DOM['progress-fill'] || document.getElementById('progress-fill');
  const label = DOM['progress-label'] || document.getElementById('progress-label');
  if (fill) fill.style.width = pct + '%';
  if (label) label.textContent = `Step ${count} of ${total} completed`;
}

// --- FAQ (Security: safe DOM; Efficiency: debounced search, event delegation) ---
function initFAQ() {
  const list = DOM['faq-list'];
  const fragment = document.createDocumentFragment();
  faqData.forEach((item, i) => {
    const el = document.createElement('div'); el.className = 'faq-item'; el.id = `faq-item-${i}`;
    el.setAttribute('aria-expanded','false');
    const btn = document.createElement('button'); btn.className = 'faq-question';
    btn.setAttribute('aria-controls', `faq-answer-${i}`);
    btn.appendChild(Security.createTextEl('span', item.q));
    const arrow = document.createElementNS('http://www.w3.org/2000/svg','svg');
    arrow.setAttribute('class','faq-arrow'); arrow.setAttribute('width','20'); arrow.setAttribute('height','20');
    arrow.setAttribute('viewBox','0 0 24 24'); arrow.setAttribute('fill','none');
    arrow.setAttribute('stroke','currentColor'); arrow.setAttribute('stroke-width','2');
    const poly = document.createElementNS('http://www.w3.org/2000/svg','polyline');
    poly.setAttribute('points','6 9 12 15 18 9'); arrow.appendChild(poly); btn.appendChild(arrow);
    el.appendChild(btn);
    const answer = document.createElement('div'); answer.className = 'faq-answer'; answer.id = `faq-answer-${i}`;
    answer.appendChild(Security.createTextEl('div', item.a, 'faq-answer-inner'));
    el.appendChild(answer); fragment.appendChild(el);
  });
  list.appendChild(fragment);
  list.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq-question'); if (!btn) return;
    const fi = btn.closest('.faq-item'), wasOpen = fi.classList.contains('open');
    list.querySelectorAll('.faq-item').forEach(f => { f.classList.remove('open'); f.setAttribute('aria-expanded','false'); });
    if (!wasOpen) { fi.classList.add('open'); fi.setAttribute('aria-expanded','true'); }
  });
  const searchInput = DOM['faq-search'];
  const debouncedSearch = debounce((q) => {
    const lower = q.toLowerCase();
    list.querySelectorAll('.faq-item').forEach((item, i) => {
      item.classList.toggle('faq-hidden', !(faqData[i].q.toLowerCase().includes(lower) || faqData[i].a.toLowerCase().includes(lower)));
    });
  });
  searchInput.addEventListener('input', (e) => debouncedSearch(e.target.value));
}

// --- Quiz (Efficiency: cached DOM refs; Google Service: Firebase score saving) ---
function initQuiz() {
  let currentQ = 0, score = 0, answered = false;
  const body = DOM['quiz-body'], result = DOM['quiz-result'], nextBtn = DOM['quiz-next-btn'];
  const qNum = DOM['quiz-question-num'], qScore = DOM['quiz-score'], qProgress = DOM['quiz-progress-fill'];
  const qQuestion = DOM['quiz-question'], optContainer = DOM['quiz-options'];
  const quizFooter = document.querySelector('.quiz-footer'), quizHeader = document.querySelector('.quiz-header');

  function loadQuestion() {
    answered = false; nextBtn.disabled = true;
    const q = quizData[currentQ];
    qNum.textContent = `Question ${currentQ + 1} of ${quizData.length}`;
    qScore.textContent = `Score: ${score}`;
    qProgress.style.width = `${((currentQ) / quizData.length) * 100}%`;
    qQuestion.textContent = q.question;
    while (optContainer.firstChild) optContainer.removeChild(optContainer.firstChild);
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button'); btn.className = 'quiz-option'; btn.textContent = opt;
      btn.addEventListener('click', () => {
        if (answered) return; answered = true;
        btn.classList.add(i === q.correct ? 'correct' : 'wrong');
        if (i === q.correct) score++; else optContainer.children[q.correct].classList.add('correct');
        qScore.textContent = `Score: ${score}`; nextBtn.disabled = false;
        trackEvent('quiz','answer',q.question);
      });
      optContainer.appendChild(btn);
    });
  }
  nextBtn.addEventListener('click', () => { currentQ++; if (currentQ >= quizData.length) showResult(); else loadQuestion(); });
  function showResult() {
    body.style.display = 'none'; quizFooter.style.display = 'none'; quizHeader.style.display = 'none';
    result.classList.remove('hidden');
    const pct = (score / quizData.length) * 100;
    DOM['result-icon'].textContent = pct >= 75 ? '🏆' : pct >= 50 ? '👍' : '📚';
    DOM['result-title'].textContent = `You scored ${score} out of ${quizData.length}!`;
    DOM['result-desc'].textContent = pct >= 75 ? 'Excellent! You really know the election process!' : pct >= 50 ? 'Good job! You have a solid understanding.' : 'Keep learning! Review the timeline and steps above to improve.';
    trackEvent('quiz','completed',`score_${score}_of_${quizData.length}`);
    saveQuizScore(score, quizData.length);
  }
  DOM['quiz-restart-btn'].addEventListener('click', () => {
    currentQ = 0; score = 0; body.style.display = ''; quizFooter.style.display = ''; quizHeader.style.display = '';
    result.classList.add('hidden'); loadQuestion();
  });
  loadQuestion();
}
function saveQuizScore(s, t) { try { if (window.db) window.db.collection('quizScores').add({ score:s, total:t, pct:Math.round((s/t)*100), ts:new Date().toISOString() }); } catch(e) { console.warn('Firebase:', e.message); } }

// --- Chat (Security: input validation/sanitization; Efficiency: cached refs, event delegation) ---
function initChat() {
  const input = DOM['chat-input'], sendBtn = DOM['chat-send-btn'], messages = DOM['chat-messages'];
  function sendMessage(text) {
    if (!Security.validateChatInput(text)) return;
    const safe = text.substring(0, Security.MAX_INPUT_LENGTH).trim();
    addMessage(safe, 'user'); input.value = ''; showTyping();
    setTimeout(() => { removeTyping(); addMessage(getReply(safe), 'bot'); }, 800 + Math.random()*700);
  }
  function addMessage(content, type) {
    const div = document.createElement('div'); div.className = `chat-message ${type}-message`;
    div.appendChild(Security.createTextEl('div', type==='bot'?'🗳️':'👤', 'message-avatar'));
    const c = document.createElement('div'); c.className = 'message-content';
    const b = document.createElement('div'); b.className = 'message-bubble';
    if (type==='bot') b.innerHTML = fmtMd(content); else b.appendChild(Security.createTextEl('p', content));
    c.appendChild(b); div.appendChild(c); messages.appendChild(div); messages.scrollTop = messages.scrollHeight;
  }
  function showTyping() {
    const div = document.createElement('div'); div.className = 'chat-message bot-message typing-msg';
    div.appendChild(Security.createTextEl('div','🗳️','message-avatar'));
    const c = document.createElement('div'); c.className = 'message-content';
    const b = document.createElement('div'); b.className = 'message-bubble';
    const ind = document.createElement('div'); ind.className = 'typing-indicator';
    for (let i = 0; i < 3; i++) { const d = document.createElement('div'); d.className = 'typing-dot'; ind.appendChild(d); }
    b.appendChild(ind); c.appendChild(b); div.appendChild(c); messages.appendChild(div); messages.scrollTop = messages.scrollHeight;
  }
  function removeTyping() { const t = messages.querySelector('.typing-msg'); if (t) t.remove(); }
  function getReply(text) {
    const l = text.toLowerCase();
    if (l.includes('register')) return chatKnowledge['register'];
    if (l.includes('electoral college') || l.includes('elector')) return chatKnowledge['electoral college'];
    if (l.includes('election day') || l.includes('when is')) return chatKnowledge['election day'];
    if (l.includes('step') || l.includes('process') || l.includes('how do elections')) return chatKnowledge['steps'];
    if (l.includes('primary') || l.includes('caucus')) return chatKnowledge['primary'];
    if (l.includes('count') || l.includes('counted') || l.includes('tally')) return chatKnowledge['count'];
    if (l.includes('absentee') || l.includes('mail')) return chatKnowledge['absentee'];
    if (l.includes('swing') || l.includes('battleground')) return chatKnowledge['swing'];
    if (l.includes('inaugurat')) return chatKnowledge['inauguration'];
    return chatKnowledge['default'];
  }
  function fmtMd(text) { let h = escapeHTMLUtil(text); h = h.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>'); h = h.replace(/^• (.+)$/gm,'<li>$1</li>'); h = h.replace(/^(\d+)\. (.+)$/gm,'<li><strong>$1.</strong> $2</li>'); h = h.replace(/((?:<li>.*<\/li>\n?)+)/g,'<ul>$1</ul>'); h = h.replace(/\n\n/g,'</p><p>'); h = h.replace(/\n/g,'<br>'); return `<p>${h}</p>`; }
  sendBtn.addEventListener('click', () => sendMessage(input.value));
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendMessage(input.value); });
  input.setAttribute('maxlength', Security.MAX_INPUT_LENGTH);
  const chips = document.querySelector('.suggestion-chips');
  if (chips) chips.addEventListener('click', (e) => { const c = e.target.closest('.suggestion-chip'); if (c) sendMessage(c.dataset.question); });
}

// --- Scroll Animations ---
function initScrollAnimations() {
  const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }); }, { threshold: 0.1 });
  document.querySelectorAll('.step-card, .faq-item').forEach(el => obs.observe(el));
}

// --- Google Civic API (Security: validation, rate limiting; Google Maps integration) ---
function initCivicInfo() {
  const addrInput = DOM['civic-address'], repsBtn = DOM['civic-reps-btn'], elBtn = DOM['civic-elections-btn'];
  if (!repsBtn || !elBtn) return;
  addrInput.setAttribute('maxlength', Security.MAX_INPUT_LENGTH);
  repsBtn.addEventListener('click', () => { const a = addrInput.value.trim(); if (!Security.validateAddress(a)) { showCivicError('Enter a valid U.S. address (5+ chars).'); return; } if (!RateLimiter.check('reps')) { showCivicError('Please wait before searching again.'); return; } fetchReps(a); trackEvent('civic_api','find_reps',a); });
  elBtn.addEventListener('click', () => { const a = addrInput.value.trim(); if (!Security.validateAddress(a)) { showCivicError('Enter a valid U.S. address (5+ chars).'); return; } if (!RateLimiter.check('voter')) { showCivicError('Please wait before searching again.'); return; } fetchVoter(a); trackEvent('civic_api','election_info',a); });
  addrInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') repsBtn.click(); });
}
function showCivicLoading() { const r = DOM['civic-results']; while (r.firstChild) r.removeChild(r.firstChild); const l = document.createElement('div'); l.className = 'civic-loading'; const s = document.createElement('div'); s.className = 'civic-spinner'; l.appendChild(s); l.appendChild(Security.createTextEl('p','Looking up information...')); r.appendChild(l); }
function showCivicError(msg) { const r = DOM['civic-results']; while (r.firstChild) r.removeChild(r.firstChild); const d = document.createElement('div'); d.className = 'civic-error'; d.appendChild(Security.createTextEl('p', msg)); r.appendChild(d); }

async function fetchReps(address) { showCivicLoading(); try { const res = await fetch(`${CIVIC_API_BASE}/representatives?address=${encodeURIComponent(address)}&key=${CIVIC_API_KEY}`); if (!res.ok) throw new Error('API ' + res.status); renderReps(await res.json()); showMap(address); } catch(err) { showCivicError('Unable to fetch representatives. Check address/API key.'); console.error(err); } }
async function fetchVoter(address) { showCivicLoading(); try { const res = await fetch(`${CIVIC_API_BASE}/voterinfo?address=${encodeURIComponent(address)}&key=${CIVIC_API_KEY}`); if (!res.ok) throw new Error('API ' + res.status); renderVoter(await res.json()); showMap(address); } catch(err) { showCivicError('Unable to fetch election data.'); console.error(err); } }

function renderReps(data) { const r = DOM['civic-results']; while (r.firstChild) r.removeChild(r.firstChild); const offs = data.officials || [], ofc = data.offices || []; if (!offs.length) { showCivicError('No representatives found.'); return; } r.appendChild(Security.createTextEl('div','Your Elected Representatives','civic-section-label')); const cards = document.createElement('div'); cards.className = 'civic-cards'; ofc.forEach(o => (o.officialIndices || []).forEach(i => { const off = offs[i]; if (!off) return; const card = document.createElement('div'); card.className = 'civic-card'; card.appendChild(Security.createTextEl('div', off.name + (off.party ? ' (' + off.party + ')' : ''), 'civic-card-title')); card.appendChild(Security.createTextEl('div', o.name, 'civic-card-subtitle')); const det = document.createElement('div'); det.className = 'civic-card-detail'; if (off.phones) det.appendChild(Security.createTextEl('span','📞 ' + off.phones[0])); if (off.urls) { const a = document.createElement('a'); a.href = Security.sanitizeUrl(off.urls[0]); a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = ' 🔗 Website'; det.appendChild(a); } card.appendChild(det); cards.appendChild(card); })); r.appendChild(cards); }

function renderVoter(data) { const r = DOM['civic-results']; while (r.firstChild) r.removeChild(r.firstChild); if (data.election) { r.appendChild(Security.createTextEl('div','Upcoming Election','civic-section-label')); const cs = document.createElement('div'); cs.className = 'civic-cards'; const c = document.createElement('div'); c.className = 'civic-card'; c.appendChild(Security.createTextEl('div', data.election.name, 'civic-card-title')); c.appendChild(Security.createTextEl('div','Date: ' + data.election.electionDay,'civic-card-subtitle')); cs.appendChild(c); r.appendChild(cs); } if (data.pollingLocations && data.pollingLocations.length) { r.appendChild(Security.createTextEl('div','Polling Locations','civic-section-label')); const cs = document.createElement('div'); cs.className = 'civic-cards'; data.pollingLocations.slice(0, 3).forEach(loc => { const addr = loc.address || {}; const c = document.createElement('div'); c.className = 'civic-card'; c.appendChild(Security.createTextEl('div', addr.locationName || 'Polling Location','civic-card-title')); c.appendChild(Security.createTextEl('div','📍 ' + [addr.line1, addr.city, addr.state, addr.zip].filter(Boolean).join(', '),'civic-card-detail')); if (loc.pollingHours) c.appendChild(Security.createTextEl('div','🕐 ' + loc.pollingHours,'civic-card-detail')); cs.appendChild(c); }); r.appendChild(cs); } if (!r.children.length) showCivicError('No election info available.'); }

// Google Maps Embed (Google Service)
function showMap(address) { const mc = DOM['civic-map-container'], mi = DOM['civic-map-iframe']; if (!mc || !mi) return; mc.style.display = 'block'; mi.src = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_KEY}&q=${encodeURIComponent(address)}`; }

function escapeHTMLUtil(str) { if (!str) return ''; const d = document.createElement('div'); d.textContent = str; return d.innerHTML; }
function trackPageView() { if (typeof gtag === 'function') gtag('event','page_view',{ page_title: document.title }); }
function trackEvent(cat, act, lbl) { if (typeof gtag === 'function') gtag('event', act, { event_category: cat, event_label: lbl }); }

if (typeof module !== 'undefined' && module.exports) { module.exports = { timelineData, stepsData, faqData, quizData, chatKnowledge, updateProgress, escapeHTMLUtil, Security, RateLimiter, debounce }; }
