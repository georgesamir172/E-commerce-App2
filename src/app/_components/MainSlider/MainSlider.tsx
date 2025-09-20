"use client"
import React from 'react'
import banner1 from "./../../../../public/screens/slider/grocery-banner.png"
import banner2 from "./../../../../public/screens/slider/grocery-banner-2.jpeg"
import slide1 from "./../../../../public/screens/slider/slider-image-1.jpeg"
import slide2 from "./../../../../public/screens/slider/slider-image-2.jpeg"
import slide3 from "./../../../../public/screens/slider/slider-image-3.jpeg"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MainSlider = () => {
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-12 md:col-span-8'>
            <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide>
                        <Image className='h-[400px] object-cover' src={slide1} alt='slide1' />   
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='h-[400px] object-cover' src={slide2} alt='slide2' />   
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='h-[400px] object-cover' src={slide3} alt='slide3' />   
                    </SwiperSlide>

            </Swiper>
        </div>
        <div className='col-span-12 md:col-span-4'>
            <Image className='h-[200px] object-cover' src={banner1} alt='banner1' />
            <Image className='h-[200px] object-cover' src={banner2} alt="banner2" />

        </div>

        
    </div>
  )
}

export default MainSlider