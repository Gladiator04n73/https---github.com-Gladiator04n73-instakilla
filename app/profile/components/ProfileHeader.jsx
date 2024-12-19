'use client'
import { useState } from "react";
import React from "react";
import styles from "../styles/ProfileHeader.module.css";

const ProfileHeader = () => {
  const [show, setShow] = useState(false);
  const onShowClick = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <header className={styles.headerBg}>
      <div className={styles.headerContent}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b731b4d703b44d44bd8f1d62864f21ecdba94eb64f9d87a2b73c3c82c4094b9c?placeholderIfAbsent=true&apiKey=89ea648570324a1aa1020e20f2ec4be4"
          className={styles.logo}
          alt="Instagram logo"
        />
        <div className={styles.searchContainer}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1b15a3111a3172a4d5614e762633d0c41abfd83b44f5f36b0995944128c4ade?placeholderIfAbsent=true&apiKey=89ea648570324a1aa1020e20f2ec4be4"
            className={styles.searchIcon}
            alt=""
          />
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div className={styles.navIconsContainer}>
        <img
          loading="lazy"
          src='./home.png'
          className={styles.navIcons}
          alt="Navigation icons"
          onClick={onShowClick}
        />
                <img
          loading="lazy"
          src='./chat.png'
          className={styles.navIcons}
          alt="Navigation icons"
          onClick={onShowClick}
        />
                <img
          loading="lazy"
          src='./more.png'
          className={styles.navIcons}
          alt="Navigation icons"
          onClick={onShowClick}
        />
                <img
          loading="lazy"
          src='./social.png'
          className={styles.navIcons}
          alt="Navigation icons"
          onClick={onShowClick}
        />
                <img
          loading="lazy"
          src='./heart.png'
          className={styles.navIcons}
          alt="Navigation icons"
          onClick={onShowClick}
        />
          </div>

            
      </div>
      
      <div className={styles.divider} />
{show && <form className={styles.formOverlay}>
  <h1 className={styles.titleCreatePost}>Create post</h1>
  <div className={styles.formContainer}>
    <img
    src='./post.png'
    alt="image"
    className={styles.formImg}
    />
    Click me!
  <button type="submit" className={styles.submitButton} >Post</button>
  </div>
  </form>}
    </header>
    
  );
};
export default ProfileHeader;