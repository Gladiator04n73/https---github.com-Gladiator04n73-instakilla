import React from "react";
import styles from "../styles/ProfileInput.module.css";


export function ProfileInput() {


  return (
    <div>
        <form className={styles.inputContainer}>
          <label className={styles.formLabel}>Name</label>
          <input className={styles.formInput} />
          <div className={styles.helpText}>
            To help people discover your account, use the name people know you
            by, whether it's your full name, nickname, or business name.
            You can only change your name twice within a 14-day period.
          </div>
          <label className={styles.formLabel}>Username</label>
          <input className={styles.formInput} />
          <div className={styles.helpText}>
            In most cases, you will be able to change your username back to
            johndoe for an additional 14 days. More information
          </div>
          <label className={styles.formLabel}>Description</label>
          <textarea className={styles.descriptionTextarea} />
          <div className={styles.sectionTitle}>Personal Information</div>
          <div className={styles.helpText}>Provide your personal information,
            even if the account is used for a business, a pet, etc.
            This information will not be kept in your public profile.
          </div>
          <label className={styles.formLabel}>Email</label><input className={styles.formInput} />
          <label className={styles.formLabel}>Gender</label><input className={styles.formInput} />
        </form>
                <div className={styles.actionButtons}>
                <button type="submit" className={styles.submitButton}>
                  Send
                </button>
                <button type="button" className={styles.deactivateButton}>
                  Temporarily deactivate my account
                </button>
              </div>
              </div>
  );
}