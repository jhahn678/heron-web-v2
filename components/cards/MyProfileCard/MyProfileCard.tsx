import React from "react";
import styles from './MyProfileCard.module.css'
import Card from '@mui/material/Card'
import Avatar from "@mui/material/Avatar";
import { useAuth } from "../../../hooks/store/useAuth";
import { nameToInitials } from "../../../utils/transforms/nameToInitials";
import { CardContent, Typography } from "@mui/material";

const MyProfileCard = () => {

  const { firstname, lastname, avatar, username } = useAuth()

  return (
    <Card className={styles.card}>
      <Avatar src={avatar} alt={`${firstname} ${lastname}`} className={styles.avatar}>
        {nameToInitials(firstname, lastname)}
      </Avatar>
      <CardContent>
        <Typography variant={'h6'}>{`${firstname} ${lastname} `}</Typography>
        <Typography variant={'body2'}>{`@${username}`}</Typography>
      </CardContent>
    </Card>
  )
};

export default MyProfileCard;
