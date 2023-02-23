import React, { useState } from 'react';
import styles from '@/styles/header.module.scss'; // подключение модуля стилей
import logo from '@/assets/ogo.png'
import Image from 'next/image'
function Header() {
    // состояние для открытия/закрытия меню на мобильном устройстве
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // функция для переключения состояния меню
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleAnchorClick = (event:any) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.classList.add('scroll');
            setTimeout(() => {
                targetElement.classList.remove('scroll');
            }, 1000);
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}><Image width={80} height={80} src={logo} alt={'logo'}/></div>
            {/* кнопка для открытия/закрытия меню на мобильном устройстве */}
            <div className={`burger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
            <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
                <li>
                    <a onClick={handleAnchorClick} href="#my-section" >Главная</a>
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
            <div className={styles.phone}><a href="tel:+77076302770">+77076302770</a></div>
        </header>
    );
}

export default Header;
