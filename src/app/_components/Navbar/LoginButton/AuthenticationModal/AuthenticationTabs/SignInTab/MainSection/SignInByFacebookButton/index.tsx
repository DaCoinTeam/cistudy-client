import { Button } from "@nextui-org/react"
import React from "react"
import { FacebookIcon } from "./FacebookIcon"
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth"
import { firebaseAuth } from "@services"

export const SignInByFacebookButton = () => {
    
    const provider = new FacebookAuthProvider()

    const onClick = async () => {
        const credential = await signInWithPopup(firebaseAuth, provider)
        console.log(credential)
    }

    return (
        <Button onClick={onClick} isIconOnly variant="flat" className="w-12 h-12">
            <FacebookIcon size={40}/>
        </Button>
    )
}