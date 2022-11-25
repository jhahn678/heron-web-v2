import React from "react";
import styles from './Page.module.css'

interface Props {
    className?: string
    children: React.ReactNode
}

const Page = ({ children, className }: Props) => {
    return(
        <div className={`${styles.page} ${className}`}>{children}</div>
    );
};

export default Page;
