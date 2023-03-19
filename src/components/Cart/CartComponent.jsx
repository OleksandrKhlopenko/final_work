import { Link } from "react-router-dom";
import styles from "../Cart/CartComponent.module.scss";
import product7 from "../../img/product-07.jpg";

const CartModule = () => {
  return (
    <div className={styles.cartList}>
      <div className={styles.item}>
        <div className={styles.itemContent}>
          <button href="#" className={styles.deleteBtn}>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            <i className={styles.falFaTimes}></i>
          </button>

          <img
            src={product7}
            className={styles.itemImage}
            alt="Partridge Bar Stool"
          />

          <div>
            <p className={styles.itemCategory}>Dress</p>
            <Link href="#" className={styles.itemName}>
              Oversize cotton sweatshirt
            </Link>
          </div>
        </div>

        <p>$750.00</p>
      </div>
    </div>
  );
};

export default CartModule;
