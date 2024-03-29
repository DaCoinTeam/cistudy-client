
import { Button, Card, CardBody, Image } from "@nextui-org/react"
import { LuBookMinus } from "react-icons/lu"
import { GoListUnordered } from "react-icons/go"
import { MdOutlineQuiz } from "react-icons/md"
import { MdOutlineFileDownload } from "react-icons/md"

import React from "react"
const CourseSideBar = () => {
    return (
        <Card shadow="sm"  radius="sm"  className="w-80"  >
            <CardBody className="overflow-visible p-0" >
                <div>
                    <Image
       
                        width="100%"
                        alt={"a"}
                        className="w-full object-cover h-48 rounded-t-sm rounded-b-none  "
                        src="https://www.bitdegree.org/courses/storage/course-image/javascript-course.jpg"
                    />
                </div>
                <div className="px-5 pt-3">
                    <div className="my-1">
                        <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$599</h5>

                    </div>
                    <div  className="my-2">
                        <Button color="primary"  fullWidth>
                         Buy this course
                        </Button>
                    </div>
                    <div>
                        <div className="my-2">
                            <LuBookMinus className="inline-block mr-2" />
                            4 Lessons
                        </div>
                        <div className="my-2">
                            <GoListUnordered className="inline-block mr-2" />
                            12 Topics</div>
                        <div className="my-2">
                            <MdOutlineQuiz className="inline-block mr-2"/>
                         3 Quizzes
                        </div>
                        <div className="my-2"> 
                            <MdOutlineFileDownload className="inline-block mr-2"/>
                            7 downloadable resources
                        </div>
                    </div>
                </div>
                
                
            </CardBody>
        </Card>
    )
}
export default CourseSideBar