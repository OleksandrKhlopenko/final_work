import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import styles from "../src/App.module.scss";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <div className={styles.App}>

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes>
    </div>
  );
}

export default App;
