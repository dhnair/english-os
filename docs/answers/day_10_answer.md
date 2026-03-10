---
draft: true
title: "Answer Key: Day 10 Control Flow"
sidebar_position: 10
---

# Answer Key: Day 10 Control Flow

## Part 4: Standard Conditionals (Levels 0-3)

**1. (Corporate - Level 1):** * **The Bug:** `will be approved` (in the IF block), `start` (in the RESULT block)
* **The Logic:** Double Future Crash. The IF block cannot take "will." Because this is a real future event (Level 1), the IF block needs Present Simple, and the RESULT block needs the Modal. 
* **Clean Code:** "If the freelance contract **is approved** tomorrow, I **will start** working immediately." (Or using the new API: "If the client **signs off on** the freelance contract tomorrow, I **will start** working immediately.")

**2. (Casual - Level 2):** * **The Bug:** `was`, `will hold off on`
* **The Logic:** Sandbox Override. When using the BE Gate in a fake, hypothetical present (Level 2), "was" permanently becomes "were." The RESULT block requires "would" to show it is a hypothetical output.
* **Clean Code:** "If I **were** you, I **would hold off on** buying a new MacBook until the Apple event."

**3. (Corporate - Level 3):** * **The Bug:** `didn't push`, `wouldn't have to roll back`
* **The Logic:** This is a Post-Mortem. The event is already finished in the past. It requires the Level 3 Double Past (Past Perfect) for the trigger, and "would have + V3" for the output. 
* **Clean Code:** "If the junior developer **had not pushed** the broken code, we **would not have had to roll back** the server."

**4. (Casual - Level 1):** * **The Bug:** `will make`, `drop by`
* **The Logic:** Double Future Crash. Move the future Modal to the RESULT block.
* **Clean Code:** "If you **make** overnight oats for brunch, I **will drop by** to eat with you."

**5. (Corporate - Level 0):** * **The Bug:** `is not signing off`, `is stalling`
* **The Logic:** Level 0 is for global constants and hardcoded facts. It requires pure Present Simple (V1/V5) in both blocks, not Present Continuous.
* **Clean Code:** "If a client **does not sign off** on the wireframes, the project **stalls**."

**6. (Corporate - Level 2):** * **The Bug:** `have`, `will not hold off on`
* **The Logic:** This is a hypothetical sandbox (they do *not* actually have bandwidth right now). It requires Level 2: Past Simple trigger + "Would" output.
* **Clean Code:** "If we **had** more bandwidth, we **would not hold off on** the UI redesign."

**7. (Casual - Level 3):** * **The Bug:** `knew`, `would drop by`
* **The Logic:** The walking happened last night (a finished timeline). This requires a Level 3 Post-Mortem.
* **Clean Code:** "If I **had known** you were walking near Brookefield last night, I **would have dropped by** to say hello."

**8. (Corporate - Bug Fix):** * **The Bug:** `will fail` (inside the IF block)
* **The Logic:** Double Future Crash. The condition must be Present Simple.
* **Clean Code:** "We will roll back the database if the migration **fails**."

**9. (Casual - Level 1):** * **The Bug:** `will add`, `is`
* **The Logic:** Double Future Crash. Move the Modal to the RESULT block to show the future outcome.
* **Clean Code:** "If I **add** extra chili to the recipe, it **will be** perfectly spicy."

**10. (Corporate - Bug Fix):** * **The Bug:** `was`
* **The Logic:** Sandbox Override! The director is not actually here.
* **Clean Code:** "If the IT director **were** here, he would sign off on the security patch."

**11. (Casual - Level 2):** * **The Bug:** `don't have to`, `will whip up`
* **The Logic:** The reality is she *does* have to teach Python. She is imagining a fake reality where she doesn't. This requires Level 2.
* **Clean Code:** "If I **didn't have to** teach Python this weekend, I **would whip up** a massive dinner."

**12. (Corporate - Level 3):** * **The Bug:** `didn't fail`, `didn't lose`
* **The Logic:** Post-Mortem of a past event. Requires Level 3 (Past Perfect + Would have).
* **Clean Code:** "If the backup server **had not failed**, we **would not have lost** the client's data."

