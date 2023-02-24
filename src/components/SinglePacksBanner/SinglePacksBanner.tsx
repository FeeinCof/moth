import Link from "next/link";
import Image from "next/image";
import styles from "./SinglePacksBanner.module.css";
import giftsImage from "@/public/images/Collection_Crosslink_Banner_Desktop_Single_Pack.png";
import giftImageMobile from "@/public/images/Collection_Crosslink_Banner_Mobile_Single_Pack.png";
import { arrow_right } from "@/src/assets/icons";
const SinglePackBanner = () => {
  return (
    <>
      <Link href="/collections/single-packs">
        <div className={styles.banner}>
          <Image src={giftsImage} className={styles.banner_image} alt="image" />
          <Image
            src={giftImageMobile}
            className={styles.banner_image_mobile}
            alt="image"
          />
          <span className={styles.banner_text}>
            SINGLE PACKS &nbsp;
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

export default SinglePackBanner;
