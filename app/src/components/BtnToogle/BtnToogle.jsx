/* eslint-disable react/prop-types */
import styles from "./BtnToogle.module.css";
import { Pen } from "lucide-react";

function BtnToogle({ onToogle, classes }) {
  return (
    <button onClick={onToogle} className={`${classes} ${styles.btnToogle}`}>
      <Pen size={16} />
    </button>
  );
}

export default BtnToogle;
