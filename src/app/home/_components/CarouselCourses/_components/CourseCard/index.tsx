import React from "react"
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
interface CourseInterface {
    id?: number;
    title?: string;
    thumbnail?: string;
    price?: string;
    authorImg?: string;
    authorName?: string;
    rating?: number;
  }
const CourseCard = (props: CourseInterface) => {
    return (
        <Card shadow="sm" >
            <CardBody className="overflow-visible p-0 ">
                <Image
                    alt="Card background"
                    src="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww"
                    className="object-cover z-0 w-full h-full rounded-b-none"
                />
            </CardBody>
            <CardFooter className="pb-0 pt-2 px-4 py-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{props.title}</p>
                <div className="w-full  grid grid-cols-2 ">
                    <div>
                        <small className="text-default-500">Rating</small>
                        <h5 className="font-bold texl-lg">{props.rating}</h5>
                    </div>
                    <div>
                        <small className="text-default-500">Prices</small>
                        <h5 className="font-bold texl-lg">{props.price}</h5>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
export default CourseCard