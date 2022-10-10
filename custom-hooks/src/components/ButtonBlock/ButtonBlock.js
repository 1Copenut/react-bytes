import React from "react";
import useBoolean from "../../hooks/useBoolean";
import styles from "./ButtonBlock.module.css";

const ButtonBlock = () => {
  const [toggle, { setToggle }] = useBoolean(false);
  const handleToggle = () => setToggle(!toggle);

  return (
    <div className={styles.container}>
      <button
        className={styles.toggleButton}
        type="button"
        onClick={handleToggle}
      >
        Toggle now!
      </button>
      <span className={styles.toggleStatus}>{toggle.toString()}</span>
    </div>
  );
};

export default ButtonBlock;
