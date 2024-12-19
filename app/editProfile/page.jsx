import React from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { ProfileInput } from "./components/ProfileInput";
import styles from "./styles/EditProfilePage.module.css";



export default function EditProfilePage() {
  return (
    <div className={styles.editProfile}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.contentGrid}>
          <div className={styles.sidebarColumn}>
            <Sidebar />
          </div>
            <section className={styles.profileSection}>
              <div className={styles.profileHeader}>
                <div className={styles.avatarContainer} />
                <div className={styles.profileInfo}>
                  <h1 className={styles.username}>johndoe</h1>
                  <button className={styles.changePhotoButton}>
                    Change profile photo
                  </button>
                </div>
              </div>
              <div className={styles.profileForm}>
                  <ProfileInput />
              </div>
            </section>
        </div>
      </main>
    </div>
  );
};