**13. (Casual - Bug Fix):** * **The Bug:** `drop by`
* **The Logic:** The IF block is correct (Present Simple), but the RESULT block needs a future Modal to show the projected action.
* **Clean Code:** "I **will drop by** your office tomorrow if I finish my freelance work early."

**14. (Corporate - Level 1):** * **The Bug:** `will roll back`
* **The Logic:** Double Future Crash. 
* **Clean Code:** "If we **roll back** the update now, the users will not experience any downtime."

**15. (Corporate - Level 2):** * **The Bug:** `was`, `will sign off`
* **The Logic:** Sandbox Override for the fake reality, plus "would" for the hypothetical output.
* **Clean Code:** "If I **were** the lead architect, I **would sign off** on this API immediately."

**16. (Casual - Level 0):** * **The Bug:** `are soaking`, `are tasting`
* **The Logic:** This is a cooking fact/constant. It requires pure Present Simple (V1/V5).
* **Clean Code:** "If you **soak** oats overnight, they **taste** much better the next day."

**17. (Corporate - Bug Fix):** * **The Bug:** `roll back`
* **The Logic:** The RESULT block ("would not have lost") is correctly formatted for a Level 3 Post-Mortem, but the IF block trigger is stuck in the present tense.
* **Clean Code:** "We would not have lost the files if we **had rolled back** the system yesterday."

**18. (Casual - Level 3):** * **The Bug:** `didn't hold off`, `would go`
* **The Logic:** The concert was last night. This is a Level 3 Post-Mortem.
* **Clean Code:** "If we **had not held off on** buying the tickets, we **would have gone** to the concert last night."

**19. (Corporate - Level 1):** * **The Bug:** `we buy`
* **The Logic:** The IF block is correct, but the RESULT block needs the future Modal.
* **Clean Code:** "If the manager signs off on the budget, we **will buy** the Lenovo workstation."

**20. (Corporate/Casual - Full Refactor):** * **The Bug:** `was not`, `will have to`
* **The Logic:** The speaker *is* a freelancer. Imagining they are not is a Level 2 Sandbox scenario requiring the Override.
* **Clean Code:** "If I **were not** a freelancer, I **would have to** ask a boss to sign off on my vacation days. I am glad I can just hold off on taking projects when I want a break."

---

## Part 5: Advanced System Interaction (Passive Conditionals)

**21. (Corporate - Level 1 Passive):** * **The Bug:** `will be signed off on` (Double Future), `will push` (Active Voice instead of Passive)
* **The Logic:** Fix the IF block to Present Passive (`are + V3`). Fix the RESULT block to Future Passive (`will be + V3`).
* **Clean Code:** "If the wireframes **are signed off on** tomorrow, the new UI **will be pushed** to production."

**22. (Corporate - Level 2 Passive Sandbox):** * **The Bug:** `was hacked` (Sandbox Override missed), `would roll back` (Needs to be passive to match the object focus)
* **The Logic:** Apply "were" for the hypothetical passive trigger. Apply "would be + V3" for the passive output.
* **Clean Code:** "If the main server **were hacked**, the database **would be rolled back** to yesterday's backup."

**23. (Corporate - Level 3 Passive Post-Mortem):** * **The Bug:** `had tested` (Active), `would not have held off on` (Active)
* **The Logic:** The code did not test itself. The deployment did not hold itself off. Both blocks must be fully compiled into the Passive Voice.
* **Clean Code:** "If the code **had been tested** properly, the deployment **would not have been held off on**."

**24. (Casual - Level 1 Passive):** * **The Bug:** `will not hold off` (Active)
* **The Logic:** The movie does not hold itself off; it is held off by people. 
* **Clean Code:** "If dinner is whipped up quickly, the movie **will not be held off**."

**25. (Corporate - Level 2 Passive):** * **The Bug:** `was escalated` (Sandbox Override missed), `would approve` (Active)
* **The Logic:** Apply the Sandbox Override to the passive trigger. Shift the result to passive because the budget cannot approve itself.
* **Clean Code:** "If the issue **were escalated** to the CEO, the new budget **would be approved** immediately."