import styles from "../pages/../Home/Home.module.scss";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/category/Category";
import Products from "../../components/products/Products";

const Home = () => {
  return (
    <div className={styles.body}>
      <Header />
      <Banner />
      <Category />
      <Products />
    </div>
  );
};

export default Home;
