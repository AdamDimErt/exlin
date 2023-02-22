import React from 'react';
import styles from '@/styles/main.module.scss'
import main from '@/assets/secondMain.png'
import Image from 'next/image'
import SearchClient from "@//compenents/searchClient/Index";

const Index = () => {
    return (
        <div className={styles.main}>
            <div className={styles.main__left}>
                <div className={styles.main__left_text}>
                    <h1>Доставим ваш
                        груз в любую
                        точку Казахстана</h1>
                    <p>Доставляем сборный груз от 1кг по всей стране
                        узнай стоймость перевозки прямо сейчас</p>
                    <p>Хотите узнать что с вашей доставкой </p>

                </div>
                <SearchClient/>
            </div>

        </div>
    );
};

export default Index;