import React from "react";
import { Spin } from "antd";
import Styles from './spinner.module.css';

const Spinner = ({ style }) => {
  return (
    <div className={Styles.container} style={style}>
      <Spin tip="Loading..." className={Styles.spinner} size="large"/>
    </div>
  );
};

export default Spinner;
