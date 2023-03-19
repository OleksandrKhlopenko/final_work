import { Link } from "react-router-dom";
import { useContext } from "react";
import { store } from "../../WishlistConrext/WishlistContext";
import styles from "../Products.module.scss";
import product3 from "../../../img/product-03.jpg";

const ThirdProductCard = ({ id, name, price, image }) => {
  const { dispatch } = useContext(store);

  const handleAddToWishlist = () => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: { id, name, price, image },
    });
  };

  return (
    <div className={styles.product}>
      <div className={styles.productsImage}>
        <Link
          to="/Wishlist"
          onClick={() => handleAddToWishlist({ id, name, price, image })}
          className={styles.productsImageBlock}
        >
          <img src={product3} alt="Product 04" />
        </Link>

        <Link to="/Wishlist" className={styles.addToWishlist}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </Link>
      </div>
      <div className={styles.productBody}>
        <h3>
          <Link
            to="/Wishlist"
            onClick={() => handleAddToWishlist({ id, name, price, image })}
          >
            Hoodie with pocket
          </Link>
        </h3>
        <p>$79.00</p>
      </div>
    </div>
  );
};

export default ThirdProductCard;
