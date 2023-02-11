import styles from "./PackGroup.module.css";
import { PackItem } from "@/src/components";
const PackGroup = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <>
      <div className={styles.wrapper}>
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
