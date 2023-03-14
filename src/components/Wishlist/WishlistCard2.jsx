import ItemDeleteButton from "./Buttons/ItemDeleteButton"
import ItemButton from "./Buttons/ItemButton"
import styles from "../../pages/Wishlist/Wishlist.module.scss"
import image07 from "../../img/product-07.jpg"

const WihlistCard2 = () => {
  return (
    <div className={styles.item}>
            <div className={styles.itemContent}>
             <ItemDeleteButton/>

              <div className={styles.itemBody}>
                <img
                  src={image07}
                  alt="Flowers cotton dress"
                  className={styles.itemImage}
                />

                <div className={styles.mediaBodyMw210}>
                  <p className={styles.itemTitle}>Flowers cotton dress</p>
                  <p className={styles.itemPrice}>$29.00</p>
                </div>
              </div>
            </div>
            <div className={styles.itemButtons}>
             <ItemButton/>
            </div>
          </div>
  )
}

export default WihlistCard2