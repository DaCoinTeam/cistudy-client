import { AppButton } from "@app/_shared"
import {
    BookmarkIcon,
    ChatBubbleBottomCenterIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    HeartIcon,
} from "@heroicons/react/24/outline"
import { Avatar, Button, Input } from "@nextui-org/react"
import React from "react"

interface CommentsProps {
    className?: string
}
const Comments = (props: CommentsProps) => {
    return (
        <div className={props.className}>
            <Button className="w-full" variant="flat"> Add comment </Button>
        </div>
    )
}

export default Comments
