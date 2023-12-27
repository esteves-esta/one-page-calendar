/* eslint-disable react/prop-types */
import styles from "./BtnToogle.module.css";
import { Settings } from "lucide-react";

function BtnToogle({ onToogle, classes }) {
  return (
    <button onClick={onToogle} className={`${classes} ${styles.btnToogle}`}>
      <Settings size={16} />
    </button>
  );
}

export default BtnToogle;
