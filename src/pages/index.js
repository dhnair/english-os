import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Compile your communication. Command your career."
    >
      {/* Hero Section */}
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            English <span className={styles.highlight}>OS</span>
          </h1>
          <p className="hero__subtitle">
            Compile Your Communication. Command Your Career.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to={useBaseUrl("/modules/day_01_master_curriculum")}
            >
              Initialize System (Start Day 1) →
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <section className={styles.features}>
          <div className="container">
            {/* The Motivation Section */}
            <div className="row margin-bottom--xl">
              <div className="col col--8 col--offset-2 text--center">
                <h3>The Origin of English OS</h3>
                <p className={styles.justifiedText}>
                  Over years of managing globally distributed IT teams, I
                  noticed a recurring bug in the system:
                  <strong>
                    {" "}
                    brilliant engineers were being held back by their
                    communication protocols.
                  </strong>
                </p>
                <p className={styles.justifiedText}>
                  People often learn just enough English to execute their daily
                  tasks, but "getting by" doesn't get you noticed. When
                  technically gifted professionals lack an authoritative,
                  commanding voice, they lose out on the visibility and
                  leadership opportunities they deserve.{" "}
                  <strong>English OS</strong> was built to fix this. By mapping
                  grammar to system architecture, we upgrade your language from
                  functional to formidable.
                </p>
              </div>
            </div>

            {/* Architecture Section */}
            <div className="row margin-bottom--xl">
              <div className="col col--10 col--offset-1 text--center">
                <div className={styles.codeBlock}>
                  <code>
                    <span className={styles.comment}>
                      // Traditional Linguistics vs. English OS
                    </span>
                    <br />
                    const Nouns = "System Variables & Data Types";
                    <br />
                    const Verbs = "Execution Commands";
                    <br />
                    const PassiveVoice = "Camera Angles & Information Framing";
                    <br />
                    const Conditionals = "Control Flow (If/Then Logic)";
                  </code>
                </div>
              </div>
            </div>

            {/* Author Section */}
            <div className="row margin-top--lg">
              <div className="col col--12 text--center">
                <h3>System Architect</h3>
                // Inside src/pages/index.js (Author Section)
                <p>
                  <strong>Deepak Nair</strong>
                  <br />
                  <span className={styles.authorTitle}>
                    Freelance Web Developer & Tech Mentor
                  </span>
                  <br />
                  📍 Bangalore, India
                  <br />
                  <div style={{ marginTop: "0.5rem" }}>
                    <a
                      href="https://linkedin.com/in/dhnair"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.authorLink}
                    >
                      LinkedIn
                    </a>
                    <span style={{ margin: "0 10px", color: "#8b949e" }}>
                      |
                    </span>
                    <a
                      href="https://github.com/dhnair/english-os"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.authorLink}
                    >
                      GitHub Repo
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
