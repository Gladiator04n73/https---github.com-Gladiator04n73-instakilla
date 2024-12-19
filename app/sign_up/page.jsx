import React from "react";
import styles from "./SignUpForm.module.css";
import Link from "next/link";

export default function SignUpForm() {
  return (
    <div className={styles.signUpContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.formCard}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d243868273ff7b18249857b6c0ab6beeab299ae48c83ff21e308ecbbd651fe71?placeholderIfAbsent=true&apiKey=89ea648570324a1aa1020e20f2ec4be4"
            className={styles.logo}
            alt="Instagram logo"
          />
          <div className={styles.signUpMessage}>
            Sign up to see photos and videos of your friends.
          </div>
          <button className={styles.googleButton}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d80e6957f20f7a4f9e0d2e50fb22ed8b86cf155bbe59b4679c88d27baa7797c7?placeholderIfAbsent=true&apiKey=89ea648570324a1aa1020e20f2ec4be4"
              className={styles.googleIcon}
              alt=""
            />
            <span className={styles.googleButtonText}>
              Continue with google
            </span>
          </button>
          <div className={styles.hrContainer}>
            <hr className={styles.hrOnDiv}></hr>
            <div className={styles.divider}>OR</div>
          </div>
          <form>
            <label htmlFor="email" className={styles["visually-hidden"]}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={styles.formInput}
              placeholder="Email"
              required
            />

            <label htmlFor="fullName" className={styles["visually-hidden"]}>
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              className={styles.formInput}
              placeholder="Full name"
              required
            />

            <label htmlFor="username" className={styles["visually-hidden"]}>
              Username
            </label>
            <input
              type="text"
              id="username"
              className={styles.formInput}
              placeholder="Username"
              required
            />

            <label htmlFor="password" className={styles["visually-hidden"]}>
              Password
            </label>
            <input
              type="password"
              id="password"
              className={styles.formInput}
              placeholder="Password"
              required
            />

            <button type="submit" className={styles.submitButton}>
              Sign Up
            </button>
          </form>
          <div className={styles.termsText}>
            By signing up, you agree to our Terms, Data Policy and Cookies
            Policy.
          </div>
        </div>
        <div className={styles.loginCard}>
          <div className={styles.loginText}>You don't have an account?</div>
          <Link href="/auth" className={styles.loginLink}>Join</Link>
        </div>
        <div className={styles.downloadText}>Download the application.</div>
        <div className={styles.storeButtons}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d76e0c135359b5870f3fde9060f7e1ccabec1d359f5a249ebd399671e58e8351?placeholderIfAbsent=true&apiKey=89ea648570324a1aa1020e20f2ec4be4"
            className={styles.storeImage}
            alt="Download on the App Store"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5bc97bacd269673d546849344267e14052fd8aed6ab6f7730d9c702476af09d?placeholderIfAbsent=true&apiKey=89ea648570324a1aa1020e20f2ec4be4"
            className={styles.storeImage}
            alt="Get it on Google Play"
          />
        </div>
      </div>
    </div>
  );
}
