import Link from "next/link";
import Image from "next/image";
import styles from "./GiftsBanner.module.css";
import giftsImage from "@/public/images/MOTH_Gifts_Banner_c28719f1-c270-4ccb-a1df-248c8de2ce18.png";
import { arrow_right } from "@/src/assets/icons";
const GiftsBanner = () => {
  return (
    <>
      <Link href="collections/gifts">
        <div className={styles.banner}>
          <Image src={giftsImage} className={styles.banner_image} alt="image" />
          <span className={styles.banner_text}>
            GIFTS &nbsp;
            <Image
              src={arrow_right}
              alt="icon"
              width={42}
              className={styles.arrow_right}
            />
          </span>
        </div>
      </Link>
    </>
  );
};

export default GiftsBanner;
