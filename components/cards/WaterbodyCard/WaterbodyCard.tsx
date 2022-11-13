import React from "react";
import styles from './WaterbodyCard.module.css'
import Image from "next/image";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import Stack from "@mui/system/Stack";
import { WaterbodyListItem } from "../../../types/Waterbody";
import { waterbodyLocationLabel } from "../../../utils/transforms/waterbodyLocationToLabel";
import { truncateTotal } from "../../../utils/transforms/truncateTotal";
import { FaStar } from 'react-icons/fa'

interface Props {
    data: WaterbodyListItem
}

const WaterbodyCard = ({ data }: Props) => {

    const router = useRouter()
    const handleClick = () => router.push(`/waterbody/${data.id}`)

    return (
        <div className={styles.container} onClick={handleClick}>
            <div className={styles.image}>
                <Image 
                    src={data.media[0]?.url || '/default-background.png'} 
                    fill={true} style={{ objectFit: 'cover' }}
                    alt={`Image of ${data.name}`}
                />
            </div>
            <div className={styles.content}>
                <Stack>
                    <div className={'frsb'}>
                        <Typography variant="h5" fontWeight={500}>{"Swatara Creek"}</Typography>
                        <div className='frac'>
                            5<FaStar color={'var(--yellow)'} size={20} className={styles.star}/>
                        </div>
                    </div>
                    <Typography>{"Pennsylvania, United States"}</Typography>
                    <Typography variant="body2" paddingTop={2}>
                        {8} catches logged
                        {"  "}&bull;{"  "}
                        {4} saved locations
                    </Typography>
                    {/* <div className={'frsb'}>
                        <Typography variant="h5" fontWeight={500}>{"Swatara Creek"}</Typography>
                        <div className='frac'>
                            {data.average_rating || 0}<FaStar color={'var(--yellow)'} size={20}/>
                        </div>
                    </div>
                    <Typography>{waterbodyLocationLabel(data)}</Typography>
                    <Typography>
                        {truncateTotal(data.total_catches)} catches logged
                        {"  "}&bull;{"  "}
                        {truncateTotal(data.total_locations)} saved locations
                    </Typography> */}
                </Stack>
            </div>
        </div>  
    );
};

export default WaterbodyCard;
