"use client"
import { Form, Formik, FormikProps } from "formik"
import React, { ReactNode, createContext } from "react"
import * as Yup from "yup"
import { ContextProps} from "@app/_shared"
import { signUp } from "@services"

interface FormikValues {
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
   birthdate: Date
}

const initialValues: FormikValues = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    birthdate:  new Date(),
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
                email: Yup.string()
                    .email("Invalid email address")
                    .required("Required"),
                
                password: Yup.string()
                    .min(8, "At least be 8 characters")
                    .matches(
                        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*/,
                        "At least 1 number, 1 lower case and 1 upper case letter"
                    )
                    .required("Required"),
                confirmPassword: Yup.string()
                    .oneOf(
                        [Yup.ref("password"), undefined],
                        "Confirm password must match with password"
                    )
                    .required("Required"),
                firstName: Yup.string().required("Required"),
			    lastName: Yup.string().required("Required"),
                birthdate: Yup.date().required("Required"),             

            })}
           
            onSubmit = {
                async (values) => {
                    const response = await signUp(
                        {
                            email: values.email,
                            password: values.password,
                            firstName: values.firstName,
                            lastName: values.lastName,
                            birthdate: values.birthdate,
                        },
                    )
                    console.log(response)
                
                }
            }
            
        
        >
            {(_props) => renderBody(_props, props.children)}
        </Formik>
        
    )
}