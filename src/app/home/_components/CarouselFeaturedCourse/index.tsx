
import React from "react"
import { Carousel as MaterialCarousel } from "@material-tailwind/react"
import FeatureCourseCard from "./_components/FeatureCourseCard"
import { useViewport } from "./_hook/useViewPort"
interface CourseInterface {
    id?: number,
    title?: string
    thumbnail?: string
    price?: string,
    authorImg?: string,
    authorName?: string,
    rating?: number,
}
const FeatureCourse : CourseInterface[] = [
    {
        id: 1,
        title: "The Complete Node.js Developer Course (3rd Edition)",
        authorName: "Andrew Mead, Rob Percival",
        authorImg: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        thumbnail: "https://images.unsplash.com/photo-1537420327992-d6e192287183?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
        rating: 4.7,
        price: "$19.99",
    },
    {
        id: 2,
        title: "Python for Data Science and Machine Learning Bootcamp",
        authorName: "Andrew Mead, Rob Percival",
        authorImg: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        thumbnail: "https://images.unsplash.com/photo-1537420327992-d6e192287183?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
        rating: 4.7,
        price: "$19.99",

    },
    {
        id: 3,
        title: "The Complete Node.js Developer Course (3rd Edition)",
        authorName: "Andrew Mead, Rob Percival",
        authorImg: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        thumbnail: "https://images.unsplash.com/photo-1537420327992-d6e192287183?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
        rating: 4.7,
        price: "$19.99",

    },
    {
        id: 4,
        title: "Learn Python Programming Masterclass",
        authorName: "Andrew Mead, Rob Percival",
        authorImg: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        thumbnail: "https://images.unsplash.com/photo-1537420327992-d6e192287183?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
        rating: 4.7,
        price: "$19.99",

    },
    {
        id: 5,
        title: "Mastering Data Structures & Algorithms using C and C++",
        authorName: "Andrew Mead, Rob Percival",
        authorImg: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        thumbnail: "https://images.unsplash.com/photo-1537420327992-d6e192287183?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
        rating: 4.7,
        price: "$19.99",

    },
    {
        id: 6,
        title: "django - The Python Web Developer Bootcamp",
        authorName: "Andrew Mead, Rob Percival",
        authorImg: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        thumbnail: "https://images.unsplash.com/photo-1537420327992-d6e192287183?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
        rating: 4.7,
        price: "$19.99",

    },
]

const carouselChilds = (isSmall: boolean): JSX.Element[] => {
    const items: Array<JSX.Element> = []

    let numberOfCard = 2
    if(!isSmall) numberOfCard = 4
    
    for (let i = 0; i < FeatureCourse.length; i += numberOfCard) {
        items.push (
            <div key={i} className={`grid grid-cols-${numberOfCard} gap-4 px-4`}>
                {FeatureCourse.slice(i, i + numberOfCard).map((item) => {
                    return (
                        <div key={item.id}>
                            <FeatureCourseCard {...item}/>
                        </div>
                    )
                })}
            </div>
        )
    }
    return items
}

interface CarouselProps{
    className?: string
    isFeature?: boolean
}

const CarouselFeaturedCourse = (props : CarouselProps) => {
    const viewPort = useViewport()
    //tailwind nó có md: 
    const isMobile = viewPort && viewPort.width <= 768
    return (
        <div className={props.className}>
            {isMobile ? (
                <div id="small" className="block md:hidden">
                    <MaterialCarousel 
                        autoplay
                    >
                        {carouselChilds(true)}
                    </MaterialCarousel>

                </div>
            ): (
                <div id="middle" className="hidden md:block">
                    <MaterialCarousel autoplay>
                        {carouselChilds(false)}
                    </MaterialCarousel>

                </div>
            )}           
        </div>


    )
}
export default CarouselFeaturedCourse