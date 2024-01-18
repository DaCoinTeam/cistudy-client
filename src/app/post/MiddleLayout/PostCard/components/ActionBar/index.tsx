import {
    BookmarkIcon,
    ChatBubbleBottomCenterIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    HeartIcon,
} from "@heroicons/react/24/outline"
import { Button } from "@nextui-org/react"
import React from "react"

const ActionBar = () => {
    return (
        <div className="flex items-center justify-between">
            <Button isIconOnly variant="light">
                <BookmarkIcon className="w-6 h-6 text-teal-500" />
            </Button>
            <div className="flex gap-6">
                <Button isIconOnly variant="light">
                    <HeartIcon className="w-6 h-6 text-teal-500" />
                </Button>
                <Button isIconOnly variant="light">
                    <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 text-teal-500" />
                </Button>
            </div>
        </div>
    )
}

export default ActionBar
