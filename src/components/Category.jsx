import React from "react";
import styles from "../components/Category.module.scss";
import banner20 from "../img/banner-20.jpg";
import banner21 from "../img/banner-21.jpg";
import banner22 from "../img/banner-22.jpg";

const Category = () => {
  return (
    <div>
      <section className={styles.category}>
        <div className={styles.container}>
          <h2 className={styles.categoryTitle}>This Season Collection</h2>
          <div className={styles.categoryGrid}>
            <div className={styles.categoryItem}>
              <img src={banner20} alt="Glasses" />

              <div className={styles.categoryOverlay}>
                <a href="/" className={styles.btnbtnDark}>
                  Glasses
                </a>
              </div>
            </div>

            <div className={styles.categoryItem}>
              <img src={banner21} alt="Sneakers" />

              <div className={styles.categoryOverlay}>
                <a href="/" className={styles.btnbtnDark}>
                  Sneakers
                </a>
              </div>
            </div>

            <div className={styles.categoryItem}>
              <img src={banner22} alt="Handbags" />

              <div className={styles.categoryOverlay}>
                <a href="/" className={styles.btnbtnDark}>
                  Handbags
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
