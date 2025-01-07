import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from "react-router-dom"
import { Pagination } from 'swiper/modules';
const HomeCategorySlider = () => {
    return (
        <div className='py-4'>
            <h2 className='text-[18px] font-[500] uppercase'>Featured Categories</h2>
            <div className=''>
                <Swiper
                    key={window.innerWidth}
                    slidesPerView={8}
                    spaceBetween={20}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 10 },
                        640: { slidesPerView: 3, spaceBetween: 15 },
                        768: { slidesPerView: 4, spaceBetween: 15 },
                        1024: { slidesPerView: 6, spaceBetween: 20 },
                        1280: { slidesPerView: 8, spaceBetween: 20 },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='homeCat p-2 text-center flex flex-col justify-center  items-center'>
                            <Link to="/fashion">
                                <div className='items flex flex-col justify-center items-center h-[120px] w-[120px] border rounded-full' style={{ background: 'rgb(236, 255, 236)' }}>
                                    <img src='../../../file_1734525204708_fash.png' alt='image' />
                                </div>
                                <p className='font-[500] text-[15px]'>Fashion</p>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='homeCat p-2 text-center flex flex-col justify-center items-center'>
                            <Link to="/fashion">
                                <div className='items flex flex-col justify-center items-center h-[120px] w-[120px] border rounded-full' style={{ background: 'rgb(254, 239, 234)' }}>
                                    <img src='../../../file_1734525218436_ele.png' alt='image' />
                                </div>
                                <p className='font-[500] text-[15px]'>Electronics</p>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='homeCat p-2 text-center flex flex-col justify-center items-center'>
                            <Link to="/fashion">
                                <div className='items flex flex-col justify-center items-center h-[120px] w-[120px] border rounded-full' style={{ background: 'rgb(253, 240, 255)' }}>
                                    <img src='../../../file_1734525231018_bag.png' alt='image' />
                                </div>
                                <p className='font-[500] text-[15px]'>Bags</p>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='homeCat p-2 text-center flex flex-col justify-center items-center'>
                            <Link to="/fashion">
                                <div className='items flex flex-col justify-center items-center h-[120px] w-[120px] border rounded-full' style={{ background: 'rgb(222, 243, 255)' }}>
                                    <img src='../../../file_1734525239704_foot.png' alt='image' />
                                </div>
                                <p className='font-[500] text-[15px]'>Footwear</p>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='homeCat p-2 text-center flex flex-col justify-center items-center'>
                            <Link to="/fashion">
                                <div className='items flex flex-col justify-center items-center h-[120px] w-[120px] border rounded-full' style={{ background: 'rgb(255, 232, 248)' }}>
                                    <img src='../../../file_1734525248057_gro.png' alt='image' />
                                </div>
                                <p className='font-[500] text-[15px]'>Groceries</p>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='homeCat p-2 text-center flex flex-col justify-center items-center'>
                            <Link to="/fashion">
                                <div className='items flex flex-col justify-center items-center h-[120px] w-[120px] border rounded-full' style={{ background: 'rgb(227, 255, 250)' }}>
                                    <img src='../../../file_1734525255799_beauty.png' alt='image' />
                                </div>
                                <p className='font-[500] text-[15px]'>Beauty</p>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='homeCat p-2 text-center flex flex-col justify-center items-center'>
                            <Link to="/fashion">
                                <div className='items flex flex-col justify-center items-center h-[120px] w-[120px] border rounded-full' style={{ background: 'rgb(255, 243, 255)' }}>
                                    <img src='../../../file_1734525275367_well.png' alt='image' />
                                </div>
                                <p className='font-[500] text-[15px]'>Wellness</p>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='homeCat p-2 text-center flex flex-col justify-center items-center'>
                            <Link to="/fashion">
                                <div className='items flex flex-col justify-center items-center h-[120px] w-[120px] border rounded-full' style={{ background: 'rgb(211, 255, 217)' }}>
                                    <img src='../../../file_1734525286186_jw.png' alt='image' />
                                </div>
                                <p className='font-[500] text-[15px]'>Jewellery</p>
                            </Link>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div >
    )
}

export default HomeCategorySlider