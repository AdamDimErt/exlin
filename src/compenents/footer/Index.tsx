import React from 'react';
import styles from '@/styles/footer.module.scss';
import { YMaps, Map, Placemark } from "react-yandex-maps";
import Image from 'next/image';
import facebookSvg from '@/assets/facebook-svgrepo-com.svg';
import instagramSvg from '@/assets/instagram-svgrepo-com.svg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
    const mapData = {
        center: [43.270098, 76.962075],
        zoom: 15,
    };

    const coordinates = [
        [43.270098, 76.962075],

    ];

    return (
        <div id="Footer">
            <div className={styles.containerFull}>
                <div className={styles.map}>
                    <YMaps>
                        <Map width={'100%'} height={'100%'} defaultState={mapData}>
                            {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                        </Map>
                    </YMaps>
                </div>

                <div className={styles.info}>
                    <h2>Наши контакты</h2>

                    <div className={styles.telephone}>
                        <a href="tel:+77076302770">+7(707)-630-27-70</a>

                    </div>
                    <div className={styles.mail}>
                        <h2>Почтовые адреса</h2>
                        <a href="mailto:buh@zhsa.kz"><MailOutlineIcon/>buh@zhsa.kz</a>
                        <a href="mailto:CorpZHSA2015@gmail.com<"><MailOutlineIcon/> CorpZHSA2015@gmail.com</a>

                    </div>

                    <div className={styles.address}>
                        <h3>Наш адресс</h3>
                        <p>Республика Казахстан Алматы, 050002 улица Жетысуская, 43</p>
                    </div>

                    <div className={styles.social}>
                        <a href=""><Image src={facebookSvg} alt={'facebook'} width={50} height={50} /></a>
                        <a href=""><Image src={instagramSvg} alt={'instagram'} width={50} height={50} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
