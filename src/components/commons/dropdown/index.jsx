/******************************************
 *  Author : Suraj Sharma
 *  Created On : Tue Mar 29 2022
 *  File : index.jsx
 *******************************************/
import styles from "./Dropdown.module.css";

const CustomDropDown = ({ data, label, onChange, isError, ...props }) => {
  const onLocalDataChange = (e) => {
    onChange && onChange(e);
  } 

  let containerStyles = styles.courseDropDownContainer;
  if (isError) containerStyles = `${styles.courseDropDownContainer} ${styles.errorBoundary}`;

  return (
    <div className={containerStyles}>
      <select className={styles.dropdown} onChange={onLocalDataChange} defaultValue={label}>
        <option value={label} disabled>{label}</option>
        {
          data.map((d, idx)=>
            <option value={d} key={idx}>{d}</option>
          )
        }
      </select>
  </div>
  );
};

export default CustomDropDown;
