# 🖥️ English OS: English for IT Professionals

Welcome to **English OS**, a technical documentation project designed to teach English grammar to non-native software developers by using programming analogies and system architecture concepts.

Instead of traditional linguistics, this curriculum compiles English into terms developers already understand:
* **Nouns** = System Variables & Data Types
* **Verbs** = Execution Commands (The Power Source)
* **Active/Passive Voice** = Information Framing & Camera Angles
* **Conditionals** = Control Flow (If/Then Logic)
* **Reported Speech** = Log Parsing

## 📖 The Curriculum: Version 1.0 (Core Backend)

The current Version 1.0 release consists of an 18-day structured module path. It starts with Global Architecture and moves through System Variables, Logic Gates, Data Type Casting, and Exception Handling, culminating in a Master Graduation Exam.

This project is built using [Docusaurus](https://docusaurus.io/), a modern static website generator powered by React, styled with a custom dark-mode IDE aesthetic.

---

## 🚀 How to Run the System Locally

If you want to fork this project to study locally, or if you want to test changes before contributing, follow these steps:

### Prerequisites
* [Node.js](https://nodejs.org/) (v18.0 or above)
* Git

### Installation & Execution
1. **Fork the repository** on GitHub.
2. **Clone your fork** to your local machine:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/english-os.git](https://github.com/YOUR_USERNAME/english-os.git)
   cd english-os
   ```
3. **Install the dependencies:**
   ```bash
   npm install
   ```
4. **Boot up the local development server:**
   ```bash
   npm run start
   ```
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

---

## 📂 System Architecture (Directory Structure)

The core curriculum is located inside the `docs/` directory:
* `/docs/modules/` - Contains the daily curriculum files (Day 1 to Day 18).
* `/docs/answers/` - Contains the system logs (answer keys). *Note: These are kept in `draft: true` mode in production to prevent premature access.*

---

## 🤝 How to Contribute (Submit a Patch)

Contributions, corrections, and new modules are highly encouraged! If you have an idea for mapping a grammatical concept to a new programming analogy, we would love to see it.

1. **Fork the Project**
2. **Create your Feature Branch:** `git checkout -b feature/AddAdvancedRouting`
3. **Commit your Changes:** `git commit -m 'Add some AdvancedRouting'`
4. **Push to the Branch:** `git push origin feature/AddAdvancedRouting`
5. **Open a Pull Request**

### Formatting Guidelines
* We use **MDX** (Markdown + JSX). Ensure all HTML tags are strictly closed (e.g., use `<br />` instead of `<br>`).
* Utilize Docusaurus Admonitions (`:::info`, `:::danger`, `:::tip`) to simulate system logs and console outputs.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.