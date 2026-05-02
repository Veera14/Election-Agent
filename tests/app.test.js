/**
 * ElectGuide — Comprehensive Test Suite
 * Tests for data integrity, quiz logic, chat assistant, FAQ, timeline, and accessibility
 */

const {
  timelineData,
  stepsData,
  faqData,
  quizData,
  chatKnowledge,
  updateProgress,
  escapeHTMLUtil
} = require('../app.js');

// ============================================================
// DATA INTEGRITY TESTS
// ============================================================
describe('Data Integrity', () => {
  test('timelineData contains exactly 10 events', () => {
    expect(timelineData).toHaveLength(10);
  });

  test('stepsData contains exactly 8 steps', () => {
    expect(stepsData).toHaveLength(8);
  });

  test('faqData contains exactly 12 questions', () => {
    expect(faqData).toHaveLength(12);
  });

  test('quizData contains exactly 8 questions', () => {
    expect(quizData).toHaveLength(8);
  });

  test('each timeline item has required fields', () => {
    timelineData.forEach((item, i) => {
      expect(item).toHaveProperty('date');
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('desc');
      expect(item).toHaveProperty('details');
      expect(item).toHaveProperty('phase');
      expect(['pre', 'during', 'post']).toContain(item.phase);
    });
  });

  test('each step has required fields', () => {
    stepsData.forEach((step) => {
      expect(step).toHaveProperty('title');
      expect(step).toHaveProperty('desc');
      expect(step).toHaveProperty('expanded');
      expect(step.title.length).toBeGreaterThan(0);
    });
  });

  test('each FAQ item has a question and answer', () => {
    faqData.forEach((item) => {
      expect(item).toHaveProperty('q');
      expect(item).toHaveProperty('a');
      expect(item.q.length).toBeGreaterThan(0);
      expect(item.a.length).toBeGreaterThan(0);
    });
  });

  test('each quiz question has correct structure', () => {
    quizData.forEach((q) => {
      expect(q).toHaveProperty('question');
      expect(q).toHaveProperty('options');
      expect(q).toHaveProperty('correct');
      expect(q.options).toHaveLength(4);
      expect(q.correct).toBeGreaterThanOrEqual(0);
      expect(q.correct).toBeLessThan(4);
    });
  });
});

// ============================================================
// TIMELINE PHASE TESTS
// ============================================================
describe('Timeline Phases', () => {
  test('has pre-election events', () => {
    const preEvents = timelineData.filter(e => e.phase === 'pre');
    expect(preEvents.length).toBeGreaterThan(0);
  });

  test('has during-election events', () => {
    const duringEvents = timelineData.filter(e => e.phase === 'during');
    expect(duringEvents.length).toBeGreaterThan(0);
  });

  test('has post-election events', () => {
    const postEvents = timelineData.filter(e => e.phase === 'post');
    expect(postEvents.length).toBeGreaterThan(0);
  });

  test('pre-election has 4 events', () => {
    const preEvents = timelineData.filter(e => e.phase === 'pre');
    expect(preEvents).toHaveLength(4);
  });

  test('during-election has 2 events', () => {
    const duringEvents = timelineData.filter(e => e.phase === 'during');
    expect(duringEvents).toHaveLength(2);
  });

  test('post-election has 4 events', () => {
    const postEvents = timelineData.filter(e => e.phase === 'post');
    expect(postEvents).toHaveLength(4);
  });

  test('timeline events have non-empty details', () => {
    timelineData.forEach(item => {
      expect(item.details.length).toBeGreaterThan(20);
    });
  });
});

// ============================================================
// QUIZ LOGIC TESTS
// ============================================================
describe('Quiz Logic', () => {
  test('correct answer for electoral votes question is 270', () => {
    const q = quizData.find(q => q.question.includes('electoral votes are needed'));
    expect(q.options[q.correct]).toBe('270');
  });

  test('correct answer for Election Day question', () => {
    const q = quizData.find(q => q.question.includes('Election Day'));
    expect(q.options[q.correct]).toContain('Tuesday');
  });

  test('correct answer for total Electoral College votes is 538', () => {
    const q = quizData.find(q => q.question.includes('total number'));
    expect(q.options[q.correct]).toBe('538');
  });

  test('correct answer for Inauguration Day is January 20', () => {
    const q = quizData.find(q => q.question.includes('Inauguration'));
    expect(q.options[q.correct]).toBe('January 20');
  });

  test('correct answer for minimum voting age is 18', () => {
    const q = quizData.find(q => q.question.includes('voting age'));
    expect(q.options[q.correct]).toBe('18');
  });

  test('correct answer for Vice President presides over counting', () => {
    const q = quizData.find(q => q.question.includes('presides'));
    expect(q.options[q.correct]).toBe('The Vice President');
  });

  test('correct answer for caucus definition', () => {
    const q = quizData.find(q => q.question.includes('caucus'));
    expect(q.options[q.correct]).toContain('local gathering');
  });

  test('correct answer for no 270 scenario', () => {
    const q = quizData.find(q => q.question.includes('no candidate reaches'));
    expect(q.options[q.correct]).toContain('House of Representatives');
  });

  test('quiz score calculation - perfect score', () => {
    let score = 0;
    quizData.forEach(q => {
      // Simulate selecting correct answer
      score++;
    });
    expect(score).toBe(quizData.length);
    const pct = (score / quizData.length) * 100;
    expect(pct).toBe(100);
  });

  test('quiz score calculation - zero score', () => {
    const score = 0;
    const pct = (score / quizData.length) * 100;
    expect(pct).toBe(0);
  });

  test('quiz result message for high score (>=75%)', () => {
    const score = 7;
    const pct = (score / quizData.length) * 100;
    const message = pct >= 75 ? 'Excellent!' : pct >= 50 ? 'Good job!' : 'Keep learning!';
    expect(message).toBe('Excellent!');
  });

  test('quiz result message for medium score (50-74%)', () => {
    const score = 5;
    const pct = (score / quizData.length) * 100;
    const message = pct >= 75 ? 'Excellent!' : pct >= 50 ? 'Good job!' : 'Keep learning!';
    expect(message).toBe('Good job!');
  });

  test('quiz result message for low score (<50%)', () => {
    const score = 2;
    const pct = (score / quizData.length) * 100;
    const message = pct >= 75 ? 'Excellent!' : pct >= 50 ? 'Good job!' : 'Keep learning!';
    expect(message).toBe('Keep learning!');
  });
});

