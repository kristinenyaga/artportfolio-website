"use client"
import styles from "./navbarstyles.module.scss";
import Link from "next/link"; 
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const hideMenu = () => setShowMenu(false);

  return (
    <div className={styles.container}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <Link href="/">
          {/* <Image src={logo} alt="Afyalife foundation logo" width={100} height={50} /> */}
        </Link>
        <h6>
          <Link href="/">
            <span>Kim Bronze</span> Sculptures
          </Link>
        </h6>
      </div>

      {/* Nav Links */}
      <div className={`${styles.nav_links} ${showMenu ? styles.showMenu : ""}`}>
        <h6>
          <Link href="/about" onClick={hideMenu}>
            Home 
          </Link>
        </h6>
        <h6>
          <Link href="/events" onClick={hideMenu}>
            About
          </Link>
        </h6>
        <h6>
          <Link href="/gallery" onClick={hideMenu}>
            Collection
          </Link>
        </h6>
        <h6>
          <Link href="/services" onClick={hideMenu}>
            Services
          </Link>
        </h6>
      </div>

      {/* Donate Button and Menu Icon for mobile */}
      <div className={styles.btn_wrapper}>
        <Link href="/donate">
          <button
            className={styles.btn}
          >
            <p>Contact</p>
          </button>
        </Link>

        {/* Menu Icon for toggling mobile menu */}
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <RxHamburgerMenu className="text-[30px] text-[#6b3e2e] font-medium" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
