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
    Spacer,
} from "@nextui-org/react"
import React, { useContext, useState } from "react"
import SignInByGoogleButton from "./SignInByGoogleButton"
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
                    <Spacer y={6} />
                    <ForgetPassword />
                    <Spacer y={4} />
                    <AppButton text="Sign In" submit className="w-full" />
                </div>
            </CardBody>
            <Divider />
            <CardFooter className="p-5">
                <SignInByGoogleButton />
            </CardFooter>
        </Card>
    )
}

export default MainSection
