
import React from "react"
import SignUpForm from "./SignUpForm"
import FormikProviders from "./_hook/FormikProviders"
const SignUpTab = () => {
    return (
        <FormikProviders>
            <SignUpForm />
        </FormikProviders>
    )
}

export default SignUpTab