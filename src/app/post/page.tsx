import React from "react"
import ReactPlayer from "react-player"
import VideoPlayer, { Video } from "./Video"
import storage from "../../utils/storage"
import PostCard from "./PostCard"

export default function Page() {
    return (
        <div>
            <PostCard className="m-auto max-w-[500px]"/>
        </div>
    )
}
