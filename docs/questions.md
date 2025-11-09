# QUESTIONS - Tomorrow's Letter

## 📋 FREE TIER (5 Questions)

### Question 1
**Question:** "What's your biggest struggle right now?"

**Why this matters:**  
Opening question. Sets vulnerability tone. Identifies pain point.

**Prompting guidance:**  
- Minimum 20 characters required
- Encourage elaboration if too short: "Tell me more..."
- If they write "I don't know" → "What feels hard, even if you can't name it?"

**Expected answers:**
- Career stuck ("Trapped in job I hate")
- Relationships ("Lonely even when with people")
- Identity ("Don't know who I am anymore")
- Health ("No energy, can't get motivated")
- Purpose ("Life feels meaningless")

---

### Question 2
**Question:** "What are you most afraid of?"

**Why this matters:**  
Fear mapping. Shows what they're protecting/avoiding.

**Prompting guidance:**
- Push for specificity: "What specifically scares you about that?"
- Common surface answers: "failure" → dig deeper
- Real fears: abandonment, irrelevance, wasting life, being ordinary

**Expected answers:**
- Existential ("Wasted my life")
- Social ("Being alone forever")
- Performance ("I'm not good enough")
- Loss ("Losing someone I love")
- Self ("Becoming like [person I don't want to be]")

---

### Question 3
**Question:** "What do you want but don't believe you can have?"

**Why this matters:**  
Reveals desire vs limiting belief gap. Core wound often here.

**Prompting guidance:**
- Don't judge the "don't believe" part
- Validate both wanting AND the doubt
- Often tied to worthiness

**Expected answers:**
- Love/connection ("A relationship where I'm fully accepted")
- Success ("Financial freedom without selling soul")
- Creative ("Make art/music and be taken seriously")
- Freedom ("Live on my own terms")
- Peace ("Feel okay being me")

---

### Question 4
**Question:** "Who do you want to become?"

**Why this matters:**  
Identity work. Future self visioning. Hope excavation.

**Prompting guidance:**
- If vague ("happy", "successful") → ask for specifics
- Better: "What would that person's day look like?"
- Focus on character, not achievement

**Expected answers:**
- Quality-based ("Someone confident/kind/honest")
- Role-based ("Good parent/partner/friend")
- Free-based ("Someone who doesn't care what others think")
- Integrated ("All parts of me working together")
- Specific person ("Like [admired person] but my own version")

---

### Question 5
**Question:** "If you were wiser, what would you tell yourself?"

**Why this matters:**  
Meta-question. Activates inner mentor. Often reveals what they already know but won't say.

**Prompting guidance:**
- This is where Free tier letter is generated from
- Synthesize all 4 previous answers
- Tone: Compassionate wisdom, not tough love

**Expected answers:**
- Permission ("It's okay to...")
- Truth ("You already know...")
- Perspective ("This won't matter in 5 years")
- Self-compassion ("Be kinder to yourself")
- Action ("Stop waiting for...")

---

## 🔐 PREMIUM TIER (+5 Questions)

*User sees paywall here: "Want to go deeper? Unlock 5 more questions + extended letter"*

---

### Question 6
**Question:** "What relationship patterns keep repeating?"

**Why this matters:**  
Pattern recognition. Attachment work. Often eye-opening.

**Prompting guidance:**
- Look for cycles across multiple relationships
- Not blaming others - observing dynamics
- Common: abandonment, control, people-pleasing, walls

**Expected answers:**
- "I choose unavailable people"
- "I give too much, get resentful"
- "I push people away when they get close"
- "I become whoever they need me to be"
- "I stay too long in bad situations"

---

### Question 7
**Question:** "What are you avoiding that you know you need to face?"

**Why this matters:**  
Shadow confrontation. The thing they know but won't say.

**Prompting guidance:**
- Acknowledge avoidance is protective (not weak)
- Differentiate "facing" from "fixing"
- Sometimes just naming it is the work

**Expected answers:**
- Difficult conversation ("Need to tell [person] truth")
- Career change ("Need to quit/start/pivot")
- Health issue ("Need to see doctor/therapist")
- Grief ("Need to let go of [person/dream]")
- Addiction ("Need to admit I have a problem")

---

### Question 8
**Question:** "Where are you lying to yourself?"

**Why this matters:**  
Self-deception reveal. Hardest question. Handle with care.

