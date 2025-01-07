import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import "./slider.css";
const HomeSlider = () => {
    return (
        <div className='py-4'>
            <Swiper
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper sliderHome">
                <SwiperSlide>
                    <div className='item rounded-md overflow-hidden'>
                        <img src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg" alt='image1' className='w-full' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item rounded-md overflow-hidden'>
                        <img src="https://api.spicezgold.com/download/file_1734524893797_NewProject(13).jpg" alt='image1' className='w-full' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item rounded-md overflow-hidden'>

                        <img src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg" alt='image1' className='w-full' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item rounded-md overflow-hidden'>

                        <img src="https://api.spicezgold.com/download/file_1734524958576_NewProject(10).jpg" alt='image1' className='w-full' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item rounded-md overflow-hidden'>

                        <img src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg" alt='image1' className='w-full' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item rounded-md overflow-hidden'>

                        <img src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg" alt='image1' className='w-full' />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default HomeSlider