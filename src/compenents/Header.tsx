import React, { useState } from 'react';
import styles from '@/styles/header.module.scss'; // подключение модуля стилей

function Header() {
    // состояние для открытия/закрытия меню на мобильном устройстве
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // функция для переключения состояния меню
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>LOGO</div>
            {/* кнопка для открытия/закрытия меню на мобильном устройстве */}
            <div className={`burger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
            <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
                <li>
                    <a href="#">Главная</a>
                </li>
                <li>
                    <a href="#">О нас</a>
                </li>
                <li>
                    <a href="#">преймущества</a>
                </li>

                <li>
                    <a href="#">Калькулятор</a>
                </li>
                <li>
                    <a href="#">Контакты</a>
                </li>
            </ul>
            <div className={styles.phone}>PHONE</div>
        </header>
    );
}

export default Header;
