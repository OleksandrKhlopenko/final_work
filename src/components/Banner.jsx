import { Link } from "react-router-dom";
import styles from "../components/Banner.module.scss";
import homeImage from "../img/image-home-07.jpg";

const Banner = () => {
  return (
    <section className="Banner">
      <div className={styles.container}>
        <div className={styles.bannerWrapper}>
          <img src={homeImage} alt="homeImage" />
          <div class={styles.bannerOverlay}>
            <div>
              <h1 className={styles.bannerTitle}>Waffle Hooded Coat</h1>
              <Link to="/wishlist" className={styles.btnDark}>
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
