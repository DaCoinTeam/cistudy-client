import { Button } from "@nextui-org/react"
import React from "react"
import GoogleIcon from "./GoogleIcon"
const SignInByGoogleIcon = () => {
    return (
        <Button isIconOnly variant="flat" className="w-12 h-12">
            <GoogleIcon size={40}/>
        </Button>
    )
}
export default SignInByGoogleIcon
