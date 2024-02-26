import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const resumeUrl = "https://docs.google.com/document/d/1BOQU_W_0XDYWJBtkG0Nw6tN7CpkuGs5A/edit?usp=sharing&ouid=111674948737920719506&rtpof=true&sd=true"; // Update with the actual path to your resume

  const handleDownloadResume = () => {
    window.open(resumeUrl, "_blank");}
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/coverPhoto.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
           
            <div className={styles.aboutItemText}>
              <p>
              I'm a detail-oriented software engineer and data analyst. Skilled in Java, Python, and web development, I thrive in dynamic environments. With expertise in cloud services like Azure and AWS, I'm eager to collaborate on innovative projects, leveraging agile methodologies to drive results. Let's create impactful solutions together.
              </p>
              <button className={styles.resumeButton} onClick={handleDownloadResume}>View my Resume</button>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
