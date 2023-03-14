import NavBarStarIcon from "./navBarStarIcon/NavBarStarIcon";
import NavBarBagIcon from "./navBarBagIcon/NavBarBagIcon";
import styles from "../components/../Header/Header.module.scss";

import blackLogo from "../../img/logo-black.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contain}>
        <div className={styles.headerWrapper}>
          <a href="/">
            <img src={blackLogo} alt="Logotype" />
          </a>
          <div className={styles.navbar}>
            <ul>
              <li>
                <NavBarStarIcon/>
              </li>
              <li>
               <NavBarBagIcon/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
