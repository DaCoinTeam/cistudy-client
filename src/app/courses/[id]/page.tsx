import React from "react"
import { CoursePreview } from "./_components"
import { InitializationProviders } from "./_components/CoursePreview/_hook/initialization"
const Page = () => {
    return (<InitializationProviders>
        <CoursePreview/>
    </InitializationProviders>)
}
export default Page