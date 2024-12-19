import React from "react";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./Feed.module.css";
import { Header } from "./components/Header";

const posts = [
  {
    username: "johndoe",
    likes: "9,999",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
    commentCount: "99",
    timeAgo: "9 HOURS AGO",
  },
  {
    username: "johndoe",
    likes: "9,999",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
    commentCount: "99",
    timeAgo: "9 HOURS AGO",
  },
];

export default function Feed() {
  return (
    <div className={styles.feed}>
      <Header/>
      <main className={styles.mainContent}>
        <div className={styles.contentGrid}>
          <div className={styles.feedColumn}>
            {posts.map((post, index) => (
              <Post key={index} {...post} />
            ))}
          </div>
          <div className={styles.sidebarColumn}>
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
};
