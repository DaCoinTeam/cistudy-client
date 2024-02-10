import React from "react"
import ReactPlayer from "react-player"
import VideoPlayer, { Video } from "./Video"
import storage from "../../utils/storage.utils"
import Sections from "./Sections"
import LectureInfo from "./LectureInfo"

export default function Page() {
    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        liveui: true,
        fluid: true,
        sources: [
            {
                src: "http://localhost:3001/api/course/stream-preview?courseId=1a469863-ceb1-421f-8f17-700d61a85253&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyNmY0M2EzOS0xMGVjLTQ0ZWQtOWQ5Yi1lODEyNWNmOTk0MzQiLCJlbWFpbCI6InN0YXJjaUAyMmdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYmMyOTU3MzI0OWUwMDJkNDY3YjI3NGFmMTIzMGMwYWVhNDAzMTZiMzc0MDNmNmFlNWVjM2VhOWE4NTQ0NzljYSIsImF2YXRhclVybCI6bnVsbCwicGhvbmVOdW1iZXIiOm51bGwsImJhbGFuY2UiOiIwLjAwMDAwIiwicm9sZSI6IlVzZXIiLCJ3YWxsZXRJZCI6bnVsbCwiZmlyc3ROYW1lIjoiTmd1eWVuIFZhbiBUdSIsImxhc3ROYW1lIjoiQ3VvbmciLCJiaXJ0aGRhdGUiOm51bGwsInZlcmlmaWVkIjpmYWxzZSwia2luZCI6IkxvY2FsIiwiZXh0ZXJuYWxJZCI6bnVsbCwiaWF0IjoxNzA0ODkxOTI2LCJleHAiOjE3MDc0ODM5MjZ9.g75pO-H3ZT5IjVk7dSb3dfp-1Ywa2lgnqNhRGeGwec0",
                type: "video/mp4",
            },
        ],
    }
    return (
        <div className="px-6 max-w-[1280px] m-auto pt-12">
            <div className="grid grid-cols-3  gap-12">
                <div className="col-span-2">
                    <Video options={videoJsOptions} />
                    <LectureInfo />
                </div>

                <Sections className="col-span-1" />
            </div>
        </div>
    )
}
