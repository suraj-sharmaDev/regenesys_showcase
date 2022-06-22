/******************************************
 *  Author : Suraj Sharma
 *  Created On : Fri Jun 17 2022
 *  File : index.js
 *******************************************/
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.css";

const CustomDatePicker = ({ data, label, onChange, isError, ...props }) => {
  const onLocalDataChange = (date) => {
    onChange && onChange({target: {value: date}});
  };
  let containerStyles = styles.pickerContainer;
  if (isError) containerStyles = `${styles.pickerContainer} ${styles.errorBoundary}`;
  return (
    <DatePicker
      placeholderText={label}
      wrapperClassName={containerStyles}
      popperClassName={styles.popperContainer}
      selected={data}
      onChange={onLocalDataChange}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  );
};

export default CustomDatePicker;