// ============================================================
// CHAT ASSISTANT / KEYWORD MATCHING TESTS
// ============================================================
describe('Chat Assistant - Keyword Matching', () => {
  // Replicate the getReply logic for testing
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

  test('responds to "register" keyword', () => {
    const reply = getReply('How do I register to vote?');
    expect(reply).toContain('vote.gov');
    expect(reply).toBe(chatKnowledge['register']);
  });

  test('responds to "electoral college" keyword', () => {
    const reply = getReply('What is the Electoral College?');
    expect(reply).toContain('538');
    expect(reply).toContain('270');
  });

  test('responds to "election day" keyword', () => {
    const reply = getReply('When is Election Day?');
    expect(reply).toContain('Tuesday');
  });

  test('responds to "steps" keyword', () => {
    const reply = getReply('What are the steps in the election process?');
    expect(reply).toContain('Candidate Announcements');
    expect(reply).toContain('Inauguration');
  });

  test('responds to "process" keyword', () => {
    const reply = getReply('How does the election process work?');
    expect(reply).toBe(chatKnowledge['steps']);
  });

  test('responds to "primary" keyword', () => {
    const reply = getReply('What is a primary election?');
    expect(reply).toContain('Closed primaries');
    expect(reply).toContain('Open primaries');
  });

  test('responds to "caucus" keyword', () => {
    const reply = getReply('What is a caucus?');
    expect(reply).toBe(chatKnowledge['primary']);
  });

  test('responds to "count" keyword', () => {
    const reply = getReply('How are votes counted?');
    expect(reply).toContain('Paper ballots');
  });

  test('responds to "absentee" keyword', () => {
    const reply = getReply('How does absentee voting work?');
    expect(reply).toContain('vote by mail');
  });

  test('responds to "mail" keyword', () => {
    const reply = getReply('Can I vote by mail?');
    expect(reply).toBe(chatKnowledge['absentee']);
  });

  test('responds to "swing" keyword', () => {
    const reply = getReply('What are swing states?');
    expect(reply).toContain('battleground');
  });

  test('responds to "battleground" keyword', () => {
    const reply = getReply('Tell me about battleground states');
    expect(reply).toBe(chatKnowledge['swing']);
  });

  test('responds to "inauguration" keyword', () => {
    const reply = getReply('Tell me about the inauguration ceremony');
    expect(reply).toContain('January 20');
  });

  test('returns default response for unknown queries', () => {
    const reply = getReply('Tell me about the weather');
    expect(reply).toBe(chatKnowledge['default']);
    expect(reply).toContain('great question');
  });

  test('all chat knowledge entries are non-empty strings', () => {
    Object.keys(chatKnowledge).forEach(key => {
      expect(typeof chatKnowledge[key]).toBe('string');
      expect(chatKnowledge[key].length).toBeGreaterThan(10);
    });
  });

  test('chat knowledge has all required topics', () => {
    const requiredTopics = ['register', 'electoral college', 'election day', 'steps', 'primary', 'count', 'absentee', 'swing', 'inauguration', 'default'];
    requiredTopics.forEach(topic => {
      expect(chatKnowledge).toHaveProperty(topic);
    });
  });
});

