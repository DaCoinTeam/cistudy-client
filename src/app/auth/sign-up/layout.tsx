import React from "react"
import FormikProviders from "./_hook/FormikProviders"
import { ContextProps } from "@app/_shared"

const SignUpLayout = ({ children }: ContextProps) => {
    return (
        <FormikProviders>
            {children}
        </FormikProviders>
    )
}
export default SignUpLayout