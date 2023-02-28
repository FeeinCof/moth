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
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.toggle_icon}
          >
            <path
              d="M7.49609 0.5L7.49609 13.5"
              stroke="currentColor"
              strokeWidth="1.7"
            ></path>
            <path
              d="M0.996094 7L13.9961 7"
              stroke="currentColor"
              strokeWidth="1.7"
            ></path>
          </svg>
        ) : (
          <svg
            width="12"
            height="13"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.toggle_icon}
          >
            <line
              x1="1.69922"
              y1="15.3202"
              x2="16.018"
              y2="1.00135"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            ></line>
            <line
              x1="1.41421"
              y1="1"
              x2="15.733"
              y2="15.3188"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            ></line>
          </svg>
        )}
      </div>
      {isOpen && <div className={styles.wrapper}>{children}</div>}
    </div>
  );
};

export default Popper;
