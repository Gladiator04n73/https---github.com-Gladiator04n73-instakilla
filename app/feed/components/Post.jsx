import React from "react";
import styles from "../styles/Post.module.css";

export const Post = ({
  username,
  likes,
  description,
  commentCount,
  timeAgo,
}) => {
  return (
    <article className={styles.post}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <div className={styles.avatar} />
          <div className={styles.username}>{username}</div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.image} role="img" aria-label="Post content" />
      <div className={styles.content}>
        <div className={styles.interactions}>
        <div className={styles.navIconsContainer}>
        <div className={styles.navIconsContainerLeft}>
        <img
          loading="lazy"
          src='./favorite.png'
          className={styles.navIcons}
          alt="Navigation icons"
        />
                <img
          loading="lazy"
          src='./speech-balloon.png'
          className={styles.navIcons}
          alt="Navigation icons"
        />
                <img
          loading="lazy"
          src='./send.png'
          className={styles.navIcons}
          alt="Navigation icons"
        />
        </div>
        <div className={styles.navIconsContainerRight}>
                <img
          loading="lazy"
          src='./bookmark.png'
          className={styles.navIcons}
          alt="Navigation icons"
        />
          </div>
          </div>
          <div className={styles.likes}>{likes} likes</div>
          <div className={styles.description}><span className={styles.username}>{username}</span> {description}</div>
          <button className={styles.seeComments}>See {commentCount} comments</button>
          <div className={styles.timeAgo}>{timeAgo}</div>
        </div>
      </div>
      <form className={styles.actions}>
          <div className={styles.commentSection}>
          <img
          loading="lazy"
          src='./smile.png'
          className={styles.navIcons}
          alt="Navigation icons"
        />
            <input
              id="commentInput"
              className={styles.commentInput}
              type="text"
              placeholder="Add a comment..."
              aria-label="Add a comment"
            />
          </div>
          <button type="submit" className={styles.postButton}>
            Post
          </button>
        </form>
    </article>
  );
};
