"use client"
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Spacer
} from "@nextui-org/react"
import React from "react"
import { ContentType } from "@services"
import {
    InteractionStats,
    ActionBar,
    PostContent,
    Comments,
} from "./components"

interface PostCardProps {
  className?: string;
}

const PostCard = (props: PostCardProps) => {
    const xxxx = [
        {
            content: "Dep trai so 1",
            contentType: ContentType.Label,
        },
        {
            content: "Anh cuong dep trai qua em yeu anh",
            contentType: ContentType.Text,
        },
        {
            content: `Chicken chicken = new Chicken(); 
await chicken.lay() //wait for chicken lay egg
await chicken.destroy() //kill the chicken iselft`,
            contentType: ContentType.Code,
        },
        {
            content: "Anh cuong dep trai qua em yeu anh",
            contentType: ContentType.Text,
        },
        {
            content:
        "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
            contentType: ContentType.Image,
        },
    ]
    const renderContents = (): JSX.Element[] => {
        const contents: JSX.Element[] = []

        for (const x of xxxx) {
            contents.push(
                <PostContent content={x.content} contentType={x.contentType} />
            )
        }
        return contents
    }

    return (
        <Card className={`${props.className}`} shadow="sm">
            <CardHeader className="p-5">
                <div className="text-lg font-bold">
            Ai đẹp trai nhất FPT - Anh Cường
                </div>
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
