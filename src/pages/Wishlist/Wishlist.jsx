import WihlistCard from "../../components/Wishlist/WihlistCard";
import WihlistCard2 from "../../components/Wishlist/WishlistCard2";
import styles from "../pages/../Wishlist/Wishlist.module.scss";

const Wishlist = () => {
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.wishlistTitle}>Wishlist</h2>
        <WihlistCard/>
        <WihlistCard2/>
        
      </div>
    </div>
  );
};

export default Wishlist;
