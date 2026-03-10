---
title: "Day 13: Injecting Data Payloads (Relative Clauses)"
sidebar_position: 13
---

# Day 13: Injecting Data Payloads (Relative Clauses)
**Objective:** Learn how to attach descriptive metadata tags directly to Nouns using relative pronouns so you can identify exact variables without starting a new sentence.

## Part 1: Standard Library Upgrade (Pre-Compiled Blocks)
*Note: Memorize these as complete, unbreakable blocks of code.*

### A. The Corporate API 
| The Block | The Logic | Execution |
| :--- | :--- | :--- |
| **Scope out** | To carefully assess or investigate a situation before acting. | "I need to **scope out** the new React documentation." |
| **Bring up** | To introduce a topic into a conversation or meeting. | "I will **bring up** the database issue during the sync." |

### B. The Casual API 
| The Block | The Logic | Execution |
| :--- | :--- | :--- |
| **Check out** | To look at or explore something interesting. | "We should **check out** that new cafe in Brookefield." |
| **Run out of** | To consume your entire supply of an item. | "I need to buy pink salt; we completely **ran out of** it." |

---

## Part 2: The System Boundaries (The Data Tagging Matrix)

When you want to attach metadata to a Noun, you must choose the correct "Routing Tag." The tag you use depends entirely on the **Data Type** of the Noun you are modifying.

| The Routing Tag | Target Data Type | Execution Example |
| :--- | :--- | :--- |
| **Who** | Human Variables | "The developer **who** wrote this Python script is brilliant." |
| **Which** | Inanimate / Tech Variables | "The server, **which** we rebooted yesterday, is crashing again." |
| **That** | Universal Fallback (Human or Tech) | "The Lenovo workstation **that** I bought is incredibly fast." |
| **Whose** | Foreign Key (Ownership/Possession) | "The client **whose** project we are scoping out is very strict." |

---

## Part 3: System Warnings & Deprecated Code
*Note: These are the two most common syntax crashes when injecting metadata.*

**1. The Double Variable Crash (Duplicate Pointers):**
When you use a Routing Tag (`that`, `which`, `who`), it *replaces* the pronoun (`it`, `him`, `them`). You cannot use both, or the system will try to assign two values to the same slot and crash.
* *Fatal Error:* "The Python script **that** I wrote **it** is running smoothly."
* *Clean Code:* "The Python script **that** I wrote is running smoothly."

**2. The Essential vs. Non-Essential Commas (The 'That' Restriction):**
* **Essential Metadata:** Information required to identify the variable. Do *not* use commas. You can use `That`, `Who`, or `Which`. (*"The laptop that I bought yesterday is fast."*)
* **Non-Essential Metadata:** Extra "bonus" information. You MUST isolate it with commas. **Crucial Rule:** You can NEVER use `That` inside commas. You must use `Which` (for tech) or `Who` (for humans).
* *Fatal Error:* "My MacBook Pro, **that** is from 2019, needs a battery replacement."
* *Clean Code:* "My MacBook Pro, **which** is from 2019, needs a battery replacement."

---

## Part 4: Interactive Code Refactoring (25 Questions)
*Instructions for the student: Refactor the sentences by choosing the correct Routing Tag (Who, Which, That, Whose). Fix any Double Variable crashes, apply the correct comma rules, and integrate the new Standard Library vocabulary where instructed. Write your clean code directly below each corrupted sentence.*

**1. (Corporate):** "The project manager which called the meeting wants to (introduce) the new budget."
*(Inject Standard Library API)*

**2. (Casual):** "The overnight oats who I made them last night are in the fridge."
*(Fix the Routing Tag and the Double Variable Crash)*

**3. (Corporate):** "We need to (investigate) the API rate limits that they are causing the timeout."
*(Inject Standard Library API and fix the Double Variable Crash)*

**4. (Casual - Bug Fix):** "My sister that works at a large MNC needs help with English grammar."
*(Fix the Non-Essential Comma rule—she only has one sister, so this is bonus metadata!)*

**5. (Corporate):** "The Lenovo ThinkStation, that I use for heavy Python compiling, is incredibly powerful."
*(Apply the Non-Essential Comma rule for the Routing Tag)*

**6. (Casual):** "I need to go to the store because I (have zero left) the high-protein paneer."
*(Inject Standard Library API)*

**7. (Corporate):** "The junior developer, who he pushed the broken code, is fixing the errors."
*(Fix the Double Variable Crash)*

**8. (Corporate):** "The client who his website we are building wants to change the wireframes."
*(Apply the Foreign Key / Ownership Routing Tag)*

**9. (Casual):** "I want to (look at) the new gym in Brookefield which it opened last week."
*(Inject Standard Library API and fix the Double Variable)*

**10. (Corporate):** "The React components that I scoped them out yesterday are ready for deployment."

**11. (Casual - Bug Fix):** "The pink salt who I put in my pre-workout drink makes it taste better."

**12. (Corporate):** "My manager, that is currently on vacation, asked me to hold off on the launch."

**13. (Casual):** "I ran out of the chia seeds which I usually put them in my breakfast."

**14. (Corporate):** "The software engineer which wrote the documentation is out sick today."

**15. (Corporate - Bug Fix):** "The new Macbook Pro, that has the M4 chip, is arriving on March 1st."

**16. (Casual):** "The friend who her trip we are planning wants to go to Europe."
*(Apply the Foreign Key / Ownership Routing Tag)*

**17. (Corporate):** "Please bring up the database migration who failed last night."

**18. (Casual):** "The traffic in Brookefield, that is always terrible at 6 PM, made me late."

**19. (Corporate):** "The freelancer whose code we reviewed it did a fantastic job."
*(Fix the Double Variable Crash hidden inside the Ownership clause)*

**20. (Casual):** "I checked out the new recipe that you sent it to me."

**21. (Corporate):** "The team needs to scope out the new requirements that they were sent by Capgemini."

**22. (Casual):** "The treadmill which I use it for my cardio routine is broken."

**23. (Corporate):** "I will bring up the server logs, that show a massive memory leak."
*(Fix the Non-Essential Comma tag)*

**24. (Casual):** "My 2019 laptop that I use for freelance work is starting to slow down."
*(Since she only has one 2019 laptop, this is non-essential metadata. Add the commas and fix the tag!)*

**25. (Corporate/Casual - Full Refactor):** "The lead architect, that his job is to scope out the systems, brought up a bug which it crashes the Python script."
*(Fix all 3 Routing errors)*