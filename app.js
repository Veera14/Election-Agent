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

// ===== GOOGLE CIVIC INFORMATION API =====
const CIVIC_API_KEY = 'AIzaSyDemoKeyForTesting'; // Replace with your Google API key
const CIVIC_API_BASE = 'https://www.googleapis.com/civicinfo/v2';

// ===== APP LOGIC =====
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHeroStats();
  initTimeline();
  initSteps();
  initFAQ();
  initQuiz();
  initChat();
  initCivicInfo();
  initScrollAnimations();
  trackPageView();
});

// --- Navigation ---
function initNav() {
  const navbar = document.getElementById('main-nav');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveNav();
  });

  toggle.addEventListener('click', () => links.classList.toggle('open'));
  navLinks.forEach(link => link.addEventListener('click', () => links.classList.remove('open')));
}

function updateActiveNav() {
  const sections = ['hero', 'timeline', 'civic', 'steps', 'faq', 'quiz', 'assistant'];
  let current = 'hero';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 200) current = id;
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === current);
  });
}

// --- Hero Stats Counter ---
function initHeroStats() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.stat-number').forEach(el => {
          const target = +el.dataset.count;
          let current = 0;
          const step = Math.ceil(target / 30);
          const timer = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            el.textContent = current;
          }, 40);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });
  const hero = document.getElementById('hero');
  if (hero) observer.observe(hero);
}

// --- Timeline ---
function initTimeline() {
  const container = document.getElementById('timeline-container');
  timelineData.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = `timeline-item`;
    el.dataset.phase = item.phase;
    el.style.animationDelay = `${i * 0.1}s`;
    const tagClass = item.phase === 'pre' ? 'tag-pre' : item.phase === 'during' ? 'tag-during' : 'tag-post';
    const tagLabel = item.phase === 'pre' ? 'Pre-Election' : item.phase === 'during' ? 'During Election' : 'Post-Election';
    el.innerHTML = `
      <div class="timeline-date">${item.date}</div>
      <div class="timeline-title">${item.title}</div>
      <div class="timeline-desc">${item.desc}</div>
      <span class="timeline-tag ${tagClass}">${tagLabel}</span>
      <div class="timeline-details"><p>${item.details}</p></div>
    `;
    el.addEventListener('click', () => el.classList.toggle('expanded'));
    container.appendChild(el);
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.timeline-item').forEach(item => {
        const show = filter === 'all' || item.dataset.phase === filter;
        item.classList.toggle('hidden-item', !show);
      });
    });
  });
}

// --- Steps ---
function initSteps() {
  const grid = document.getElementById('steps-grid');
  let completedCount = 0;

  stepsData.forEach((step, i) => {
    const el = document.createElement('div');
    el.className = 'step-card';
    el.innerHTML = `
      <div class="step-number">${i + 1}</div>
      <div class="step-info">
        <div class="step-title">${step.title}</div>
        <div class="step-desc">${step.desc}</div>
        <div class="step-expanded"><p>${step.expanded}</p></div>
      </div>
      <div class="step-check" data-step="${i}">✓</div>
    `;
    el.querySelector('.step-info').addEventListener('click', () => el.classList.toggle('expanded'));
    el.querySelector('.step-check').addEventListener('click', (e) => {
      e.stopPropagation();
      el.classList.toggle('completed');
      completedCount = document.querySelectorAll('.step-card.completed').length;
      updateProgress(completedCount);
    });
    grid.appendChild(el);
  });
}

function updateProgress(count) {
  const total = stepsData.length;
  const pct = (count / total) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-label').textContent = `Step ${count} of ${total} completed`;
}

// --- FAQ ---
function initFAQ() {
  const list = document.getElementById('faq-list');
  faqData.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'faq-item';
    el.id = `faq-item-${i}`;
    el.innerHTML = `
      <button class="faq-question">
        <span>${item.q}</span>
        <svg class="faq-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="faq-answer"><div class="faq-answer-inner">${item.a}</div></div>
    `;
    el.querySelector('.faq-question').addEventListener('click', () => {
      const wasOpen = el.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('open'));
      if (!wasOpen) el.classList.add('open');
    });
    list.appendChild(el);
  });

  document.getElementById('faq-search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll('.faq-item').forEach((item, i) => {
      const match = faqData[i].q.toLowerCase().includes(query) || faqData[i].a.toLowerCase().includes(query);
      item.classList.toggle('faq-hidden', !match);
    });
  });
}

