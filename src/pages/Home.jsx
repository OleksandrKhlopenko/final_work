import React from "react"
import styles from "../pages/Home.module.scss"
import Header from '../components/Header'
import Banner from "../components/Banner"
import Category from "../components/Category"
import Products from "../components/Products"


const Home = () => {
  return (
    <div className={styles.body}>
<Header/>
<Banner/>
<Category/>
<Products/>
    </div>
  )
}

export default Home