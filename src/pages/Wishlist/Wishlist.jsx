import WishlistCard from "../../components/Wishlist/WishlistCard";

import styles from "../pages/../Wishlist/Wishlist.module.scss";

const Wishlist = () => {
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.wishlistTitle}>Wishlist</h2>
        <WishlistCard/>
        <WishlistCard/>
        
      </div>
    </div>
  );
};

export default Wishlist;
