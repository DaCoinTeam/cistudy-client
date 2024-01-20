import { Button } from "@nextui-org/react"
import React from "react"
const CATEGORIES = [
    "Development",
    "Business", 
    "Accounting",
    "Personal Developement",
    "Design",
    "Marketing",
    "Office Productivity"
]

const Categories = () => {
    return (
        <div className="flex flex-wrap gap-4 my-5">
            {CATEGORIES.map((item, index) => (
                <Button key={index} color="default">
                    {item}
                </Button>
             
                
            ))}
        
        </div>
    )
}
export default Categories