import React from "react"
import { Card, CardFooter, Image } from "@nextui-org/react"

interface CourseInterface {
  id?: number;
  title?: string;
  thumbnail?: string;
  price?: string;
  authorImg?: string;
  authorName?: string;
  rating?: number;
}
const FeatureCourseCard = (props: CourseInterface) => {
    return (
        <Card className='col-span-12 sm:col-span-4 h-[310px]'>
            <Image
                removeWrapper
                alt='Card background'
                className='z-0 w-full h-full object-cover'
                src={props.thumbnail}
            />
            <CardFooter className='absolute z-10 bottom-1 flex-col !items-start'>
                <p className='text-tiny text-white/60 uppercase font-bold'>
          Plant a tree
                </p>
                <h4 className='text-white font-medium text-large'>{props.title}</h4>
            </CardFooter>
        </Card>
    )
}
export default FeatureCourseCard
