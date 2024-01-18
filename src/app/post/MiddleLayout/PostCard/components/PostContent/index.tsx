"use client"
import { Code, Image } from "@nextui-org/react"
import { ContentType } from "@services"
import React from "react"

interface PostContentProps {
  className?: string;
  content: string;
  contentType?: ContentType;
}

const PostContent = (props: PostContentProps) => {
    const render = (type: ContentType = ContentType.Text): JSX.Element => {
        const contentTypeToRender: Record<ContentType, JSX.Element> = {
            [ContentType.Text]: <div className="text-sm"> {props.content} </div>,
            [ContentType.Image]: <Image src={props.content}/>,
            [ContentType.Code]: <Code color="default" className="whitespace-pre-line"> {props.content} </Code>,
            [ContentType.Video]: <div> </div>,
            [ContentType.Label]: <div className="font-bold"> {props.content} </div>,
        }
        return contentTypeToRender[type]
    }
    return render(props.contentType)
}

export default PostContent
