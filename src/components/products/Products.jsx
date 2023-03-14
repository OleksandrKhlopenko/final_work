import { Link } from "react-router-dom";
import FirstProductCard from "./productOne/FirstProductCard";
import SecondProductCard from "./product2/SecondProductCard";
import ThirdProductCard from "./product3/ThirdProductCard";
import FourthProductCard from "./product4/FourthProductCard";
import FifthProductCard from "./product5/FifthProductCard";
import SixthProductCrad from "./product6/SixthProductCrad";
import SeventhProductCard from "./product7/SeventhProductCard";
import EighthProductCard from "./product8/EighthProductCard";
import styles from "../components/../products/Products.module.scss";

const Products = () => {
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.productsTitle}>This Week's Highlights</h2>

        <div className={styles.productsGrid}>
          <FirstProductCard />
          <SecondProductCard />
          <ThirdProductCard />
          <FourthProductCard />
          <FifthProductCard />
          <SixthProductCrad />
          <SeventhProductCard />
          <EighthProductCard />
        </div>

        <div className={styles.productsBottom}>
          <Link to="/wishlist" className={styles.btnOutlinePrimary}>
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
