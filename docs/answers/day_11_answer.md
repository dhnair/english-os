---
draft: true
title: "Answer Key: Day 11 Exception Handling"
sidebar_position: 11
---

# Answer Key: Day 11 Exception Handling

**1.**
* **The Bug:** `Despite of`
* **The Logic:** System Warning 1. You never attach "of" to the word "Despite".
* **Clean Code:** "**Despite** the tight deadline, the team delivered the React project on time."

**2.**
* **The Bug:** `Although my heavy workload`
* **The Logic:** Type 1 vs Type 2. "Although" requires a full clause (Subject + Verb). Because "my heavy workload" is just a Noun/Data Object, it requires a Type 2 router.
* **Clean Code:** "**Despite** my heavy workload, I will stick to my workout routine this evening." (Or: "**In spite of** my heavy workload...")

**3.**
* **The Bug:** `Although,`
* **The Logic:** "Although" is a connecting router; it cannot be used with a comma to start a brand new, standalone sentence. That requires a Type 3 Hard Stop.
* **Clean Code:** "We should push back on the budget cuts. **However**, we need to be polite about it."

**4.**
* **The Bug:** `In spite of I woke up late`
* **The Logic:** "In spite of" requires a Data Object (Noun/Gerund). Because "I woke up late" is a full clause (Subject + Verb), it requires a Type 1 router.
* **Clean Code:** "**Even though** I woke up late, I managed to whip up a pre-workout drink."

**5.**
* **The Bug:** `Although... but`
* **The Logic:** System Warning 2 (Double Router Loop). You only need one router to connect the two ideas.
* **Clean Code:** "**Although** the client weighed in on the design, we decided to stick to the original plan."

**6.**
* **The Bug:** `Despite (have)`
* **The Logic:** Type 2 Routing + Type Casting. "Despite" requires a Noun Data Object. You must cast the verb into a Gerund.
* **Clean Code:** "Despite **having** a broken laptop, the freelancer finished the Python script."

**7.**
* **The Bug:** `In spite of,`
* **The Logic:** Type 3 Hard Stop needed. "In spite of" cannot stand alone at the start of a new sentence without a data object.
* **Clean Code:** "The weather was terrible. **However**, the trip turned out to be amazing."

**8.**
* **The Bug:** `Even though the senior developer's absence`
* **The Logic:** Type 1 vs Type 2. "Even though" requires a full clause (Subject + Verb). The current payload is just a Noun. We must unpack it into a full clause.
* **Clean Code:** "Even though the senior developer **was absent**, we pushed the code."

**9.**
* **The Bug:** `despite of it was`
* **The Logic:** Triple crash. "Despite" never takes "of", and it cannot take a full clause ("it was very expensive"). Shift to a Type 1 router.
* **Clean Code:** "I bought the Lenovo workstation **even though** it was very expensive."

**10.**
* **The Bug:** `(give their opinion)`
* **The Logic:** Standard Library Integration. 
* **Clean Code:** "Before we sign off on this, we need the security team to **weigh in on** it."

**11.**
* **The Bug:** `Despite (eat)`
* **The Logic:** Type 2 Routing + Type Casting. The verb must be cast as a Gerund.
* **Clean Code:** "Despite **eating** 100g of protein every day, he still feels hungry."

**12.**
* **The Bug:** `(resist the plan)`
* **The Logic:** Standard Library Integration.
* **Clean Code:** "The CEO wants to launch tomorrow. I think we need to **push back** because the server is unstable."

**13.**
* **The Bug:** `Although... but`
* **The Logic:** Double Router Loop. Drop the "but".
* **Clean Code:** "**Although** she had never cooked paneer before, it turned out delicious."

**14.**
* **The Bug:** `In spite of the bug was reported`
* **The Logic:** "In spite of" strictly takes a Noun/Gerund, not a full clause.
* **Clean Code:** "**Although** the bug was reported yesterday, no one has escalated it yet."

**15.**
* **The Bug:** `Even though,`
* **The Logic:** A new sentence needs a Type 3 Hard Stop. "Even though" must connect two clauses in the same sentence.
* **Clean Code:** "The deployment failed. **However**, the team didn't panic."

**16.**
* **The Bug:** `On the other hand,`
* **The Logic:** The instructions ask to combine them using a Type 1 router (Although/Even though) to create a single, fluid sentence.
* **Clean Code:** "**Although** my 2019 model is still working well, I wanted to buy the M4 Macbook."

**17.**
* **The Bug:** `Despite of`
* **The Logic:** System Warning 1. Drop the "of".
* **Clean Code:** "**Despite** the new API rate limits, the app is running smoothly."

**18.**
* **The Bug:** `However her busy schedule`
* **The Logic:** We need to combine the sentences into one using a Type 2 Data Object router since "her busy schedule" is a Noun phrase.
* **Clean Code:** "I tried to teach my sister English grammar **despite** her busy schedule at the MNC."

**19.**
* **The Bug:** `In spite of (work)`
* **The Logic:** Type Casting. The router requires a Gerund.
* **Clean Code:** "In spite of **working** for a massive company like Capgemini, he prefers a quiet office."

**20.**
* **The Bug:** `(ended up)`
* **The Logic:** Standard Library Integration.
* **Clean Code:** "I thought the overnight oats would be boring, but they **turned out** to be great."

**21.**
* **The Bug:** `Although... but`
* **The Logic:** Double Router Loop. Remove the "but".
* **Clean Code:** "**Although** we lost the client data, the backups were restored immediately."

**22.**
* **The Bug:** `Despite the rain. I went...`
* **The Logic:** Punctuation crash. "Despite the rain" is a dependent fragment; it must be connected to the main clause with a comma, not separated by a period.
* **Clean Code:** "Despite the rain**,** I went for a walk."

**23.**
* **The Bug:** `despite he knew`
* **The Logic:** "Despite" cannot route a full clause (Subject + Verb). Switch to a Type 1 router.
* **Clean Code:** "The manager refused to weigh in on the issue **even though** he knew the answer."

**24.**
* **The Bug:** `(maintain)`
* **The Logic:** Standard Library Integration.
* **Clean Code:** "It is hard to **stick to** a workout routine when you travel."

**25.**
* **The Bug:** `Despite of I was hired... Although... but...`
* **The Logic:** Fix the "Despite of + clause" error (change to Even though/Although). Fix the Double Router loop by dropping "but".
* **Clean Code:** "**Even though** I was hired to write Python, they asked me to weigh in on the React frontend. **Although** it wasn't my job, I did it anyway." (Or: "**Despite being** hired to write Python...")