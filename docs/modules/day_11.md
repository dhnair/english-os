---
title: "Day 11: Exception Handling (Contrast & Concession)"
sidebar_position: 11
---

# Day 11: Exception Handling (Contrast & Concession)
**Objective:** Master the logic routers used to connect two contrasting or opposing pieces of data. 

## Part 1: Standard Library Upgrade (Pre-Compiled Blocks)
*Instructor Note: Memorize these as complete, unbreakable blocks of code.*

### A. The Corporate API 
| The Block | The Logic | Execution |
| :--- | :--- | :--- |
| **Push back (on)** | To politely resist or challenge a plan or deadline. | "The client wanted it tomorrow, but I had to **push back on** the timeline." |
| **Weigh in (on)** | To give your professional opinion or input on a topic. | "Before we deploy, I want the lead architect to **weigh in on** this." |

### B. The Casual API 
| The Block | The Logic | Execution |
| :--- | :--- | :--- |
| **Turn out** | How something ends or resolves, often unexpectedly. | "I thought the paneer would be too spicy, but it **turned out** perfectly." |
| **Stick to** | To continue doing something without changing the plan. | "Even when I am busy, I try to **stick to** my high-protein diet." |

---

## Part 2: The System Boundaries (The Exception Matrix)


There are three main "routers" for exception handling. The router you choose strictly dictates the **Data Type** that must follow it. 

| Router Type | The Keywords | Allowed Data Payload | Execution Example |
| :--- | :--- | :--- | :--- |
| **Type 1: Full Clause** | `Although`, `Even though`, `Though` | Requires a full block: `[Subject + Verb]` | "**Although the server crashed**, no data was lost." |
| **Type 2: Data Object** | `Despite`, `In spite of` | Requires a Noun or a Gerund (`V4 -ing`) | "**Despite the crash**, no data was lost." (Noun) <br /> "**Despite crashing**, it rebooted fast." (Gerund) |
| **Type 3: Hard Stop** | `However`, `On the other hand`| Starts a brand new sentence/block. | "The server crashed. **However**, no data was lost." |

> **Architectural Note for Type 2:** This is exactly why we learned Type Casting (Gerunds) in Day 8! If you want to use an action after `Despite`, you CANNOT use a standard verb. You must cast it into a Gerund (`-ing`).

---

## Part 3: System Warnings & Deprecated Code
*Instructor Note: These are the two most common fatal errors non-native speakers make when routing exceptions.*

**1. The "Despite Of" Crash:**
The keyword `Despite` is a standalone router. You NEVER attach the preposition "of" to it. (You can only use "of" with `In spite of`).
* *Fatal Error:* "**Despite of** the traffic in Brookefield, I arrived on time."
* *Clean Code:* "**Despite** the traffic in Brookefield, I arrived on time."

**2. The Double Router Loop:**
You only need ONE router to connect two clauses. If you use `Although` at the beginning, you cannot put `But` in the middle. The system will get stuck in an infinite routing loop.
* *Fatal Error:* "**Although** the Macbook is old, **but** it runs Python perfectly."
* *Clean Code:* "**Although** the Macbook is old, it runs Python perfectly."

---

## Part 4: Interactive Code Refactoring (25 Questions)
*Instructions for the student: Refactor the sentences by choosing the correct exception router and ensuring the data payloads match. Fix any syntax errors, and integrate the new Standard Library vocabulary where instructed. Write your clean code directly below each corrupted sentence.*

**1. (Corporate):** "Despite of the tight deadline, the team delivered the React project on time."

**2. (Casual):** "Although my heavy workload, I will stick to my workout routine this evening."
*(Apply Type 2: Data Object)*

**3. (Corporate):** "We should push back on the budget cuts. Although, we need to be polite about it."
*(Fix the punctuation/router type)*

**4. (Casual - Bug Fix):** "In spite of I woke up late, I managed to whip up a pre-workout drink."

**5. (Corporate):** "Although the client weighed in on the design, but we decided to stick to the original plan."

**6. (Corporate - Type Casting):** "Despite (have) a broken laptop, the freelancer finished the Python script."
*(Cast the verb into the correct data type)*

**7. (Casual):** "The weather was terrible. In spite of, the trip turned out to be amazing."
*(Apply Type 3: Hard Stop)*

**8. (Corporate):** "Even though the senior developer's absence, we pushed the code."
*(Apply Type 1: Full Clause)*

**9. (Casual):** "I bought the Lenovo workstation despite of it was very expensive."

**10. (Corporate):** "Before we sign off on this, we need the security team to (give their opinion)."
*(Inject Standard Library API)*

**11. (Casual - Type Casting):** "Despite (eat) 100g of protein every day, he still feels hungry."
*(Cast the verb correctly)*

**12. (Corporate):** "The CEO wants to launch tomorrow. I think we need to (resist the plan) because the server is unstable."
*(Inject Standard Library API)*

**13. (Casual):** "Although she had never cooked paneer before, but it turned out delicious."

**14. (Corporate):** "In spite of the bug was reported yesterday, no one has escalated it yet."

**15. (Corporate):** "The deployment failed. Even though, the team didn't panic."
*(Fix the router type for a Hard Stop)*

**16. (Casual):** "I wanted to buy the M4 Macbook. On the other hand, my 2019 model is still working well."
*(Combine into one sentence using a Type 1 router)*

**17. (Corporate):** "Despite of the new API rate limits, the app is running smoothly."

**18. (Casual):** "I tried to teach my sister English grammar. However her busy schedule at the MNC made it difficult."
*(Apply Type 2: Data Object)*

**19. (Corporate - Type Casting):** "In spite of (work) for a massive company like Capgemini, he prefers a quiet office."

**20. (Casual):** "I thought the overnight oats would be boring, but they (ended up) being great."
*(Inject Standard Library API)*

**21. (Corporate):** "Although we lost the client data, but the backups were restored immediately."

**22. (Casual):** "Despite the rain. I went for a walk."
*(Fix the punctuation/clause connection)*

**23. (Corporate):** "The manager refused to weigh in on the issue despite he knew the answer."

**24. (Casual):** "It is hard to (maintain) a workout routine when you travel."
*(Inject Standard Library API)*

**25. (Corporate/Casual - Full Refactor):** "Despite of I was hired to write Python, they asked me to weigh in on the React frontend. Although it wasn't my job, but I did it anyway."
*(Fix all 3 exception handling errors)*