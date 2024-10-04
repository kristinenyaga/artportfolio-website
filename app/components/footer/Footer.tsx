
import styles from "./footer.module.scss";
import Link from "next/link";
const FooterComponent = () => {

  return (
    <div className={styles.container}>
      <div className={styles.container_content}>

        <div
          className={`${styles.footer_content} grid gap-5 md:gap-5 grid-cols-1 md:grid-cols-3 mb-3  mt-3 `}
        >
          <div className={styles.afyalife}>
            <h1>KIM BRONZE</h1>
            <p>
              Kim Bronze Sculptures is dedicated to bringing the essence of Africa&apos;s
              wildlife to life through handcrafted art. With decades of experience,
              Kimani Kiarie transforms raw materials into timeless pieces, reflecting
              the beauty and spirit of African nature.
            </p>
          </div>

          <div className={styles.links}>
            <h4>Quick Links</h4>

            <ul>
              <li>
                <Link href="/about">home</Link>
                
              </li>
              <li>
                <Link href="/events">About</Link>
              </li>
              <li>
                <Link href="/gallery">Collection</Link>
              </li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h4>Contact Us</h4>

            <ul>
              <li>
               P.O BOX 686-0028 Ngong Hills
              </li>
              <li>Mobile: (+254) 733 622 883</li>
              <li>cell: (+254) 789 326 203</li>
              <li>Email : kimkiarie@kimbronze.co.ke</li>
            </ul>
          </div>
        </div>

        <div className={styles.legal_container}>
          <div className={styles.legal_parent}>
            <p>
              &copy;{new Date().getFullYear()} &nbsp; Kim Bronze Sculptures. All
              rights reserved.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
