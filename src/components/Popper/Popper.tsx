import { close, plus, remove } from "@/src/assets/icons";
import Image from "next/image";
import { ReactNode, useState } from "react";
import styles from "./Popper.module.css";

const Popper = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const hanleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <div className={`${styles.popper} ${isOpen && styles.popper_isopen}`}>
      <div className={styles.title} onClick={() => hanleClick()}>
        <p>{title}</p>
        {!isOpen ? (
          <Image src={plus} alt="icon" className={styles.toggle_icon} />
        ) : (
          <Image
            src={close}
            width={12}
            alt="icon"
            className={styles.toggle_icon}
          />
        )}
      </div>
      {isOpen && <div className={styles.wrapper}>{children}</div>}
    </div>
  );
};

export default Popper;
