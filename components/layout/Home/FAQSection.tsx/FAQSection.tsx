import React from "react";
import styles from './section.module.css'
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";

const FAQSection = () => {

    const router = useRouter()
    const handleContact = () => router.push('/contact')
    const handleFAQ = () => router.push('/faq')

    return (
        <section className={styles.container}>
            <div className={styles.card}>
                <Typography variant={'h4'} fontWeight={500}>Looking for help?</Typography>
                <Typography variant={'h6'}>
                    Check out the FAQ below. If your question still isn’t answered, contact us here.
                </Typography>
                <Stack direction={'row'} gap={2} justifyContent={'flex-end'}>
                    <Button onClick={handleContact}>Contact Us</Button>
                    <Button variant="contained" onClick={handleFAQ}>FAQ</Button>
                </Stack>
            </div>
        </section>
    );
};

export default FAQSection;