// --- Quiz ---
function initQuiz() {
  let currentQ = 0, score = 0, answered = false;
  const body = document.getElementById('quiz-body');
  const result = document.getElementById('quiz-result');
  const nextBtn = document.getElementById('quiz-next-btn');

  function loadQuestion() {
    answered = false;
    nextBtn.disabled = true;
    const q = quizData[currentQ];
    document.getElementById('quiz-question-num').textContent = `Question ${currentQ + 1} of ${quizData.length}`;
    document.getElementById('quiz-score').textContent = `Score: ${score}`;
    document.getElementById('quiz-progress-fill').style.width = `${((currentQ) / quizData.length) * 100}%`;
    document.getElementById('quiz-question').textContent = q.question;
    const optContainer = document.getElementById('quiz-options');
    optContainer.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        btn.classList.add(i === q.correct ? 'correct' : 'wrong');
        if (i === q.correct) score++;
        else optContainer.children[q.correct].classList.add('correct');
        document.getElementById('quiz-score').textContent = `Score: ${score}`;
        nextBtn.disabled = false;
      });
      optContainer.appendChild(btn);
    });
  }

  nextBtn.addEventListener('click', () => {
    currentQ++;
    if (currentQ >= quizData.length) showResult();
    else loadQuestion();
  });

  function showResult() {
    body.style.display = 'none';
    document.querySelector('.quiz-footer').style.display = 'none';
    document.querySelector('.quiz-header').style.display = 'none';
    result.classList.remove('hidden');
    const pct = (score / quizData.length) * 100;
    document.getElementById('result-icon').textContent = pct >= 75 ? '🏆' : pct >= 50 ? '👍' : '📚';
    document.getElementById('result-title').textContent = `You scored ${score} out of ${quizData.length}!`;
    document.getElementById('result-desc').textContent = pct >= 75 ? 'Excellent! You really know the election process!' : pct >= 50 ? 'Good job! You have a solid understanding.' : 'Keep learning! Review the timeline and steps above to improve.';
  }

  document.getElementById('quiz-restart-btn').addEventListener('click', () => {
    currentQ = 0; score = 0;
    body.style.display = '';
    document.querySelector('.quiz-footer').style.display = '';
    document.querySelector('.quiz-header').style.display = '';
    result.classList.add('hidden');
    loadQuestion();
  });

  loadQuestion();
}

// --- Chat Assistant ---
function initChat() {
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send-btn');
  const messages = document.getElementById('chat-messages');

  function sendMessage(text) {
    if (!text.trim()) return;
    addMessage(text, 'user');
    input.value = '';
    showTyping();
    setTimeout(() => {
      removeTyping();
      const reply = getReply(text);
      addMessage(reply, 'bot');
    }, 800 + Math.random() * 700);
  }

  function addMessage(content, type) {
    const div = document.createElement('div');
    div.className = `chat-message ${type}-message`;
    const avatar = type === 'bot' ? '🗳️' : '👤';
    const formatted = type === 'bot' ? formatMarkdown(content) : `<p>${escapeHTML(content)}</p>`;
    div.innerHTML = `<div class="message-avatar">${avatar}</div><div class="message-content"><div class="message-bubble">${formatted}</div></div>`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTyping() {
    const div = document.createElement('div');
    div.className = 'chat-message bot-message typing-msg';
    div.innerHTML = `<div class="message-avatar">🗳️</div><div class="message-content"><div class="message-bubble"><div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div></div>`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function removeTyping() {
    const t = messages.querySelector('.typing-msg');
    if (t) t.remove();
  }

  function getReply(text) {
    const lower = text.toLowerCase();
    if (lower.includes('register')) return chatKnowledge['register'];
    if (lower.includes('electoral college') || lower.includes('elector')) return chatKnowledge['electoral college'];
    if (lower.includes('election day') || lower.includes('when is')) return chatKnowledge['election day'];
    if (lower.includes('step') || lower.includes('process') || lower.includes('how do elections')) return chatKnowledge['steps'];
    if (lower.includes('primary') || lower.includes('caucus')) return chatKnowledge['primary'];
    if (lower.includes('count') || lower.includes('counted') || lower.includes('tally')) return chatKnowledge['count'];
    if (lower.includes('absentee') || lower.includes('mail')) return chatKnowledge['absentee'];
    if (lower.includes('swing') || lower.includes('battleground')) return chatKnowledge['swing'];
    if (lower.includes('inaugurat')) return chatKnowledge['inauguration'];
    return chatKnowledge['default'];
  }

  function formatMarkdown(text) {
    let html = escapeHTML(text);
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/^• (.+)$/gm, '<li>$1</li>');
    html = html.replace(/^(\d+)\. (.+)$/gm, '<li><strong>$1.</strong> $2</li>');
    html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/\n/g, '<br>');
    return `<p>${html}</p>`;
  }

  function escapeHTML(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  sendBtn.addEventListener('click', () => sendMessage(input.value));
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendMessage(input.value); });

  document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => sendMessage(chip.dataset.question));
  });
}

// --- Scroll Animations ---
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.step-card, .faq-item').forEach(el => observer.observe(el));
}

// --- Google Civic Information API ---
function initCivicInfo() {
  const addressInput = document.getElementById('civic-address');
  const repsBtn = document.getElementById('civic-reps-btn');
  const electionsBtn = document.getElementById('civic-elections-btn');
  const resultsDiv = document.getElementById('civic-results');

  if (!repsBtn || !electionsBtn) return;

  repsBtn.addEventListener('click', () => {
    const address = addressInput.value.trim();
    if (!address) { showCivicError('Please enter a valid U.S. address.'); return; }
    fetchRepresentatives(address);
    trackEvent('civic_api', 'find_representatives', address);
  });

  electionsBtn.addEventListener('click', () => {
    const address = addressInput.value.trim();
    if (!address) { showCivicError('Please enter a valid U.S. address.'); return; }
    fetchVoterInfo(address);
    trackEvent('civic_api', 'election_info', address);
  });

  addressInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') repsBtn.click();
  });
}

