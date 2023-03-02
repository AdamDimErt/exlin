import React from 'react';

// image
import timeSvg from '@/assets/time.svg'
import avatarSvg from '@/assets/avatar.svg'
import boxSvg from '@/assets/box.svg'
import cardSvg from '@/assets/card.svg'
import mapSvg from '@/assets/map.svg'
import tengeSvg from '@/assets/tenge.svg'


import Card from "@/compenents/card/Card";
import classNames from "classnames";
import styles from '@/styles/card.module.scss'
export interface CardProps{
    title:string;
    text:string;
    src:any;
    alt:string;
}
const cardObject:CardProps[] =[

    {title:'Экономия времени',text:'Не надо звонит и вести долгие переговоры',src:timeSvg,alt:'alt'},
    {title:'Гарантия цены',text:'Исполнитель не изменит цену и условия в последний момент',src:tengeSvg,alt:'alt'},
    {title:'Страхование грузов',text:'Доставим ваш груз в целостности и сохраности',src:boxSvg,alt:'alt'},
    {title:'Отслеживание груза',text:'Схема отслеживая покажет где ваш груз',src:mapSvg,alt:'alt'},
    {title:'Оплата картой',text:'Оплата картой и Kaspi gold,а так жебольшой выбор других способов оплаты',src:cardSvg,alt:'alt'},
    {title:'Надёжные перевозчики',text:'Все перевозчики проходят у нас проверку документов и подтверждение транспорта',src:avatarSvg,alt:'alt'},]
const Index:React.FC<CardProps> = () => {


    return (
        <div id={'advantages'} className={styles.advantaged}>
            <h1 className="title">Приемущества</h1>

            <div className={styles.advantaged__container}>
                <div className={styles.advantaged__list}>

                    {cardObject.map(cardItem=>(
                        <Card
                            key={cardItem.title}
                        title={cardItem.title}
                        src={cardItem.src}
                        alt={cardItem.alt}
                        text={cardItem.text}/>
                    ))}

                </div>

            </div>
        </div>
    );
};

export default Index;