import {
  arrow_right,
  fb,
  footer_branch,
  ins,
  linkedin,
  moth,
  spotify,
  tiktok,
} from "@/src/assets/icons";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className={styles.wrapper}>
        <div className={styles.inner}>
          <svg
            viewBox="0 0 145 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.moth}
          >
            <g clipPath="url(#clip0_1029_59826)">
              <path
                d="M0 0.441406H9.03437L18.5095 32.3927C18.7718 33.2884 18.9199 34.2138 18.9502 35.1467C18.9502 35.4768 19.0052 35.8079 19.3909 35.8079C19.7765 35.8079 19.8316 35.4768 19.8316 35.1467C19.8618 34.2138 20.0099 33.2884 20.2723 32.3927L29.7474 0.441406H38.7817V39.2231H33.934V6.99646C33.9214 5.95566 34.0512 4.91803 34.3197 3.91238C34.4298 3.47084 34.54 3.14081 34.2094 3.03042C33.8239 2.92004 33.7137 3.14081 33.6034 3.47084L22.6961 39.2231H16.0856L5.17831 3.47083C5.06807 3.1408 4.95782 2.92003 4.57231 3.03041C4.24171 3.1408 4.35196 3.47083 4.46207 3.91237C4.73055 4.91802 4.8603 5.95565 4.84772 6.99645V39.2231H0V0.441406Z"
                fill="currentColor"
              ></path>
              <path
                d="M78.1713 19.8313C78.1713 30.7939 71.2302 39.6626 59.6618 39.6626C48.0935 39.6626 41.1523 30.7939 41.1523 19.8313C41.1523 8.86867 48.0935 0 59.6618 0C71.2301 0 78.1713 8.86866 78.1713 19.8313ZM73.3236 19.8313C73.3236 11.0173 68.2004 3.96603 59.6618 3.96603C51.1232 3.96603 46.0001 11.0173 46.0001 19.8313C46.0001 28.6453 51.1232 35.6965 59.6618 35.6965C68.2004 35.6965 73.3236 28.6453 73.3236 19.8313Z"
                fill="currentColor"
              ></path>
              <path
                d="M104.34 0.441406V4.40745H92.2209V39.2231H87.3732V4.40744H75.2539V0.441406H104.34Z"
                fill="currentColor"
              ></path>
              <path
                d="M136.569 0.441406V39.2231H131.722V21.8158H111.449V39.2231H106.602V0.441406H111.449V17.8487H131.722V0.441406H136.569Z"
                fill="currentColor"
              ></path>
              <path
                d="M145 11.0156V17.1849H138.83V11.0156H145ZM145 33.0513V39.2205H138.83V33.0513H145Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1029_59826">
                <rect width="145" height="39.6626" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        {/* <Link href="/" className={styles.footer_button_mobile}>
          <button>JOIN THE COMUNITY & GET 20% OFF </button>
        </Link> */}
        <div className={`${styles.inner_p_20_40} ${styles.inner}`}>
          <div className={styles.footer_input}>
            <input type="text" placeholder="EMAIL ADDRESS" />
          </div>
          <Link href="/" className={styles.footer_button}>
            <button>JOIN THE COMUNITY & GET 20% OFF </button>
            <Image
              className={styles.btn_arrowright}
              src={arrow_right}
              alt="arrow right"
            />
          </Link>
        </div>
        <div
          className={`${styles.inner_p_20_40} ${styles.inner} ${styles.d_flex_resposive}`}
          style={{
            alignItems: "flex-start",
            padding: "40px 40px",
            borderBottom: "unset",
          }}
        >
          <div className={styles.footer_list}>
            <ul>
              <li className={styles.list_head}>SHOP</li>
              <li>
                <Link href="/">ALL</Link>
              </li>
              <li>
                <Link href="/">SINGLE PACKS</Link>
              </li>
              <li>
                <Link href="/">MIXED PACKS</Link>
              </li>
              <li>
                <Link href="/">OCCASIONS</Link>
              </li>
              <li>
                <Link href="/">GIFTING</Link>
              </li>
              <li>
                <Link href="/">TERMS OF SERVICE</Link>
              </li>
              <li>
                <Link href="/">REFUND POLICY</Link>
              </li>
            </ul>
            <ul>
              <li className={styles.list_head}>ABOUT US</li>
              <li>
                <Link href="/">ABOUT</Link>
              </li>
            </ul>
            <ul>
              <li className={styles.list_head}>HELP</li>
              <li>
                <Link href="/">FAQS</Link>
              </li>
              <li>
                <Link href="/">CONTACT</Link>
              </li>
              <li>
                <Link href="/">SHIPPING</Link>
              </li>
              <li>
                <Link href="/">RETURNS</Link>
              </li>
              <li>
                <Link href="/">TERMS & CONDITIONS</Link>
              </li>
              <li>
                <Link href="/">PRIVACY</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_socials}>
            <p className={styles.social_icons}>
              <span className={styles.padding_13}>
                <Link href="/">
                  <Image src={ins} alt="instagram" width={18} />
                </Link>
              </span>
              <span className={styles.padding_13}>
                <Link href="/">
                  <Image src={fb} alt="facebook" />
                </Link>
              </span>
              <span className={styles.padding_13}>
                <Link href="/">
                  <Image src={tiktok} alt="tiktok" />
                </Link>
              </span>
              <span className={styles.padding_13}>
                <Link href="/">
                  <Image src={spotify} alt="spotify" />
                </Link>
              </span>
              <span className={styles.padding_13}>
                <Link href="/">
                  <Image src={linkedin} alt="linkedin" />
                </Link>
              </span>
            </p>
            <Link href="/">
              <p>Refer a friend get £10!</p>
            </Link>
          </div>
        </div>
        <div
          className={styles.inner}
          style={{
            justifyContent: "flex-start",
            padding: "60px 40px",
          }}
        >
          <Link href="/" className={styles.footer_branch}>
            <Image src={footer_branch} width={160} alt="drinkaware" />
          </Link>
          <span
            style={{
              color: "#f8f8eeb3",
              fontSize: "14px",
            }}
          >
            © 2023 MOTH
          </span>
        </div>
      </footer>
    </>
  );
}
