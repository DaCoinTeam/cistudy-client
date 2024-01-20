import React from "react"
import {Card, CardBody} from "@nextui-org/react"
import { ReviewCardInHome } from "./_components"
// import Review from "@app/courses/[id]/_components/CoursePreview/_components/CourseMain/_component/Reviews/_components/Review"
// import {HeartIcon} from "./HeartIcon";
// import {PauseCircleIcon} from "./PauseCircleIcon";
// import {NextIcon} from "./NextIcon";
// import {PreviousIcon} from "./PreviousIcon";
// import {RepeatOneIcon} from "./RepeatOneIcon";
// import {ShuffleIcon} from "./ShuffleIcon";

const ReviewCourse = () =>{
    // const [liked, setLiked] = React.useState(false)

    return (
        <div className="grid grid-cols-3 gap-4 my-5">
            <ReviewCardInHome/>
            <ReviewCardInHome/>
            <ReviewCardInHome/>

        </div>
    )
}

export default ReviewCourse