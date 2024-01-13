import React from "react"
// import CourseBanner from "./CourseBanner"
import CourseMain from "./_components/CourseMain"
import CourseSideBar from "./_components/CourseSideBar"
import CourseBanner from "./_components/CourseBanner"
const CoursePreview = () => {
    return ( 
        <div >
            <div className="mb-5">
                <CourseBanner/>
              
            </div>
       
            <div className="grid grid-cols-3 gap-4 px-[5em] mb-5">      
                <div className="col-span-2">
                    <CourseMain/>
                </div>      
                <div className="px-5">
                </div>
            </div>
            <div className="fixed top-28 right-14 ">
                <CourseSideBar/>
            </div>
        </div>
        
 
    )
}
export default CoursePreview