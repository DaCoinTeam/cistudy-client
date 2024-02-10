"use client"
import { AppButton } from "@app/_shared"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import { Divider, Input, Spacer } from "@nextui-org/react"
import React, { useContext, useState } from "react"
import SignInByGoogleButton from "./SignInByGoogleButton"
import { SignInByFacebookButton } from "./SignInByFacebookButton"

import { ForgetPassword }  from "./ForgetPassword"
import { FormikContext } from "../hooks"

export const MainSection = () => {
    const [isVisible, setIsVisible] = useState(false)

    const onClickToggleVisibility = () => setIsVisible(!isVisible)

    const formik = useContext(FormikContext)!

    return (
        <div>
            <Input
                id='email'
                variant='flat'
                label='Email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!formik.errors.email}
                errorMessage={formik.errors.email}
            />
            <Spacer y={4} />
            <Input
                id='password'
                endContent={
                    <button
                        className='focus:outline-none'
                        type='button'
                        onClick={onClickToggleVisibility}
                    >
                        {isVisible ? (
                            <EyeSlashIcon className='w4- h-4' />
                        ) : (
                            <EyeIcon className='w-4 h-4' />
                        )}
                    </button>
                }
                variant='flat'
                type={isVisible ? "text" : "password"}
                label='Password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!formik.errors.password}
                errorMessage={formik.errors.password}
            />
            <Spacer y={2} />
            <ForgetPassword />
            <Spacer y={6} />
            <AppButton text='Sign In' submit className='w-full' />
            <Spacer y={2} />

            <Divider className='my-5' />

            <div className='flex gap-4 '>
                <SignInByGoogleButton />
                <SignInByFacebookButton />
            </div>
        </div>
    )
}