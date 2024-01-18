import React from "react"
import { FaCheck } from "react-icons/fa6"

const CourseTarget = () => {
    return (
        <>
            <div className='p-5 border border-indigo-600 '>
                <h2 className='my-2 text-2xl font-bold'>What youll learn</h2>
                <div className='grid grid-cols-2 gap-2++ ms-5'>
                    <div className='my-2'>
                        <FaCheck className='inline-block mr-2' />
            JavaScript is now the language powering databases and many more
            applications
                    </div>
                    <div className='my-2'>
                        <FaCheck className='inline-block mr-2' />
            JavaScript is now the language powering databases and many more
            applications
                    </div>
                    <div className='my-2'>
                        <FaCheck className='inline-block mr-2' />
            JavaScript is now the language powering databases and many more
            applications
                    </div>
                    <div className='my-2'>
                        <FaCheck className='inline-block mr-2' />
            JavaScript is now the language powering databases and many more
            applications
                    </div>
                </div>
            </div>
        </>
    )
}
export default CourseTarget