import React from "react"
import { FormikProviders } from "./hooks"
import { MainSection } from "./MainSection"

export const SignInTab = () => {
    return (
        <FormikProviders>
            <MainSection/>
        </FormikProviders>

    ) 
}