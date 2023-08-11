import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';


const SwipperCarousel = () => {
    return (
        <div className='bg-red-400 p-3'>
            <Swiper
                spaceBetween={5}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                // scrollbar={{ draggable: true }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div>
                        <p>Sarang</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p>Sarang</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p>Sarang</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p>Sarang</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p>Sarang</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p>Sarang</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p>Sarang</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p>Sarang</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p>Sarang</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p>Sarang</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p>Sarang</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p>Sarang</p>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
}

export default SwipperCarousel;
