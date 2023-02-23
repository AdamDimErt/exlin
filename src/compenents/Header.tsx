import React, { useState } from 'react';
import styles from '@/styles/header.module.scss'; // подключение модуля стилей
import logo from '@/assets/ogo.png';
import Image from 'next/image';
import {Link} from 'react-scroll'

function Header() {
    // состояние для открытия/закрытия меню на мобильном устройстве
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // функция для переключения состояния меню
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image width={80} height={80} src={logo} alt={'logo'} />
            </div>
            {/* кнопка для открытия/закрытия меню на мобильном устройстве */}
            <div className={`burger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
            <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
                <li>
                    <Link className={styles.header_link} to="my-section" smooth={true} duration={500}>
                        Главная
                    </Link>
                </li>
                <li>
                    <Link className={styles.header_link} to="about-us" smooth={true} duration={500}>
                        О нас
                    </Link>
                </li>
                <li>
                    <Link className={styles.header_link} to="advantages" smooth={true} duration={500}>
                        преймущества
                    </Link>
                </li>

                <li>
                    <Link className={styles.header_link} to="Calc" smooth={true} duration={500}>
                        Калькулятор
                    </Link>
                </li>
                <li>
                    <Link className={styles.header_link} to="Footer" smooth={true} duration={500}>
                        Контакты
                    </Link>
                </li>
            </ul>
            <div className={styles.phone}>
                <a href="tel:+77076302770">+77076302770</a>
            </div>
        </header>
    );
}

export default Header;
