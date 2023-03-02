import React from "react";
import Image from "next/image";
import {CardProps} from "@/compenents/card/Index";
import styles from '../../styles/card.module.scss'




const Card:React.FC<CardProps> = ({title,text,src,alt}:CardProps) => {

    return (
        <div className={styles.advantaged__block}>
            <div className={styles.advantaged__container}>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
    <Image src={src} alt={alt}/>
        </div>
    );
};

export default Card;