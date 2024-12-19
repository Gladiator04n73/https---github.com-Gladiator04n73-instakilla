import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import ProfileInfo from "./components/ProfileInfo";
import PhotoGrid from "./components/PhotoGrid";
import styles from "./styles/Profile.module.css";

export default function Profile() {
  const profileStats = {
    posts: 0,
    followers: 0,
    following: 0,
  };

  const photos = [
    { url: "photo1.jpg", description: "Photo 1" },
    { url: "photo2.jpg", description: "Photo 2" },
    { url: "photo3.jpg", description: "Photo 3" },
  ];

  return (
    <div className={styles.profile}>
      <ProfileHeader />
      <ProfileInfo
        username="johndoe"
        stats={profileStats}
        fullName="John Doe"
      />
      <div className={styles.divider} />
      <div className={styles.tabIndicator} />
      <div className={styles.postsTab}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f43de0ce7b2f2dc66800f1a3dbd86bbc96011c229fa2de1c47beefae4b6a621?placeholderIfAbsent=true&apiKey=89ea648570324a1aa1020e20f2ec4be4"
          alt=""
          className={styles.postsIcon}
        />
        <span>POSTS</span>
      </div>
      <div className={styles.gridContainer}>
        <PhotoGrid photos={photos} />
      </div>
    </div>
  );
};
