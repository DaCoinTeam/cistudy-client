import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "@redux"
import { AuthenticationButton } from "./AuthenticationButton"
import { ProfileSelect } from "./ProfileSelect"

export const AuthenticationOrProfileSelect = () => {

    const user = useSelector((state: RootState) => state.auth.user)
    return (
        <>
            {user ? (
                <ProfileSelect />
            ) : (
                <AuthenticationButton />
            )}
        </>
    )
}