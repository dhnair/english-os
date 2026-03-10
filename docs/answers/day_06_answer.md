---
draft: true
title: "Answer Key: Day 6 The Master Architecture (Tier 2 & Tier 3 Modules)"
sidebar_position: 6
---

# Answer Key: Day 6 The Master Architecture (Tier 2 & Tier 3 Modules)

## Part 4: Debugging Gauntlet (Tier 2 Context Modules)

**1.**
* **Clean Code:** "I **figured out** the database logic while I **was drinking** my coffee."
* **Logic:** "While" triggers the **Background Process** (was drinking) for the sudden interruption (figured out).

**2.**
* **Clean Code:** "The junior developer **has been trying** to fix this bug for three days."
* **Logic:** "For three days" up to the present triggers the **Uptime Log** (has been trying).

**3.**
* **Clean Code:** "By the time the ambulance arrived, the patient **had already recovered**."
* **Logic:** Two past events. The patient recovering happened *first*, requiring the **Pre-History Log** (had recovered).

**4.**
* **Clean Code:** "The CEO **brought up** the merger while we **were eating** lunch."
* **Logic:** "Eating lunch" is the **Background Process**; "brought up" is the sudden event.

**5.**
* **Clean Code:** "I **have been learning** Python since January."
* **Logic:** "Since January" triggers the **Uptime Log** (have been learning).

**6.**
* **Clean Code:** "The shipment **was held up** because the workers **had gone** on strike the day before."
* **Logic:** The strike happened *before* the hold-up, requiring the **Pre-History Log** (had gone).

**7.**
* **Clean Code:** "The fire alarm rang while the team **was wrapping up** the presentation."
* **Logic:** "Wrapping up" is the **Background Process** interrupted by the alarm.

**8.**
* **Clean Code:** "The freelancer **has been working** on the front-end architecture for six hours."
* **Logic:** "For six hours" up to now triggers the **Uptime Log**.

**9.**
* **Clean Code:** "I couldn't enter the facility because I **had left** my ID card at home."
* **Logic:** Leaving the card happened *before* failing to enter. **Pre-History Log** (had left).

**10.**
* **Clean Code:** "What **were you doing** at 8 PM last night when I called?"
* **Logic:** Asking about a **Background Process** running at a specific past interruption.

**11.**
* **Clean Code:** "She **has been feeling** burned out lately because of the tight deadlines."
* **Logic:** "Lately" indicates an ongoing state up to now, triggering the **Uptime Log**.

**12.**
* **Clean Code:** "The flight **had departed** before I **reached** the boarding gate."
* **Logic:** The flight left *first*. **Pre-History Log** (had departed) comes before the History Log (reached).

**13.**
* **Clean Code:** "While the mechanic **was figuring out** the engine issue, the customer waited in the lobby."
* **Logic:** "Figuring out" is the **Background Process**.

**14.**
* **Clean Code:** "It **has been raining** heavily for the last two hours."
* **Logic:** "For the last two hours" up to now triggers the **Uptime Log**.

**15.**
* **Clean Code:** "They **didn't bring up** the new policy because the manager **hadn't arrived** yet."
* **Logic:** The DO gate (didn't) forces "bring" to V1. The manager failing to arrive happened first, triggering the **Pre-History Log** (hadn't arrived).

**16.**
* **Clean Code:** "The stock market crashed while investors **were celebrating** the quarterly earnings."
* **Logic:** "Celebrating" is the **Background Process** interrupted by the crash.

**17.**
* **Clean Code:** "We **have been waiting** for the client to join the Zoom call for twenty minutes."
* **Logic:** "For twenty minutes" up to now triggers the **Uptime Log**.

**18.**
* **Clean Code:** "The server went offline because someone **had unplugged** the main power cable."
* **Logic:** Unplugging happened *first*. **Pre-History Log** (had unplugged).

**19.**
* **Clean Code:** "She **dropped** her phone while she **was running** for the bus."
* **Logic:** "Running" is the continuous **Background Process**. "Dropped" is the sudden interruption.

**20.**
* **Clean Code:** "The logistics team **has been holding up** the delivery since Monday."
* **Logic:** "Since Monday" triggers the **Uptime Log**.

**21.**
* **Clean Code:** "I **passed** the certification exam in 2024."
* **Logic:** A single event with a timestamp (in 2024) must downgrade to the Tier 1 **History Log** (V2). No Pre-History needed.

**22.**
* **Clean Code:** "The software **burned out** my CPU while I **was rendering** the 4K video."
* **Logic:** "Rendering" is the **Background Process**; "burned out" is the sudden event.

**23.**
* **Clean Code:** "How long **have you been living** in this city?"
* **Logic:** Asking for duration up to the present triggers the **Uptime Log**.

**24.**
* **Clean Code:** "By the time we **figured out** the bug, the client **had canceled** the contract."
* **Logic:** The cancellation happened *first*. **Pre-History Log** (had canceled).

**25.**
* **Clean Code:** "Although I **had studied** for months, I **blanked out** when the test **started**."
* **Logic:** "Had studied" (Pre-History Log) happened before the test "started" (Sudden Past Event).

---

## Part 5: Legacy Refactoring (Tier 3 to Native)

**26. (Future Continuous to Active Thread):**
* *Legacy:* "The engineering team will be deploying the new update at midnight."
* *Native:* "The engineering team **is deploying** the new update at midnight." (Or: **will deploy**)

**27. (Future Perfect to Future Projection):**
* *Legacy:* "By the end of the quarter, the sales department will have hit their targets."
* *Native:* "The sales department **will hit** their targets by the end of the quarter."

**28. (Past Perfect Continuous to Background Process):**
* *Legacy:* "He had been trying to figure out the memory leak for hours when he finally collapsed."
* *Native:* "He **was trying** to figure out the memory leak for hours when he finally collapsed."

**29. (Future Perfect Continuous to Future Projection):**
* *Legacy:* "By December, we will have been living in this apartment for five years."
* *Native:* "By December, we **will hit** five years in this apartment." (Or: "December **makes** five years...")

**30. (Future Continuous to Routine/Active Thread):**
* *Legacy:* "Please don't call me at 2 PM, I will be having a meeting with the client."
* *Native:* "Please don't call me at 2 PM, I **have** a meeting with the client." (Or: **am having**)

**31. (Future Perfect to Future Projection):**
* *Legacy:* "I will have resolved all the open tickets by tomorrow morning."
* *Native:* "I **will resolve** all the open tickets by tomorrow morning."

**32. (Past Perfect Continuous to Background Process):**
* *Legacy:* "The startup had been losing money for months before they finally burned out."
* *Native:* "The startup **was losing** money for months before they finally burned out."

**33. (Future Perfect Continuous to Future Projection):**
* *Legacy:* "By the time she graduates, she will have been studying software engineering for four years."
* *Native:* "When she graduates, it **will be** four years of studying software engineering."

**34. (Future Perfect to Future Projection):**
* *Legacy:* "The background script will have processed all the user data before the system wakes up."
* *Native:* "The background script **will process** all the user data before the system wakes up."

**35. (Past Perfect Continuous to Background Process):**
* *Legacy:* "They had been holding up the production line for hours before the manager intervened."
* *Native:* "They **were holding up** the production line for hours before the manager intervened."