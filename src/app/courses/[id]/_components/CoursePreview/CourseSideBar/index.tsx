import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import React from "react"
const CourseSideBar = () => {
    return (
        <Card shadow="sm">
            <CardBody className="overflow-visible p-0">
                <Image
                    height={240}
                    width={240}
                    src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                    alt="NextUI Album Cover"
                    className="m-5"               
                />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <b>Cousre name</b>
                <p className="text-default-500">500.000VNĐ</p>
            </CardFooter>
        </Card>
    )
}
export default CourseSideBar