function showCivicLoading() {
  const resultsDiv = document.getElementById('civic-results');
  resultsDiv.innerHTML = `<div class="civic-loading"><div class="civic-spinner"></div><p style="color:var(--text-muted)">Looking up information...</p></div>`;
}

function showCivicError(msg) {
  const resultsDiv = document.getElementById('civic-results');
  resultsDiv.innerHTML = `<div class="civic-error"><p>${msg}</p></div>`;
}

async function fetchRepresentatives(address) {
  showCivicLoading();
  const resultsDiv = document.getElementById('civic-results');
  try {
    const url = `${CIVIC_API_BASE}/representatives?address=${encodeURIComponent(address)}&key=${CIVIC_API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    renderRepresentatives(data);
  } catch (err) {
    showCivicError('Unable to fetch representative data. Please check your address and try again. Make sure you have a valid Google Civic API key configured.');
    console.error('Civic API Error:', err);
  }
}

async function fetchVoterInfo(address) {
  showCivicLoading();
  const resultsDiv = document.getElementById('civic-results');
  try {
    const url = `${CIVIC_API_BASE}/voterinfo?address=${encodeURIComponent(address)}&key=${CIVIC_API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    renderVoterInfo(data);
  } catch (err) {
    showCivicError('Unable to fetch election data. This may be because there are no upcoming elections for your area, or the API key needs to be configured.');
    console.error('Civic API Error:', err);
  }
}

function renderRepresentatives(data) {
  const resultsDiv = document.getElementById('civic-results');
  const officials = data.officials || [];
  const offices = data.offices || [];

  if (officials.length === 0) {
    showCivicError('No representative data found for this address.');
    return;
  }

  let html = `<div class="civic-section-label">Your Elected Representatives</div><div class="civic-cards">`;
  offices.forEach(office => {
    const indices = office.officialIndices || [];
    indices.forEach(idx => {
      const official = officials[idx];
      if (!official) return;
      const party = official.party ? `(${official.party})` : '';
      const phone = official.phones ? official.phones[0] : '';
      const url = official.urls ? official.urls[0] : '';
      html += `
        <div class="civic-card">
          <div class="civic-card-title">${escapeHTMLUtil(official.name)} ${party}</div>
          <div class="civic-card-subtitle">${escapeHTMLUtil(office.name)}</div>
          <div class="civic-card-detail">
            ${phone ? `📞 ${escapeHTMLUtil(phone)}<br>` : ''}
            ${url ? `🔗 <a href="${escapeHTMLUtil(url)}" target="_blank" rel="noopener">Official Website</a>` : ''}
          </div>
        </div>`;
    });
  });
  html += '</div>';
  resultsDiv.innerHTML = html;
}

function renderVoterInfo(data) {
  const resultsDiv = document.getElementById('civic-results');
  let html = '';

  if (data.election) {
    html += `<div class="civic-section-label">Upcoming Election</div>
      <div class="civic-cards"><div class="civic-card">
        <div class="civic-card-title">${escapeHTMLUtil(data.election.name)}</div>
        <div class="civic-card-subtitle">Date: ${escapeHTMLUtil(data.election.electionDay)}</div>
      </div></div>`;
  }

  if (data.pollingLocations && data.pollingLocations.length > 0) {
    html += `<div class="civic-section-label" style="margin-top:24px">Polling Locations</div><div class="civic-cards">`;
    data.pollingLocations.slice(0, 3).forEach(loc => {
      const addr = loc.address || {};
      const line = [addr.line1, addr.city, addr.state, addr.zip].filter(Boolean).join(', ');
      html += `<div class="civic-card">
        <div class="civic-card-title">${escapeHTMLUtil(loc.address.locationName || 'Polling Location')}</div>
        <div class="civic-card-detail">📍 ${escapeHTMLUtil(line)}</div>
        ${loc.pollingHours ? `<div class="civic-card-detail">🕐 ${escapeHTMLUtil(loc.pollingHours)}</div>` : ''}
      </div>`;
    });
    html += '</div>';
  }

  if (!html) {
    showCivicError('No election information is currently available for this address.');
    return;
  }
  resultsDiv.innerHTML = html;
}

// --- Utility: HTML escaping (shared) ---
function escapeHTMLUtil(str) {
  if (!str) return '';
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

// --- Google Analytics Event Tracking ---
function trackPageView() {
  if (typeof gtag === 'function') {
    gtag('event', 'page_view', { page_title: document.title });
  }
}

function trackEvent(category, action, label) {
  if (typeof gtag === 'function') {
    gtag('event', action, { event_category: category, event_label: label });
  }
}

// --- Module Exports for Testing ---
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    timelineData,
    stepsData,
    faqData,
    quizData,
    chatKnowledge,
    updateProgress,
    escapeHTMLUtil
  };
}
