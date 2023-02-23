import React from 'react';
import Image from "next/image";
import company from '@/assets/company.png'
import styles from '@/styles/info.module.scss'

const Index = () => {
    return (
        <div id={'about-us'}>
            <h1 className={'title'}>О компании</h1>
             <div className={styles.container}>
                <div className={styles.container__info}>
                    <h2 className={styles.container__info_title}>
                        О компании
                    </h2>
                    <p className={styles.container__info_text}>
                        Наша команда профессионалов всегда готова предоставить нашим клиентам наилучший сервис и решить любые проблемы,
                        которые могут возникнуть в процессе перевозки грузов. Мы заботимся о наших клиентах и стараемся предложить индивидуальные
                        решения для каждого конкретного случая.

                        Если вам нужна надежная компания, которая сможет обеспечить безопасную и быструю перевозку ваших грузов, обратитесь к нам.
                        Мы готовы предложить вам высококачественный сервис по приемлемым ценам.
                    </p>
                </div>
                 <div className={styles.container__info}>
                    <Image src={company} alt={'company'}/>
                 </div>
            </div>
        </div>
    );
};

export default Index;