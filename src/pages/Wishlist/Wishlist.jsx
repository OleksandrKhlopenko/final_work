import WishlistCard from "../../components/Wishlist/WishlistCard";
import React, { useContext } from "react";
import { store } from "../../components/WishlistConrext/WishlistContext";
import styles from "../pages/../Wishlist/Wishlist.module.scss";

const Wishlist = () => {
  const { state, dispatch } = useContext(store);

  const handleRemoveFromWishlist = (id) => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: id,
    });
  };
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.wishlistTitle}>Wishlist</h2>

        {state.wishlist.map((item) => (
          <WishlistCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            onRemove={() => handleRemoveFromWishlist(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
