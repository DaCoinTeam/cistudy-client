import React from "react"
import {  useDisclosure } from "@nextui-org/react"
import AuthenticationModal from "./AuthenticationModal"
import { AppButton } from "@app/_shared"

const LoginButton = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    
    return (
        <>
            <AppButton  onClick={onOpen} text="Login"/>
            <AuthenticationModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
    )
}
export default LoginButton
