/* eslint-disable react/prop-types */
import styles from "./BtnToogle.module.css";
import { Settings } from "lucide-react";

function BtnToogle({ onToogle, classes = "", icon: Icon }) {
  return (
    <button onClick={onToogle} className={`${classes} ${styles.btnToogle}`}>
      {!Icon && <Settings size={16} />}
      {Icon && <Icon size={16} />}
    </button>
  );
}

export default BtnToogle;
