
import React from "react"
import { SignUpForm } from "./SignUpForm"
import { FormikProviders } from "./hooks/FormikProviders"

export const SignUpTab = () => {
    return (
        <FormikProviders>
            <SignUpForm />
        </FormikProviders>
    )
}