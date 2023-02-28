import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDetectScroll } from "@smakss/react-scroll-direction";
import styles from "./Header.module.css";
import {
  logo,
  moth,
  user,
  cart,
  hamburger_sticky,
  close,
} from "@/src/assets/icons";

export default function Header() {
  const [isNavShow, setNavShow] = useState(false);
  const [isHeaderFixed, setHeaderFixed] = useState(false);
  const toggleNavbar = () => {
    setNavShow(!isNavShow);
  };
  const [scrollDir] = useDetectScroll({});
  useEffect(() => {
    const scrollHandle = () => {
      if (window.scrollY > 68.2) {
        scrollDir == "up" ? setHeaderFixed(true) : setHeaderFixed(false);
      }
      if (window.scrollY == 0) {
        setHeaderFixed(false);
      }
    };
    window.addEventListener("scroll", scrollHandle);
    return () => window.removeEventListener("scroll", scrollHandle);
  }, [scrollDir]);
  return (
    <>
      <header className={`${styles.wrapper} ${isHeaderFixed && styles.fixed}`}>
        <Image
          className={`${styles.logo} ${!isHeaderFixed && styles.disapere}`}
          src={logo}
          width={70}
          alt="Logo"
        />
        <Image
          className={`${styles.logo} ${isHeaderFixed && styles.disapere}`}
          src={moth}
          width={100}
          alt="MOTH"
        />
        <nav className={styles.nav_desktop}>
          <ul>
            <li>
              <Link href="/">SHOP</Link>
            </li>
            <li>
              <Link href="/">GIFTS</Link>
            </li>
            <li>
              <Link href="/">STORIES</Link>
            </li>
            <li>
              <Link href="/">ABOUT</Link>
            </li>
          </ul>
          <div className={styles.header_icons}>
            <span className={styles.hide_on_desktop}>
              {isNavShow ? (
                <Image
                  onClick={() => toggleNavbar()}
                  src={close}
                  alt="icon"
                  width={20}
                />
              ) : (
                <Image
                  onClick={() => toggleNavbar()}
                  src={hamburger_sticky}
                  alt={"icon"}
                  width={20}
                />
              )}
            </span>
            <span className={styles.hide_on_mobile}>
              <Image src={user} alt="login" width={16} />
            </span>
            <span>
              <Image src={cart} alt="Add to card" width={22}></Image>
            </span>
          </div>
        </nav>
      </header>
      {isNavShow && (
        <nav className={styles.nav_mobile}>
          <ul>
            <li>
              <Link href="/">SHOP</Link>
            </li>
            <li>
              <Link href="/">GIFTS</Link>
            </li>
            <li>
              <Link href="/">STORIES</Link>
            </li>
            <li>
              <Link href="/">ABOUT</Link>
            </li>
            <li>
              <Link href="/">ACCOUNT</Link>
            </li>
            <li className={styles.nav_icons}>
              <Link href="/">
                <span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 18"
                    width={18}
                  >
                    <path
                      fill="#000"
                      d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"
                    ></path>
                    <path
                      fill="#000"
                      d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z"
                    ></path>
                  </svg>
                </span>
              </Link>
              <Link href="/">
                <span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                  >
                    <path
                      d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                      fill="#000"
                    ></path>
                  </svg>
                </span>
              </Link>
              <Link href="/">
                <span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    width={20}
                    style={{
                      transform: "translateY(2px)",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.02 0H11s-.17 3.82 4.13 4.1v2.95s-2.3.14-4.13-1.26l.03 6.1a5.52 5.52 0 11-5.51-5.52h.77V9.4a2.5 2.5 0 101.76 2.4L8.02 0z"
                      fill="#000"
                    ></path>
                  </svg>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
