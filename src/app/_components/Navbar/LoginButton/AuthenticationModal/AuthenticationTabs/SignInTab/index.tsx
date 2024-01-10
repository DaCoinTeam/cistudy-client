import React from "react"
import { FormikProviders } from "./_hooks"
import { MainSection } from "./_components"

const SignInTab = () => {
    return (
        <FormikProviders>
            <MainSection/>
        </FormikProviders>

    ) 
}
export default SignInTab