import React from "react";
import styles from "../styles/ProfileHeader.module.css";

const ProfileHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b731b4d703b44d44bd8f1d62864f21ecdba94eb64f9d87a2b73c3c82c4094b9c?placeholderIfAbsent=true&apiKey=89ea648570324a1aa1020e20f2ec4be4"
          alt="Instagram Logo"
          className={styles.logo}
        />
        <div className={styles.searchContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8667150c81f49781b7921d3da696b4ce4f44e66646302b2c7de9d0c927d92c3?placeholderIfAbsent=true&apiKey=89ea648570324a1aa1020e20f2ec4be4"
            alt="Search Icon"
            className={styles.searchIcon}
          />
          <label htmlFor="searchInput" className="visually-hidden">
            Search
          </label>
          <input
            id="searchInput"
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecd0c6c3e8f95e30be092983918cfe4c2119c948ddc9fd2b642f5b799e96bb57?placeholderIfAbsent=true&apiKey=89ea648570324a1aa1020e20f2ec4be4"
          alt="Navigation Icons"
          className={styles.navIcons}
        />
      </div>
      <div className={styles.divider} />
    </header>
  );
};

export default ProfileHeader;
