import getAllCategories from '@/apis/allCategories'
import React from 'react'
import SwiperCategory from './../SwiperCategory/swiperCategory';
import { categories } from '@/types/categories.type';



const  CategorySlider = async () => {
    const data:categories[] = await getAllCategories()
  return (
    // the swiper js library requires use client so i will separate it in swiperCategory component
    <div>
        <SwiperCategory categories={data} />

    </div>
  )
}

export default CategorySlider