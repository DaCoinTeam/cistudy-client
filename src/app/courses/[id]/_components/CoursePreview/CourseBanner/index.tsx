
import { Image } from "@nextui-org/image"
import React from "react"
const CourseBanner = () =>{
    return(
        <div>
            <Image
                height={"100%"}
                width={"100%"}
                src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                alt="NextUI Album Cover"
                className="m-5"               
            />
        </div>
    )
}
export default CourseBanner