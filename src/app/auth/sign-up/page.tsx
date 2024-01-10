"use client"
import React from "react"
import SignUpCard from "./_component/SignUpCard"


const SignUpPage = () => {
    return (
        <div className='container mx-auto flex flex-col items-center py-4'>
            <div className='w-xs-3/4 w-md-1/3 '>
                <SignUpCard />
            </div>
        </div>
    )
}
export default SignUpPage