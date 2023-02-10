import Link from "next/link";
import styles from "./NavCollections.module.css";

const NavCollection = () => {
  return (
    <nav className={styles.wrapper}>
      <ul>
        <li className={styles.active}>
          <Link href="/collections">ALL</Link>
        </li>
        <li>
          <Link href="/collections/single-packs">SINGLE PACKS</Link>
        </li>
        <li>
          <Link href="/collections/mixed-packs">MIXED PACKS</Link>
        </li>
        <li>
          <Link href="/collections/occasions">OCCASIONS</Link>
        </li>
        <li>
          <Link href="/collections/MERCH">MERCH</Link>
        </li>
        <li>
          <Link href="/collections/gifts">GIFTS</Link>
        </li>
      </ul>
      <span>
        <Link href="">STOCKISTS</Link>
      </span>
    </nav>
  );
};

export default NavCollection;
