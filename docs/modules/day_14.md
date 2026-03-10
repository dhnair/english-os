---
title: "Day 14: Log Parsing (Reported Speech)"
sidebar_position: 14
---

# Day 14: Log Parsing (Reported Speech)
**Objective:** Learn how to "parse and re-transmit" data. When you report what someone else said, you must shift the Tense Matrix backward and update pronouns to maintain system integrity.

## Part 1: Standard Library Upgrade
*Note: Memorize these as complete, unbreakable blocks of code.*

### A. The Corporate API 
| The Block | The Logic | Execution |
| :--- | :--- | :--- |
| **Fill someone in** | To give someone the details they missed. | "I'll **fill you in** on what the client said." |
| **Touch base** | To briefly contact someone to give/get an update. | "He said he would **touch base** after the deployment." |

### B. The Casual API 
| The Block | The Logic | Execution |
| :--- | :--- | :--- |
| **Call off** | To cancel a planned event. | "She said they had to **call off** the trip." |
| **Back out** | To withdraw from a commitment or agreement. | "The freelancer **backed out** of the React project." |

---

## Part 2: The System Boundaries (The Backshift Matrix)


When you move data from **Direct Speech** (Live Logs) to **Reported Speech** (History Logs), the "Tense Matrix" must shift one step into the past.

| Original Live Log (Direct) | Parsed History Log (Reported) |
| :--- | :--- |
| **Present Simple** (V1/V5) | **Past Simple** (V2) |
| **Present Continuous** (am/is/are) | **Past Continuous** (was/were) |
| **Past Simple / Present Perfect** | **Past Perfect** (had + V3) |
| **Will** | **Would** |
| **Can** | **Could** |

---

## Part 3: System Warnings
*Note: These are the fatal errors that cause "Data Corruption" in reported speech.*

**1. The "Double Past" Crash:**
If a log is already in the Past Simple (V2), it **must** shift to the Past Perfect (**had** + V3). If you leave it in V2, the timeline remains ambiguous.
* *Direct:* "I **pushed** the code."
* *Reported:* "He said he **had pushed** the code."

**2. The Pronoun Variable Mismatch:**
Always update the Subject/Object variables. "I" usually becomes "He" or "She." "My" becomes "His" or "Her."

---

## Part 4: Interactive Code Refactoring (25 Questions)
*Instructions: Refactor the Direct Logs into Reported Speech. Use "He said" or "She said" to start. Apply the Backshift Matrix and integrate the Standard Library API. Write your clean code directly below each prompt.*

**1. (Corporate):** Direct: "I am filling you in on the React requirements."

**2. (Casual):** Direct: "I will call off the brunch if it rains."

**3. (Corporate):** Direct: "I pushed the security patch to production yesterday."

**4. (Casual):** Direct: "I can't back out of the trip now."

**5. (Corporate):** Direct: "We are touching base with Capgemini on Friday."

**6. (Casual):** Direct: "I ran out of pink salt for my pre-workout."

**7. (Corporate):** Direct: "I have scoped out the new database architecture."

**8. (Corporate):** Direct: "The client is pushing back on the new timeline."

**9. (Casual):** Direct: "I am going to check out the new gym in Brookefield."

**10. (Corporate):** Direct: "I will bring up the memory leak during the sync."

**11. (Corporate):** Direct: "The developer who wrote this script backed out."

**12. (Casual):** Direct: "My sister is teaching me how to cook paneer."

**13. (Corporate):** Direct: "We resolved the bug that was causing the crash."

**14. (Casual):** Direct: "I forgot to factor in the traffic in Brookefield."

**15. (Corporate):** Direct: "I can sign off on the wireframes tomorrow."

**16. (Casual):** Direct: "I didn't get around to fixing my 2019 MacBook."

**17. (Corporate):** Direct: "The project manager whose team is on vacation called off the meeting."

**18. (Corporate):** Direct: "We are holding off on the deployment until the lead architect weighs in."

**19. (Casual):** Direct: "I enjoyed walking around the neighborhood last night."

**20. (Corporate):** Direct: "If the budget is approved, I will buy the ThinkStation."

**21. (Casual):** Direct: "I am looking forward to seeing my friends."

**22. (Corporate):** Direct: "The server which we rebooted is working now."

**23. (Corporate):** Direct: "I suggest wrapping up the meeting now."

**24. (Casual):** Direct: "I use pink salt to make my oats taste better."

**25. (Corporate/Casual - Full Refactor):** Direct: "Although I am a freelancer, I will touch base with the team. I can't back out now because I already signed off on the contract."