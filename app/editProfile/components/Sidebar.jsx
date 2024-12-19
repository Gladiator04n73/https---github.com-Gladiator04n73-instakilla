import React from "react";
import styles from "../styles/Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.leftsideBg}>
            <div className={styles.sectionEdit}>
       <div className={styles.activeBorder} />
        <div className={styles.editProfileText}>Edit profile</div>
      </div>
        <button className={styles.changePassword}>Change password</button>

      <div className={styles.accountsSection}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7420cc788f7fb5c78060fc4d0cb8088de583617caf2bc61817b802047bdcf23d?placeholderIfAbsent=true&apiKey=89ea648570324a1aa1020e20f2ec4be4"
          className={styles.accountsIcon}
          alt=""
        />
        <h2 className={styles.accountsCenter}>Accounts center</h2>
        <p className={styles.accountsDescription}>
          Control settings for connected experiences on Instagram, the Facebook
          app, and Messenger, including sharing stories and posts, and logging
          in.
        </p>
      </div>
    </aside>
  );
};
