---
draft: true
title: "Answer Key: Day 7 Integration Exam 1.0 (Phases 2-5 System Audit)"
sidebar_position: 7
---

# Answer Key: Day 7 Integration Exam 1.0 (Phases 2-5 System Audit)

## Part 1: The Data Types & Pointers (Phase 2)

**1.**
* **Clean Code:** "The pilot needs to review the **equipment** before takeoff."
* **Logic:** "Equipment" is an Uncountable Noun; never pluralize with "-s".

**2.**
* **Clean Code:** "The doctor gave **me** **excellent advice** about nutrition."
* **Logic:** "Me" is an Object Pointer. "Advice" is Uncountable; no "an" allowed.

**3.**
* **Clean Code:** "Can you send the updated financial **data** to **her**?"
* **Logic:** "Data" is treated as singular/uncountable. "Her" is an Object Pointer.

**4.**
* **Clean Code:** "There **is too much traffic** on the supply route today."
* **Logic:** "Traffic" is an Uncountable Noun; use "is" and "much" instead of "are" and "many".

**5.**
* **Clean Code:** "The hotel staff is preparing the room for **them**."
* **Logic:** "Them" is an Object Pointer used after a preposition.

---

## Part 2: Logic Gates & Power Source (Phases 3 & 4)

**6.**
* **Clean Code:** "Did the structural engineers **find** the micro-fractures?"
* **Logic:** The **DO** gate (Did) forces the V1 state (find).

**7.**
* **Clean Code:** "The banking server hasn't **processed** the transfers yet."
* **Logic:** The **HAVE** gate (hasn't) forces the V3 state (processed).

**8.**
* **Clean Code:** "She doesn't **like** to drink coffee in the afternoon."
* **Logic:** The **DO** gate (doesn't) forces the V1 state (like). No "-s".

**9.**
* **Clean Code:** "The technicians are **looking into** the firewall breach right now."
* **Logic:** The **BE** gate (are) in active voice forces the V4 state (looking).

**10.**
* **Clean Code:** "Have the researchers **published** their findings?"
* **Logic:** The **HAVE** gate (Have) forces the V3 state (published).

---

## Part 3: The Core Engine (Tier 1 Master Architecture)

**11.**
* **Clean Code:** "The cargo ship **arrives** at the port at 6 AM every morning."
* **Logic:** "Every morning" triggers the Routine Loop (V5).

**12.**
* **Clean Code:** "We **wrapped up** the marketing campaign last Tuesday."
* **Logic:** "Last Tuesday" triggers the History Log (V2).

**13.**
* **Clean Code:** "The maintenance crew **has fixed** the elevator already, so you can use it now."
* **Logic:** "Already" and a focus on the present result triggers the State Change / Result Log (has + V3).

**14.**
* **Clean Code:** "Please lower your voice, the director **is going over** the script right now."
* **Logic:** "Right now" triggers the Active Thread (is + V4).

**15.**
* **Clean Code:** "I **will settle on** a vendor by tomorrow, I promise."
* **Logic:** A promise triggers the Future Projection (Will + V1).

**16.**
* **Clean Code:** "The human heart **beats** around 100,000 times a day."
* **Logic:** A scientific fact triggers the Routine Loop (V5).

**17.**
* **Clean Code:** "I **visited** the Singapore headquarters in 2022."
* **Logic:** "In 2022" triggers the History Log (V2).

**18.**
* **Clean Code:** "The cyber security team **has ruled out** a malware attack recently."
* **Logic:** "Recently" with a focus on current state triggers the Result Log (has + V3).

**19.**
* **Clean Code:** "Look! The delivery drone **is dropping** the package on the roof!"
* **Logic:** Happening at this exact moment triggers the Active Thread (is + V4).

**20.**
* **Clean Code:** "He **always hands over** his shift smoothly."
* **Logic:** "Always" triggers the Routine Loop (V5).

---

## Part 4: Context Modules & Legacy Code (Tier 2 & 3)

**21.**
* **Clean Code:** "The architect figured out the blueprint error while he **was driving** to work."
* **Logic:** "While" triggers the Background Process (was + V4).

**22.**
* **Clean Code:** "The engine failed because the mechanic **hadn't checked** the oil pressure."
* **Logic:** Failing to check the oil happened *before* the engine failed. Pre-History Log (had + V3).

**23.**
* **Clean Code:** "The legal team **has been reviewing** the contracts for the last five hours."
* **Logic:** "For the last five hours" triggers the Uptime Log (has been + V4).

**24.**
* **Native Refactor:** "By next Friday, the developers **will finish** the sprint."
* **Logic:** Downgrade the computationally heavy Future Perfect to a native Future Projection (Will + V1).

**25.**
* **Native Refactor:** "The patient **was resting** for an hour when the doctor arrived."
* **Logic:** Downgrade Past Perfect Continuous to a native Background Process (was + V4).

---

## Part 5: Full System Integration (Log Refactoring)

**26. The Incident Report:**
"Yesterday, we **kicked off** the new server migration. While the system **was transferring** the **data**, the power went out. I didn't **panic**. I called the backup generator team, but they **had already left** the building. We are looking into the root cause every day to make sure it doesn't **happen** again."

**27. The Hardware Request:**
"I need to buy new **equipment** for the office. My laptop **crashes** every day this week. While I **was typing** an email yesterday, the screen **went** black. I **have been trying** to fix it since Monday, but I didn't **find** the problem."

**28. The Freelance Pitch:**
"I am a freelancer and I **built** the e-commerce app in 2024. By next week, I **will finish** your prototype. Before you hired me, I **had already whipped up** a basic wireframe. Please sign off on it so we can **kick off** the development."

**29. The Logistics Delay:**
"There **is too much traffic** on the highway today, so the delivery is held up. While the driver **was driving** to the warehouse, the truck **broke down**. He **has been waiting** for the tow truck for two hours. He hasn't **gotten around** to calling the client yet."

**30. The Performance Review:**
"We **wrapped up** the quarterly review two hours ago. The lead engineer said he will **look** into the memory leak. He **has been working** at this company since 2021. The **data shows** that we are falling behind. We will touch base when he **figures out** the solution."
