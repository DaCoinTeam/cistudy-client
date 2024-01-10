import React from "react"

import { Card, CardBody, CardHeader, Divider, Link } from "@nextui-org/react"
import SignUpForm from "./SignUpForm"
const SignUpCard = () => {
    return (
        <Card  >
            <CardHeader className="p-5  flex-col items-start">
                <h4 className="font-bold text-large">Sign Up</h4>
            </CardHeader>
            <Divider />
            <CardBody className="overflow-visible p-5">
                <SignUpForm />
                <div className="flex gap-1 pt-2 pb-2">
                    <span className="text-xs">Already have account? </span>
                    <Link
                        className="text-xs text-teal-500 cursor-pointer"
                        underline="always"
                    >
              Sign In{" "}
                    </Link>
                </div>
            </CardBody>
        </Card>
    )
}
export default SignUpCard