import { Link } from "react-router-dom";
import { useContext } from "react";
import { store } from "../WishlistConrext/WishlistContext";
import product1 from "../../img/product-01.jpg";
import product2 from "../../img/product-02.jpg";
import product3 from "../../img/product-03.jpg";
import product4 from "../../img/product-04.jpg";
import product5 from "../../img/product-05.jpg";
import product6 from "../../img/product-06.jpg";
import product7 from "../../img/product-07.jpg";
import product8 from "../../img/product-08.jpg";
import FirstProductCard from "./productOne/FirstProductCard";
import SecondProductCard from "./product2/SecondProductCard";
import ThirdProductCard from "./product3/ThirdProductCard";
import FourthProductCard from "./product4/FourthProductCard";
import FifthProductCard from "./product5/FifthProductCard";
import SixthProductCard from "./product6/SixthProductCrad";
import SeventhProductCard from "./product7/SeventhProductCard";
import EighthProductCard from "./product8/EighthProductCard";
import styles from "../components/../products/Products.module.scss";

const Products = () => {
  const { dispatch } = useContext(store);

  const handleAddToWishlist = (item) => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: item,
    });
  };
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.productsTitle}>This Week's Highlights</h2>

        <div className={styles.productsGrid}>
          <FirstProductCard
            id={1}
            name="Flowers cotton dress"
            price="$79.00"
            image={product1}
            handleAddToWishlist={handleAddToWishlist}
          />
          <SecondProductCard
            id={2}
            name="Glasses"
            price="$79.00"
            image={product2}
            handleAddToWishlist={handleAddToWishlist}
          />
          <ThirdProductCard
            id={3}
            name="Hoodie with pocket"
            price="$79.00"
            image={product3}
            handleAddToWishlist={handleAddToWishlist}
          />
          <FourthProductCard
            id={4}
            name="Oversize cotton sweatshirt"
            price="$79.00"
            image={product4}
            handleAddToWishlist={handleAddToWishlist}
          />
          <FifthProductCard
            id={5}
            name="Striped cotton-blend sweatshirt"
            price="$79.00"
            image={product5}
            handleAddToWishlist={handleAddToWishlist}
          />
          <SixthProductCard
            id={6}
            name="Hoodie with pocket"
            price="$79.00"
            image={product6}
            handleAddToWishlist={handleAddToWishlist}
          />
          <SeventhProductCard
            id={7}
            name="Flowers cotton dress"
            price="$79.00"
            image={product7}
            handleAddToWishlist={handleAddToWishlist}
          />
          <EighthProductCard
            id={8}
            name="Hoodie with pocket"
            price="$79.00"
            image={product8}
            handleAddToWishlist={handleAddToWishlist}
          />
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
