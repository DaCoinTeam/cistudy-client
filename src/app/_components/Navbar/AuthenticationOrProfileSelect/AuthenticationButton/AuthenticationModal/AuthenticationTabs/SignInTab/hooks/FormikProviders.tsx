import { ContextProps } from "@app/_shared"
import { Form, Formik, FormikProps } from "formik"
import * as Yup from "yup"
import React, { ReactNode, createContext } from "react"
import { signIn } from "@services"

interface FormikValues {
    email: string
    password: string
}

const initialValues: FormikValues = {
    email: "",
    password: "",
}

export const FormikContext = createContext<FormikProps<FormikValues> | null>(
    null
)

const renderBody = (
    props: FormikProps<FormikValues> | null,
    chidren: ReactNode
) => {
    return (
        <FormikContext.Provider value={props}>
            <Form onSubmit={props?.handleSubmit}>{chidren}</Form>
        </FormikContext.Provider>
    )
}

export const FormikProviders = (props: ContextProps) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                email: Yup.string().email().required(),
                password: Yup.string().min(6),
            })}
            onSubmit={async (values) => {
                const response = await signIn({
                    email: values.email,
                    password: values.password,
                })
                console.log(response)
            }}
        >
            {(_props) => renderBody(_props, props.children)}
        </Formik>
    )
}