**Prompting guidance:**
- This is brutal honesty territory
- Frame as self-protection, not character flaw
- Often tied to what they're not ready to admit

**Expected answers:**
- "I say I'm fine but I'm not"
- "I pretend I don't care but I do"
- "I tell myself [relationship/job] will get better"
- "I act like I have time but I'm running out"
- "I say I want X but really want Y"

---

### Question 9
**Question:** "What would you do if you weren't afraid of judgment?"

**Why this matters:**  
Strips social conditioning. Reveals authentic desire.

**Prompting guidance:**
- Remove external voices (parents, society, friends)
- "If you knew no one would judge..." → what changes?
- Permission to want unconventional things

**Expected answers:**
- Career ("Creative work, not prestigious job")
- Lifestyle ("Simpler/weirder/nomadic life")
- Identity ("Come out/transition/radically change")
- Expression ("Make art/write/perform")
- Relationships ("Leave/stay/try something different")

---

### Question 10
**Question:** "What does 'home' mean to you now, and what should it mean?"

**Why this matters:**  
Belonging work. Emotional grounding. Often inherited definition vs authentic need.

**Prompting guidance:**
- "Home" = place where you can be yourself
- Current definition often family/culture imposed
- What would HOME feel like if they designed it?

**Expected answers:**
- Physical ("Place of my own/specific location")
- Emotional ("Feeling safe/accepted")
- Relational ("People who see me")
- Internal ("Peace within myself")
- Future ("Something I haven't found yet")

---

## 🎯 QUESTION FLOW UX

### Presentation:
- One question at a time (full screen)
- Question fades in (2s animation)
- Large, centered text (text-2xl, display font)
- Generous whitespace
- Textarea below (typewriter font)
- "Continue" button appears after 20+ chars typed

### Progress:
- Subtle indicator at top (1/10, 2/10...)
- No pressure, no timer
- Can go back to previous questions
- Autosave to localStorage every 5 seconds

### Transitions:
- Fade out current question (1s)
- Fade in next question (2s)
- Slow, deliberate, meditative pace

### Premium Gate (after Q5):
- Modal overlay (not full screen)
- "Want to go deeper?"
- Show blurred preview of Q6-10
- Two CTAs: "Unlock Premium ($19)" / "Continue with Free"
- If Free → Generate letter from Q1-5
- If Premium → Continue to Q6-10 after payment

---

## 💬 HELP TEXT (for each question)

**If user stalls on a question:**

Show subtle help text below input:
- Q1: "Start with the first thing that comes to mind"
- Q2: "What keeps you up at night?"
- Q3: "There's no wrong answer here"
- Q4: "Think about who you admire and why"
- Q5: "What do you wish someone would tell you?"

**If answer too short (<20 chars):**

"Tell me more... (this is important)"

**If user types "I don't know":**

Q1: "What feels hard, even if you can't name it?"
Q2: "If you had to guess, what would you say?"
Q3: "What do you find yourself daydreaming about?"
Q4: "Who do you *not* want to become?"
Q5: "What would your best friend tell you?"

---

## 🧪 TESTING SCENARIOS

Before launch, test question flow with these personas:

**Test 1: The Avoider**
- Gives short, vague answers
- Says "I don't know" a lot
- System should encourage elaboration gently

**Test 2: The Over-sharer**
- Writes paragraphs for each question
- Very emotionally open
- System should affirm + guide to brevity if needed

**Test 3: The Cynic**
- Sarcastic/defensive answers
- "This won't help anyway"
- Letter should match their tone (dark humor OK)

**Test 4: The Perfectionist**
- Edits answers multiple times
- Worried about "right" answer
- Help text: "There's no perfect answer, just your truth"

**Test 5: The Crisis**
- Mentions self-harm, suicide, abuse
- System must handle with care + provide resources

---

## ✅ QUESTION CHECKLIST

Before launch:
- [ ] All 10 questions display correctly
- [ ] Progress indicator works (1/10 → 10/10)
- [ ] Autosave to localStorage every 5s
- [ ] Can navigate back to previous questions
- [ ] Min character validation (20+ chars)
- [ ] Help text appears on long pauses
- [ ] Premium gate shows after Q5
- [ ] Free flow generates letter from Q1-5
- [ ] Premium flow continues to Q6-10 after payment
- [ ] Mobile responsive (test on real device)
- [ ] Keyboard navigation works (Tab, Enter)
- [ ] Answers persist on page refresh
