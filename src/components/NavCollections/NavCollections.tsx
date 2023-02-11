import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavCollections.module.css";

const NavCollection = () => {
  const router = useRouter();
  return (
    <nav className={styles.wrapper}>
      <ul>
        <li
          className={router.asPath === "/collections" ? styles.active : "null"}
        >
          <Link href="/collections">ALL</Link>
        </li>
        <li
          className={
            router.asPath === "/collections/single-packs"
              ? styles.active
              : "null"
          }
        >
          <Link href="/collections/single-packs">SINGLE PACKS</Link>
        </li>
        <li
          className={
            router.asPath === "/collections/mixed-packs"
              ? styles.active
              : "null"
          }
        >
          <Link href="/collections/mixed-packs">MIXED PACKS</Link>
        </li>
        <li
          className={
            router.asPath === "/collections/occasions" ? styles.active : "null"
          }
        >
          <Link href="/collections/occasions">OCCASIONS</Link>
        </li>
        <li
          className={
            router.asPath === "/collections/merch" ? styles.active : "null"
          }
        >
          <Link href="/collections/merch">MERCH</Link>
        </li>
        <li
          className={
            router.asPath === "/collections/gifts" ? styles.active : "null"
          }
        >
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
