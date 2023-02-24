import Image from "next/image";
import styles from "./PackGroup.module.css";
import { PackItem } from "@/src/components";
import giftsImage from "@/public/images/MOTH_Gifts_Banner_c28719f1-c270-4ccb-a1df-248c8de2ce18.png";
const PackGroup = ({
  data,
  lineBottom = true,
}: {
  data: any;
  lineBottom?: boolean;
}) => {
  return (
    <>
      <div className={`${styles.wrapper} ${lineBottom && styles.lineBottom}`}>
        <div className={styles.header}>
          <div className={styles.title}>{data.name}</div>
          <div className={styles.des}>{data.description}</div>
        </div>
        <div className={styles.body}>
          {data &&
            data.items.map((item, index) => (
              <div className={styles.item} key={index}>
                <PackItem props={item} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default PackGroup;
