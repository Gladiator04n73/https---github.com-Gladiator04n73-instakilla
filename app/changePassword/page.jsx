'use client';

import React, { useState } from "react";
import styles from "./styles/ChangePassword.module.css";
import { Header } from "./components/Header";
import { PasswordInput } from "./components/PasswordInput";
import { Sidebar } from "./components/Sidebar";

export default function ChangePassword() {
  const [formData, setFormData] = useState({
    'prev-password': '',
    'new-password': '',
    'confirm-password': ''
  });

  const passwordInputs = [
    { label: "Previous password", id: "prev-password" },
    { label: "New password", id: "new-password" },
    { label: "Confirm new password", id: "confirm-password" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (id, value) => {
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
        <div className={styles.sidebarColumn}>
            <Sidebar />
          </div>


          <section className={styles.mainSection}>
            <div className={styles.userInfo}>
              <div className={styles.userAvatar} />
              <span className={styles.username}>johndoe</span>
            </div>

            <form className={styles.passwordForm} onSubmit={handleSubmit}>
              {passwordInputs.map((input) => (
                <PasswordInput
                  key={input.id}
                  label={input.label}
                  id={input.id}
                  value={formData[input.id]}
                  onChange={(value) => handleInputChange(input.id, value)}
                />
              ))}
              <div className={styles.footerForm}>            
                <button type="submit" className={styles.submitButton}>
                Change password
                </button>
                <a href="#" onClick={(e) => e.preventDefault()} className={styles.forgotPassword}>
                You forgot your password?
              </a>
              </div>



            </form>


          </section>
        </div>
      </main>
    </div>
  );
}
