"use client"
import React from 'react'

// import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { categories } from './../../../types/categories.type';
const swiperCategory = ({categories} : {categories : categories[]}) => {
    // console.log(categories , "mycategories")
  return (
    <div>
        <Swiper
                    spaceBetween={0}
                    slidesPerView={5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
            {categories.map((category, idx) =>
                    <SwiperSlide key={idx}>
                        <div className='flex flex-col items-center justify-center'>
                            <Image className='h-[250px] w-full' src={category.image} alt={category.name} width={500} height={500} />
                            <h3>{category.name}</h3>
                        </div>

                    </SwiperSlide>

        
            ) }
        </Swiper>

    </div>
  )
}

export default swiperCategory