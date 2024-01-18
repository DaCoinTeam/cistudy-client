import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react"
import React from "react"

interface PostCardProps {
    className?: string 
}

const PostCard = (props: PostCardProps) => {
    return (<Card className={`${props.className}`} shadow="sm">
        <CardHeader className="p-5">
            <div className="text-lg font-bold">
            Ai đẹp trai nhất FPT - Anh Cường
            </div>
        </CardHeader>
        <Divider/>
        <CardBody className="p-5">
            123
        </CardBody>
        <Divider/>
    </Card>)
}

export default PostCard