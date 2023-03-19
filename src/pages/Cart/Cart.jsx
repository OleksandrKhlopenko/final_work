import CartComponent from "../../components/Cart/CartComponent";
import styles from "../Cart/Cart.module.scss";
const Cart = () => {
  return (
    <div>
      <h1 className={styles.cartTitle}>Shopping Cart</h1>

      <div className={styles.container}>
        <div className={styles.cartGrid}>
          <CartComponent />

          <div className={styles.summary}>
            <h4 className={styles.summaryTitle}>Summary</h4>

            <div className={styles.summaryBody}>
              <div className={styles.summaryLine}>
                <div>Total</div>
                <div>$2020.00</div>
              </div>
            </div>

            <button type="submit" className={styles.btnFullWidth}>
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
