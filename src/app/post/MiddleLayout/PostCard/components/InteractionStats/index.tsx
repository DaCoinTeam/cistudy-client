import { Avatar, Chip } from "@nextui-org/react"
import React from "react"

const InteractionStats = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Avatar />
                <div>
                    <div className="font-bold text-sm"> StarCi</div>
                    <div className="text-xs"> Yesterday at 11:30</div>
                </div>
            </div>
            <div className="flex gap-6">
                <div className="text-sm">
                    <span className="font-bold"> {`${234}`} </span> <span>likes</span>
                </div>
                <div className="text-sm">
                    <span className="font-bold"> {`${234}`} </span> <span>comments</span>
                </div>
            </div>
        </div>
    )
}

export default InteractionStats
