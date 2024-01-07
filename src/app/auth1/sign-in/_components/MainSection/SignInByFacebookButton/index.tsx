import { Button } from "@nextui-org/react"
import React from "react"
import FacebookIcon from "./FacebookIcon"
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth"
import services from "@services"

const SignInByFacebookButton = () => {
    
    const provider = new FacebookAuthProvider()
    
    const auth = services.thirdParty.firebase.getAuth()

    const onClick = async () => {
        const credential = await signInWithPopup(auth, provider)
        console.log(credential)
    }

    return (
        <Button onClick={onClick} isIconOnly variant="flat" className="w-12 h-12">
            <FacebookIcon size={40}/>
        </Button>
    )
}
export default SignInByFacebookButton
