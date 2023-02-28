import Image, { StaticImageData } from "next/image";
import styles from "./Medias.module.css";

const Medias = ({ medias }: { medias: StaticImageData[] }) => {
  console.log(medias);
  return (
    <>
      <div className={styles.wrapper}>
        <ul>
          {medias &&
            medias.map((media, index) => (
              <li key={index}>
                <Image className={styles.media} src={media} alt="image" />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Medias;
