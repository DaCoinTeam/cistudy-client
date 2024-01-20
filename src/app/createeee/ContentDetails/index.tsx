"use client"

import { Card, CardBody } from "@nextui-org/react"
import React from "react"

interface ContentDetailsProps {
  className?: string;
}

const ContentDetails = (props: ContentDetailsProps) => {
    return (
        <Card className={`${props.className}`}>
            <CardBody>43</CardBody>
        </Card>
    )
}

export default ContentDetails
