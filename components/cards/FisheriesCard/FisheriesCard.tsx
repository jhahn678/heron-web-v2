import React from "react";
import styles from './FisheriesCard.module.css'
import { Typography } from "@mui/material";

const FisheriesCard = () => {
    return (
        <div className={styles.container}>
            <Typography variant="h3" fontWeight={700} color={'primary'}>300k+</Typography>
            <Typography variant="h4" fontWeight={500}>Fisheries to explore</Typography>
        </div>
    );
};

export default FisheriesCard;
