import styles from "../components/Banner.module.scss"
import homeImage  from "../img/image-home-07.jpg"

const Banner = () => {
  return (
    <section className="Banner">
    <div className={styles.container}>
    <div classNAme={styles.bannerWrapper}>
      <img src={homeImage } alt="homeImage" />
      <div class={ styles.bannerOverlay}>
        <div>
          <h1 className={styles.bannerTitle}>Waffle Hooded Coat</h1>
          <a href="/" classNAme={styles.btnDark}>Shop Now</a>
        </div>
      </div>
    </div>
  </div>
  </section>



  )
}

export default Banner