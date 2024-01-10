import { Button } from "@nextui-org/react"
import React from "react"
import GoogleIcon from "./GoogleIcon"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { thirdParty, server } from "@services"
import { AppDispatch, setUser } from "@redux"
import { useDispatch } from "react-redux"

const SignInByGoogleIcon = () => {
    const provider = new GoogleAuthProvider()

    const dispatch : AppDispatch = useDispatch()

    const auth = thirdParty.firebase.getAuth()

    const onClick = async () => {

        const credential = await signInWithPopup(auth, provider)

        const token = await credential.user.getIdToken()
        const user = await server.graphql.auth.verifyGoogleAccessToken(token)
        if (!user){
            return
        }
        dispatch(setUser(user))
    }
  
    return (
        <Button onPress={onClick} isIconOnly variant="flat" className="w-12 h-12">
            <GoogleIcon size={40} />
        </Button>
    )
}
export default SignInByGoogleIcon
