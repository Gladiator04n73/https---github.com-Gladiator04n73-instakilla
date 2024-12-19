import React from "react";
import styles from "../styles/SuggestionItem.module.css";

export const SuggestionItem = ({ username }) => {
  return (
    <div className={styles.suggestion}>
      <div className={styles.userInfo}>
        <div className={styles.avatar} />
        <div className={styles.details}>
          <div className={styles.username}>{username}</div>
          <div className={styles.subtitle}>Suggestion for you</div>
        </div>
      </div>
      <button className={styles.followButton}>Follow</button>
    </div>
  );
};
