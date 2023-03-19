import ItemDeleteButton from "./Buttons/ItemDeleteButton"
import Button from "./Buttons/Button"
import styles from "../../pages/Wishlist/Wishlist.module.scss"
import image07 from "../../img/product-07.jpg"

const WihlistCard = () => {
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
             <Button/>
            </div>
          </div>
  )
}

export default WihlistCard