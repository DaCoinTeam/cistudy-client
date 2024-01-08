"use client"
import { AppButton } from "@app/_shared"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Input,
    Link,
    Spacer,
} from "@nextui-org/react"
import React, { useContext, useState } from "react"
import SignInByGoogleButton from "./SignInByGoogleButton"
import SignInByFacebookButton from "./SignInByFacebookButton"

import ForgetPassword from "./ForgetPassword"
import { FormikContext } from "../../_hooks"

const MainSection = () => {
    const [isVisible, setIsVisible] = useState(false)

    const onClickToggleVisibility = () => setIsVisible(!isVisible)

    const formik = useContext(FormikContext)!

    return (
        <Card className="w-[400px]">
            <CardHeader className="flex gap-3 p-5">
                <div className="text-lg font-bold">Sign In</div>
            </CardHeader>
            <Divider />
            <CardBody className="p-5 gap-4">
                <div>
                    <Input
                        id="email"
                        variant="flat"
                        label="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.email}
                        errorMessage={formik.errors.email}
                    />
                    <Spacer y={4} />
                    <Input
                        id="password"
                        endContent={
                            <button
                                className="focus:outline-none"
                                type="button"
                                onClick={onClickToggleVisibility}
                            >
                                {isVisible ? (
                                    <EyeSlashIcon className="w-3.5 h-3.5" />
                                ) : (
                                    <EyeIcon className="w-3.5 h-3.5" />
                                )}
                            </button>
                        }
                        variant="flat"
                        type={isVisible ? "text" : "password"}
                        label="Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.password}
                        errorMessage={formik.errors.password}
                    />
                    <Spacer y={2} />
                    <ForgetPassword />
                    <Spacer y={6} />
                    <AppButton text="Sign In" submit className="w-full" />
                    <Spacer y={2} />
                    <div className="flex gap-1">
                        <span className="text-xs">Do not have account? </span>
                        <Link
                            className="text-xs text-teal-500 cursor-pointer"
                            underline="always"
                        >
              Sign Up{" "}
                        </Link>
                    </div>
                </div>
            </CardBody>
            <Divider />
            <CardFooter className="p-5">
                <div className="flex gap-4">
                    <SignInByGoogleButton />
                    <SignInByFacebookButton />
                </div>
               
            </CardFooter>
        </Card>
    )
}

export default MainSection
