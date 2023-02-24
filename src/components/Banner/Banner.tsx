import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "./Banner.module.css";
import SinglePacksImage from "@/public/images/crosslink-temp.jpeg";
import MixedPacksImage from "@/public/images/MOTH_Mixed_Pack_Banner.png";
import OccasionsImage from "@/public/images/MOTH_Occasion_Pack_Banner.png";
import GiftsImage from "@/public/images/MOTH_Gifts_Banner_c28719f1-c270-4ccb-a1df-248c8de2ce18.png";
import { arrow_right } from "@/src/assets/icons";
import { useEffect, useLayoutEffect, useState } from "react";
const Banner = () => {
  const router = useRouter();
  const [path, setPath] = useState("");
  const paths = [
    "/collections/single-packs",
    "/collections/mixed-packs",
    "/collections/occasions",
    "/collections/merch",
  ];
  const collections = ["Single Packs", "Mixed Packs", "Occasions", "Gitfs"];
  const images = [
    SinglePacksImage,
    MixedPacksImage,
    OccasionsImage,
    GiftsImage,
  ];
  const getIndex = (path: string) => {
    let index = paths.indexOf(path);
    if (index == paths.length - 1) return 0;
    return index + 1;
  };
  useLayoutEffect(() => {
    setPath(router.asPath);
  }, [router.asPath]);
  return (
    <>
      <Link
        href={
          getIndex(path) == 3 ? "/collections/gifts" : paths[getIndex(path)]
        }
      >
        <div className={styles.banner}>
          <Image
            src={images[getIndex(path)]}
            className={styles.banner_image}
            alt="image"
          />
          <span className={styles.banner_text}>
            {collections[getIndex(path)]} &nbsp;
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

export default Banner;
