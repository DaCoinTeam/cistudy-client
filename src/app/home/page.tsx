"use client"

import React from "react"
import { Categories, CarouselCourse, CarouselFeaturedCourse, Topics } from "./_components"
import ReviewCourse from "./_components/ReviewCourse"



const Page = () => {
    return ( 
        <div className="px-8">
            <Categories/>
            <CarouselFeaturedCourse isFeature={true} />
            <h3 className="text-2xl font-extrabold dark:text-white my-5">Recommend </h3>
            <CarouselCourse isFeature={false}/>
            <h3 className="text-2xl font-extrabold dark:text-white my-5"> Best Seller </h3>
            <CarouselCourse isFeature={false}/>
            <Topics />  
            <ReviewCourse/>

        </div>
        
    )
}
export default Page
