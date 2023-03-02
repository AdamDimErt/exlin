import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, Mousewheel } from 'swiper';
import { useMediaQuery } from '@mui/material';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, Mousewheel]);

import kaspiSvg from '@/assets/company/kaspi.svg'
import euBankSvg from '@/assets/company/eurasian-bank.svg'
import astanaMotors from '@/assets/company/Astana_Motors_Logo.svg'
import kazTransSvg from '@/assets/company/kaztranscom-logos-idhIXyImqO.png'
import Image from "next/image";
import React from "react";

const slides = [
    {
        id: 1,
        title: 'Slide 1',
        imageUrl: kaspiSvg,
    },
    {
        id: 2,
        title: 'Slide 2',
        imageUrl: euBankSvg,
    },
    {
        id: 3,
        title: 'Slide 3',
        imageUrl: astanaMotors,
    },
    {
        id: 4,
        title: 'Slide 4',
        imageUrl: kazTransSvg,
    },

];

const Slider:React.FC = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const slidesPerView = isMobile ? 1 : 3;

    return (
        <>
            <h1 className="title">Нам доверяют лучшие компании Казахстана!</h1>
            <Swiper
                spaceBetween={30}
                slidesPerView={slidesPerView}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                mousewheel
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <Image width={320}height={150} src={slide.imageUrl} alt={''}/>
                    </SwiperSlide>
                ))}

                <div className="swiper-pagination" />
            </Swiper></>

    );
};

export default Slider;
