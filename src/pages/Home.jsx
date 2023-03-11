import styles from "../pages/Home.module.scss"
import Header from '../components/Header'
import Banner from "../components/Banner"

const Home = () => {
  return (
    <body className={styles.body}>
<Header/>
<Banner/>
    </body>
  )
}

export default Home