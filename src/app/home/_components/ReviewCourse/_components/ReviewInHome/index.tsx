import React from "react"
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline"
import { Avatar, Card } from "@nextui-org/react"
import { StarIcon } from "@heroicons/react/24/solid"

const ReviewCardInHome = () => {
    return (
        <Card className="p-5">
            <div className="grid grid-cols-2">

                <div className='flex items-center mb-4 '>
                    <Avatar
                        className='w-10 h-10 me-4 '
                        src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
                    />

                    <div className='font-medium dark:text-white items-center'>
                        <p>Jese Leos </p>
                        <p className=' text-sm text-gray-500 dark:text-gray-400'>
                            <time dateTime='2017-03-03 19:00'>March 3, 2017</time>
                        </p>
                    </div>
                </div>
                <div className='flex items-center mb-1 space-x-1 rtl:space-x-reverse'>
                    <StarIcon className='text-yellow-400 w4- h-4 ' />
                    <StarIcon className='text-yellow-400 w4- h-4 ' />
                    <StarIcon className='text-yellow-400 w4- h-4 ' />
                    <StarIcon className='text-yellow-400 w4- h-4 ' />
                    <StarIconOutline className='text-yellow-400 w4- h-4 ' />
                </div>
            </div>
            
            <div className='flex items-center'>
              
            </div>
            <p className='mb-2 text-sm  text-gray-900 dark:text-gray-400'>
        This is my third Invicta Pro Diver. They are just fantastic value for
        money. This one arrived yesterday and the first thing I did was set the
        time, popped on an identical strap from another Invicta and went in the
        shower with it to test the waterproofing.... No problems.
            </p>
          
            
        </Card>
    )
}
export default ReviewCardInHome