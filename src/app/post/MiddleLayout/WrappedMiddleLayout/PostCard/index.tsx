"use client"
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Spacer,
} from "@nextui-org/react"
import React, { useContext } from "react"
import { ContentType, PostDto } from "@services"
import {
    InteractionStats,
    ActionBar,
    PostContent,
    Comments,
} from "./components"
import { PostContext } from "../index"

interface PostCardProps {
  className?: string;
  data: PostDto;
}

const PostCard = (props: PostCardProps) => {
    const post = useContext(PostContext)!

    const renderContents = (): JSX.Element[] | null => {
        const contents: JSX.Element[] = []
        const { postContents } = post
        if (!postContents) return null
        for (const postContent of postContents) {
            contents.push(
                <PostContent
                    content={postContent.content}
                    contentType={postContent.contentType}
                />
            )
        }
        return contents
    }

    return (
        <Card className={`${props.className}`} shadow="sm">
            <CardHeader className="p-5">
                <div className="text-lg font-bold">{props.data.title}</div>
            </CardHeader>
            <Divider />
            <CardBody className="p-5">
                <div className="flex flex-col gap-4">{renderContents()}</div>
                <Spacer y={12} />
                <InteractionStats />
                <Spacer y={6} />
                <ActionBar />
            </CardBody>
            <Divider />
            <CardFooter className="p-5">
                <Comments className="w-full" />
            </CardFooter>
        </Card>
    )
}

export default PostCard
