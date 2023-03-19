import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Wishlist from "./pages/Wishlist/Wishlist";
import styles from "../src/App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
