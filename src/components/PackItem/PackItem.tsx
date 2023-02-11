import Image from "next/image";
import styles from "./PackItem.module.css";
import image from "@/public/images/Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png";
const PackItem = ({ props }: { props: any }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.image_group}>
          <Image className={styles.image} src={image} alt="image" />
          <span className={styles.special}>Bestseller</span>
          <ul className={styles.size}>
            <li>
              <span>6</span>
            </li>
            <li>
              <span>12</span>
            </li>
            <li>
              <span>24</span>
            </li>
          </ul>
        </div>
        <div className={styles.body}>
          <span className={styles.name}>Margarita</span>
          <span className={styles.price}>
            <sup>from </sup>
            £20
          </span>
        </div>
      </div>
    </>
  );
};

export default PackItem;
