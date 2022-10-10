import React from "react";
import styles from "./ButtonBlock.module.css";
import useBoolean from "../../hooks/useBoolean";

const ButtonBlock = (props) => {
  const { isToggle } = props;
  const [toggle, { setToggle, setTrue, setFalse }] = useBoolean(false);
  const handleToggle = () => setToggle(!toggle);

  if (isToggle) {
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
  }

  return (
    <div className={styles.container}>
      <button className={styles.toggleButton} type="button" onClick={setTrue}>
        It was always true!
      </button>
      <button className={styles.toggleButton} type="button" onClick={setFalse}>
        No, you are wrong.
      </button>
      <span className={styles.toggleStatus}>{toggle.toString()}</span>
    </div>
  );
};

export default ButtonBlock;
