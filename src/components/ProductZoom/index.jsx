import React, { useRef, useState } from 'react';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const ProductZoom = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSliderSml = useRef();
    const goto = (index) => {
        setSlideIndex(index);
        zoomSliderSml.current.swiper.slideTo(index)
        zoomSliderBig.current.swiper.slideTo(index)
    }
    return (
        <>
            <div className='flex gap-3'>
                {/* Slider Section */}
                <div className='slider w-[20%]'>
                    <Swiper
                        ref={zoomSliderSml}
                        slidesPerView={4}
                        spaceBetween={2}
                        direction={'vertical'}
                        modules={[Navigation]}
                        navigation
                        className="zoomProductSliderThumbs h-[400px] overflow-hidden"
                    >

                        <SwiperSlide>
                            <div className={`items rounded-md overflow-hidden cursor-pointer group ${slideIndex === 0 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(0)}>
                                <img src="https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp" alt='Product Thumbnail 3' className='w-full
                                transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`items rounded-md overflow-hidden cursor-pointer group ${slideIndex === 1 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(1)}>
                                <img src="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg" alt='Product Thumbnail 4' className='w-full
                                transition-all group-hover:scale-105'/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`items rounded-md overflow-hidden cursor-pointer group ${slideIndex === 2 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(2)}>
                                <img src="https://api.spicezgold.com/download/file_1734529363005_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg" alt='Product Thumbnail 4' className='w-full
                                transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`items rounded-md overflow-hidden cursor-pointer group ${slideIndex === 3 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(3)}>
                                <img src="https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp" alt='Product Thumbnail 3' className='w-full
                                transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`items rounded-md overflow-hidden cursor-pointer group ${slideIndex === 4 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(4)}>
                                <img src="https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp" alt='Product Thumbnail 3' className='w-full
                                transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        {/* <SwiperSlide>
                            <div className='items rounded-md overflow-hidden cursor-pointer group'>
                                <img src="../../../2.jpg" alt='Product Thumbnail 4' className='w-full
                                transition-all group-hover:scale-105'/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='items rounded-md overflow-hidden cursor-pointer group'>
                                <img src="../../../2.jpg" alt='Product Thumbnail 4' className='w-full
                                transition-all group-hover:scale-105'/>
                            </div>
                        </SwiperSlide> */}

                    </Swiper>
                </div>

                {/* Zoom Container */}
                {/* Zoom Container */}
                <div className='zoomContainer w-[80%] h-[400px] overflow-hidden'>
                    <Swiper
                        ref={zoomSliderBig}
                        slidesPerView={1}
                        spaceBetween={0}

                        className="zoomProductSliderThumbsnew"
                    >

                        <SwiperSlide>

                            <InnerImageZoom
                                src="https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp"
                                zoomScale={1}
                                zoomType="hover"
                                className="w-full"
                            />
                        </SwiperSlide>

                        <SwiperSlide>

                            <InnerImageZoom
                                src="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
                                zoomScale={1}
                                zoomType="hover"
                                className="w-full"
                            />
                        </SwiperSlide>

                        <SwiperSlide>

                            <InnerImageZoom
                                src="https://api.spicezgold.com/download/file_1734529363005_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg"
                                zoomScale={1}
                                zoomType="hover"
                                className="w-full"
                            />
                        </SwiperSlide>

                        <SwiperSlide>

                            <InnerImageZoom
                                src="https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp"
                                zoomScale={1}
                                zoomType="hover"
                                className="w-full"
                            />
                        </SwiperSlide>
                        <SwiperSlide>

                            <InnerImageZoom
                                src="https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp"
                                zoomScale={1}
                                zoomType="hover"
                                className="w-full"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default ProductZoom;