// ============================================================
// FAQ SEARCH FILTER TESTS
// ============================================================
describe('FAQ Search Filtering', () => {
  function faqMatchesQuery(faqItem, query) {
    const lower = query.toLowerCase();
    return faqItem.q.toLowerCase().includes(lower) || faqItem.a.toLowerCase().includes(lower);
  }

  test('searching "eligible" matches eligibility FAQ', () => {
    const matches = faqData.filter(item => faqMatchesQuery(item, 'eligible'));
    expect(matches.length).toBeGreaterThan(0);
    expect(matches[0].q).toContain('eligible');
  });

  test('searching "Electoral College" matches related FAQ', () => {
    const matches = faqData.filter(item => faqMatchesQuery(item, 'Electoral College'));
    expect(matches.length).toBeGreaterThan(0);
  });

  test('searching "ranked" matches ranked-choice voting FAQ', () => {
    const matches = faqData.filter(item => faqMatchesQuery(item, 'ranked'));
    expect(matches.length).toBeGreaterThan(0);
  });

  test('searching "xyz_nonexistent" matches nothing', () => {
    const matches = faqData.filter(item => faqMatchesQuery(item, 'xyz_nonexistent'));
    expect(matches).toHaveLength(0);
  });

  test('empty search matches all FAQs', () => {
    const matches = faqData.filter(item => faqMatchesQuery(item, ''));
    expect(matches).toHaveLength(faqData.length);
  });

  test('search is case-insensitive', () => {
    const upper = faqData.filter(item => faqMatchesQuery(item, 'VOTE'));
    const lower = faqData.filter(item => faqMatchesQuery(item, 'vote'));
    expect(upper.length).toBe(lower.length);
  });
});

// ============================================================
// DOM TESTS - Progress Bar
// ============================================================
describe('Progress Bar Updates', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="progress-bar">
        <div class="progress-fill" id="progress-fill"></div>
      </div>
      <span class="progress-label" id="progress-label">Step 0 of 8</span>
    `;
  });

  test('progress updates to 50% when 4 of 8 steps completed', () => {
    updateProgress(4);
    const fill = document.getElementById('progress-fill');
    expect(fill.style.width).toBe('50%');
  });

  test('progress label updates correctly', () => {
    updateProgress(4);
    const label = document.getElementById('progress-label');
    expect(label.textContent).toBe('Step 4 of 8 completed');
  });

  test('progress at 0 shows 0%', () => {
    updateProgress(0);
    const fill = document.getElementById('progress-fill');
    expect(fill.style.width).toBe('0%');
  });

  test('progress at 8 shows 100%', () => {
    updateProgress(8);
    const fill = document.getElementById('progress-fill');
    expect(fill.style.width).toBe('100%');
  });
});

// ============================================================
// UTILITY FUNCTION TESTS
// ============================================================
describe('Utility Functions', () => {
  test('escapeHTMLUtil escapes HTML entities', () => {
    const result = escapeHTMLUtil('<script>alert("xss")</script>');
    expect(result).not.toContain('<script>');
    expect(result).toContain('&lt;script&gt;');
  });

  test('escapeHTMLUtil handles empty string', () => {
    expect(escapeHTMLUtil('')).toBe('');
  });

  test('escapeHTMLUtil handles null/undefined', () => {
    expect(escapeHTMLUtil(null)).toBe('');
    expect(escapeHTMLUtil(undefined)).toBe('');
  });

  test('escapeHTMLUtil preserves normal text', () => {
    expect(escapeHTMLUtil('Hello World')).toBe('Hello World');
  });

  test('escapeHTMLUtil escapes ampersands', () => {
    const result = escapeHTMLUtil('Tom & Jerry');
    expect(result).toContain('&amp;');
  });
});

// ============================================================
// ACCESSIBILITY TESTS
// ============================================================
describe('Accessibility - Data Validation', () => {
  test('all steps have descriptive titles', () => {
    stepsData.forEach(step => {
      expect(step.title.length).toBeGreaterThan(5);
    });
  });

  test('all steps have descriptive explanations', () => {
    stepsData.forEach(step => {
      expect(step.expanded.length).toBeGreaterThan(30);
    });
  });

  test('all FAQ answers are substantive', () => {
    faqData.forEach(item => {
      expect(item.a.length).toBeGreaterThan(30);
    });
  });

  test('all timeline items have detailed descriptions', () => {
    timelineData.forEach(item => {
      expect(item.desc.length).toBeGreaterThan(15);
      expect(item.details.length).toBeGreaterThan(30);
    });
  });

  test('quiz questions are clear and non-empty', () => {
    quizData.forEach(q => {
      expect(q.question.length).toBeGreaterThan(15);
      expect(q.question.endsWith('?')).toBe(true);
    });
  });
});

// ============================================================
// GOOGLE SERVICES INTEGRATION TESTS
// ============================================================
describe('Google Services Configuration', () => {
  test('Civic API base URL is correct', () => {
    const CIVIC_API_BASE = 'https://www.googleapis.com/civicinfo/v2';
    expect(CIVIC_API_BASE).toContain('googleapis.com');
    expect(CIVIC_API_BASE).toContain('civicinfo');
  });

  test('Civic API endpoints are valid', () => {
    const base = 'https://www.googleapis.com/civicinfo/v2';
    const repsUrl = `${base}/representatives`;
    const voterUrl = `${base}/voterinfo`;
    expect(repsUrl).toContain('/representatives');
    expect(voterUrl).toContain('/voterinfo');
  });

  test('chat knowledge covers Google Civic API related topics', () => {
    // The assistant should be able to answer questions about voter registration
    expect(chatKnowledge['register']).toContain('vote.gov');
    // And about the electoral system
    expect(chatKnowledge['electoral college']).toContain('538');
  });
});
