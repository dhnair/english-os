---
draft: true
title: "Answer Key: Day 13 Injecting Data Payloads"
sidebar_position: 13
---

# Answer Key: Day 13 Injecting Data Payloads

**1.**
* **The Bug:** `which`, `(introduce)`
* **The Logic:** "Which" is only for inanimate tech/objects. A project manager requires "Who". 
* **Clean Code:** "The project manager **who** called the meeting wants to **bring up** the new budget."

**2.**
* **The Bug:** `who`, `them`
* **The Logic:** Oats are inanimate (use "that" or "which"). The pronoun "them" causes a Double Variable crash.
* **Clean Code:** "The overnight oats **that** I made last night are in the fridge."

**3.**
* **The Bug:** `(investigate)`, `that they are`
* **The Logic:** Double Variable crash. "That" replaces "they". 
* **Clean Code:** "We need to **scope out** the API rate limits **that** are causing the timeout."

**4.**
* **The Bug:** `that` (with missing commas)
* **The Logic:** Because she only has one sister, the information is non-essential (bonus metadata). It requires commas, and you cannot use "that" inside commas for humans. Use ", who... ,"
* **Clean Code:** "My sister**, who** works at a large MNC**,** needs help with English grammar."

**5.**
* **The Bug:** `, that`
* **The Logic:** You can never use "that" immediately following a comma for non-essential metadata. Because the ThinkStation is tech, it requires "which".
* **Clean Code:** "The Lenovo ThinkStation**, which** I use for heavy Python compiling, is incredibly powerful."

**6.**
* **The Bug:** `(have zero left)`
* **The Logic:** Standard Library Integration.
* **Clean Code:** "I need to go to the store because I completely **ran out of** the high-protein paneer."

**7.**
* **The Bug:** `who he pushed`
* **The Logic:** Double Variable crash. "Who" replaces "he".
* **Clean Code:** "The junior developer, **who** pushed the broken code, is fixing the errors."

**8.**
* **The Bug:** `who his website`
* **The Logic:** This is a Foreign Key showing ownership. Use "whose" to replace "who his".
* **Clean Code:** "The client **whose** website we are building wants to change the wireframes."

**9.**
* **The Bug:** `(look at)`, `which it opened`
* **The Logic:** Standard Library Integration. Double Variable crash ("which" replaces "it").
* **Clean Code:** "I want to **check out** the new gym in Brookefield **which** opened last week."

**10.**
* **The Bug:** `that I scoped them out`
* **The Logic:** Double Variable crash. "That" replaces "them".
* **Clean Code:** "The React components **that** I scoped out yesterday are ready for deployment."

**11.**
* **The Bug:** `who`
* **The Logic:** Salt is not human. Use "that" or "which".
* **Clean Code:** "The pink salt **that** I put in my pre-workout drink makes it taste better."

**12.**
* **The Bug:** `, that`
* **The Logic:** You cannot use "that" after a comma. Because a manager is human, use "who".
* **Clean Code:** "My manager**, who** is currently on vacation, asked me to hold off on the launch."

**13.**
* **The Bug:** `which I usually put them`
* **The Logic:** Double Variable crash. "Which" replaces "them".
* **Clean Code:** "I ran out of the chia seeds **which** I usually put in my breakfast."

**14.**
* **The Bug:** `which`
* **The Logic:** A software engineer is human. Use "who" or "that".
* **Clean Code:** "The software engineer **who** wrote the documentation is out sick today."

**15.**
* **The Bug:** `, that`
* **The Logic:** You cannot use "that" after a comma for non-essential metadata. Switch to "which".
* **Clean Code:** "The new Macbook Pro**, which** has the M4 chip, is arriving on March 1st."

**16.**
* **The Bug:** `who her trip`
* **The Logic:** Foreign Key / Ownership. Replace "who her" with "whose".
* **Clean Code:** "The friend **whose** trip we are planning wants to go to Europe."

**17.**
* **The Bug:** `who failed`
* **The Logic:** A database migration is inanimate tech. Use "that" or "which".
* **Clean Code:** "Please bring up the database migration **that** failed last night."

**18.**
* **The Bug:** `, that`
* **The Logic:** You cannot use "that" inside non-essential commas. 
* **Clean Code:** "The traffic in Brookefield**, which** is always terrible at 6 PM, made me late."

**19.**
* **The Bug:** `whose code we reviewed it`
* **The Logic:** Double Variable crash hidden in an ownership clause. "Whose code" replaces "it".
* **Clean Code:** "The freelancer **whose** code we reviewed did a fantastic job."

**20.**
* **The Bug:** `that you sent it to me`
* **The Logic:** Double Variable crash. "That" replaces "it".
* **Clean Code:** "I checked out the new recipe **that** you sent to me."

**21.**
* **The Bug:** `that they were sent`
* **The Logic:** Double Variable crash. "That" replaces "they".
* **Clean Code:** "The team needs to scope out the new requirements **that** were sent by Capgemini."

**22.**
* **The Bug:** `which I use it`
* **The Logic:** Double Variable crash. "Which" replaces "it".
* **Clean Code:** "The treadmill **which** I use for my cardio routine is broken."

**23.**
* **The Bug:** `, that show`
* **The Logic:** You cannot use "that" after a comma. Use "which" for tech/logs.
* **Clean Code:** "I will bring up the server logs**, which** show a massive memory leak."

**24.**
* **The Bug:** `laptop that I use... is`
* **The Logic:** She only has one 2019 laptop, so the metadata is non-essential. Add commas and change "that" to "which".
* **Clean Code:** "My 2019 laptop**, which** I use for freelance work**,** is starting to slow down."

**25.**
* **The Bug:** `, that his job is`, `brought up a bug which it crashes`
* **The Logic:** Triple crash. Fix the ownership tag inside commas (", whose job is..."). Fix the Double Variable crash ("which crashes").
* **Clean Code:** "The lead architect **, whose** job is to scope out the systems, brought up a bug **which** crashes the Python script."