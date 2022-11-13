import React from "react";
import styles from './FeatureSlider.module.css'

interface Props {
    index: number
}

const FeatureSliderPagination = ({ index }: Props) => {

    return (
        <div className={styles.pagination}>
            <div className={`${styles.page} ${index === 0 && styles.pageActive}`}/>
            <div className={`${styles.page} ${index === 1 && styles.pageActive}`}/>
            <div className={`${styles.page} ${index === 2 && styles.pageActive}`}/>
        </div>
    )
};

export default FeatureSliderPagination;
