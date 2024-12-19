import React from "react";
import { SuggestionItem } from "./SuggestionItem";
import styles from "../styles/Sidebar.module.css";

const suggestions = [
  { username: "janedoe" },
  { username: "robertdoe" },
  { username: "sandradoe" },
  { username: "pepedoe_" },
  { username: "simon.doe" },
];

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.userProfile}>
        <div className={styles.avatar} />
      </div>
      <div className={styles.suggestionsHeader}>
        <div className={styles.suggestionsTitle}>Suggestions for you</div>
        <div className={styles.seeAll}>See all</div>
      </div>
      <div className={styles.suggestionsList}>
        {suggestions.map((suggestion) => (
          <SuggestionItem
            key={suggestion.username}
            username={suggestion.username}
          />
        ))}
      </div>
      <div className={styles.footer}>
        Information · Help · Prisoner · API · Job · Privacity · Conditions ·
        Locations · Trending accounts · Hashtags · Language
      </div>
      <div className={styles.copyright}>© 2022 INSTAGRAM FROM SIMMXS</div>
    </div>
  );
};
