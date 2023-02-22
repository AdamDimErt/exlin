import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, Mousewheel } from 'swiper';
import { useMediaQuery } from '@material-ui/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, Mousewheel]);

import kaspiSvg from '@/assets/company/kaspi.svg'
import Image from "next/image";

const slides = [
    {
        id: 1,
        title: 'Slide 1',
        imageUrl: kaspiSvg,
    },
    {
        id: 2,
        title: 'Slide 2',
        imageUrl: kaspiSvg,
    },
    {
        id: 3,
        title: 'Slide 3',
        imageUrl: kaspiSvg,
    },
    {
        id: 4,
        title: 'Slide 4',
        imageUrl: kaspiSvg,
    },
    {
        id: 5,
        title: 'Slide 5',
        imageUrl: kaspiSvg,
    },
    {
        id: 6,
        title: 'Slide 6',
        imageUrl: kaspiSvg,
    },
];

const Slider = () => {
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
