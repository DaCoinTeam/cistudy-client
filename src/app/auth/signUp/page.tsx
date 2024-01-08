"use client"
import React from "react"
import SignUpForm from "./SignUpForm"
import { Card, CardBody, CardHeader } from "@nextui-org/react"

const SignUpPage = () => {
    return (
        <div className='container mx-auto flex flex-col items-center py-4'>
            <div className='w-1/3 '>
                <Card className="p-4" >
                    <CardHeader className="pb-3 pt-2 px-4 flex-col items-start">
                        <h4 className="font-bold text-large">Sign Up</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <SignUpForm />
                    </CardBody>
                </Card>
    
            </div>
        </div>
    )
}
export default SignUpPage