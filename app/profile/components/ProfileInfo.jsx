import React from "react";
import styles from "../styles/ProfileInfo.module.css";

const ProfileInfo = ({ username, stats, fullName }) => {
  return (
    <div className={styles.profileInfo}>
      <div className={styles.avatar} />
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.username}>{username}</h1>
          <button className={styles.editButton}>Edit profile</button>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/25e7a88647ff127c64f50534a4510c2c8a35545b45545e8538b4f928a7c31ca5?placeholderIfAbsent=true&apiKey=89ea648570324a1aa1020e20f2ec4be4"
            alt="Settings"
            width="24"
            height="24"
          />
        </div>
        <div className={styles.stats}>
          <div>
            <span className={styles.statValue}>{stats.posts}</span> posts
          </div>
          <div>
            <span className={styles.statValue}>{stats.followers}</span>{" "}
            followers
          </div>
          <div>
            <span className={styles.statValue}>{stats.following}</span>{" "}
            following
          </div>
        </div>
        <div className={styles.name}>{fullName}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
