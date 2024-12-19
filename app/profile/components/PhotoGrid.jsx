import React from "react";
import styles from "../styles/PhotoGrid.module.css";

const PhotoGrid = ({ photos }) => {
  return (
    <div className={styles.photoGrid}>
      {photos.map((photo, index) => (
        <div key={index} className={styles.photoItem}>
          <img src={photo.url} alt={photo.description} />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
