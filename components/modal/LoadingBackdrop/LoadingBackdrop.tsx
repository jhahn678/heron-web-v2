import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import styles from './LoadingBackdrop.module.css'

const LoadingBackdrop = () => {
  return (
    <div className={styles.backdrop}>
        <CircularProgress size={48} color={'secondary'}/>
    </div>
  )
};

export default LoadingBackdrop;
