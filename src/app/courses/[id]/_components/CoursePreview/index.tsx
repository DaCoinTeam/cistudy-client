import React from "react"
import CourseSideBar from "./CourseSideBar"
const CoursePreview = () => {
    return ( 
        <div>
            <div>

            </div>
       
            <div className="grid grid-cols-3 gap-4 ">
                <div className="col-span-2 "><h1>main</h1></div>
            
                <div>
                    <CourseSideBar/>
                </div>
            </div>
        </div>
        
 
    )
}
export default CoursePreview