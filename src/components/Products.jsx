import { Link } from "react-router-dom";
import styles from "../components/Products.module.scss";

import product1 from "../img/product-01.jpg";
import product2 from "../img/product-02.jpg";
import product3 from "../img/product-03.jpg";
import product4 from "../img/product-04.jpg";
import product5 from "../img/product-05.jpg";
import product6 from "../img/product-06.jpg";
import product7 from "../img/product-07.jpg";
import product8 from "../img/product-08.jpg";

const Products = () => {
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.productsTitle}>This Week's Highlights</h2>

        <div className={styles.productsGrid}>
          <div className={styles.product}>
            <div class={styles.productsImage}>
              <a href="/" className={styles.productsImageBlock}>
                <img src={product1} alt="Product 01" />
              </a>

              <a href="/" className={styles.addToWishlist}>
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
              </a>
            </div>
            <div className={styles.ProductBody}>
              <h3>
                <a href="/">Flowers cotton dress</a>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.product}>
            <div class={styles.productsImage}>
              <a href="/" className={styles.productsImageBlock}>
                <img src={product2} alt="Product 02" />
              </a>

              <a href="/" className={styles.addToWishlist}>
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
              </a>
            </div>
            <div className={styles.ProductBody}>
              <h3>
                <a href="/">Flowers cotton dress</a>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.product}>
            <div className={styles.productsImage}>
              <a href="/" className={styles.productsImageBlock}>
                <img src={product3} alt="Product 03" />
              </a>

              <a href="/" className={styles.addToWishlist}>
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
              </a>
            </div>
            <div className={styles.productBody}>
              <h3>
                <a href="/">Hoodie with pocket</a>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.product}>
            <div className={styles.productsImage}>
              <a href="/" className={styles.productsImageBlock}>
                <img src={product4} alt="Product 04" />
              </a>

              <a href="/" className={styles.addToWishlist}>
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
              </a>
            </div>
            <div className={styles.productBody}>
              <h3>
                <a href="/">Oversize cotton sweatshirt</a>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.product}>
            <div className={styles.productsImage}>
              <a href="/" className={styles.productsImageBlock}>
                <img src={product5} alt="Product 05" />
              </a>

              <a href="/" className={styles.addToWishlist}>
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
              </a>
            </div>
            <div className={styles.productBody}>
              <h3>
                <a href="/">Oversize cotton sweatshirt</a>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.product}>
            <div className={styles.productsImage}>
              <a href="/" className={styles.productsImageBlock}>
                <img src={product6} alt="Product 06" />
              </a>

              <a href="/" className={styles.addToWishlist}>
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
              </a>
            </div>
            <div className={styles.productBody}>
              <h3>
                <a href="/">Oversize cotton sweatshirt</a>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.product}>
            <div className={styles.productsImage}>
              <a href="/" className={styles.productsImageBlock}>
                <img src={product7} alt="Product 07" />
              </a>

              <a href="/" className={styles.addToWishlist}>
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
              </a>
            </div>
            <div className={styles.productBody}>
              <h3>
                <a href="/">Oversize cotton sweatshirt</a>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.product}>
            <div className={styles.productsImage}>
              <a href="/" className={styles.productsImageBlock}>
                <img src={product8} alt="Product 08" />
              </a>

              <a href="/" className={styles.addToWishlist}>
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
              </a>
            </div>
            <div className={styles.productBody}>
              <h3>
                <a href="/">Oversize cotton sweatshirt</a>
              </h3>
              <p>$79.00</p>
            </div>
          </div>
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
