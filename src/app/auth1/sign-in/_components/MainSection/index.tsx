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
    Image,
    Link,
    Spacer,
} from "@nextui-org/react"
import React, { useState } from "react"
import SignInByGoogleButton from "./SignInByGoogleButton"
import ForgetPassword from "./ForgetPassword"

const MainSection = () => {
    const [isVisible, setIsVisible] = useState(false)

    const onClickToggleVisibility = () => setIsVisible(!isVisible)

    return (
        <Card className="w-[400px]">
            <CardHeader className="flex gap-3 p-5">
                <div className="text-lg font-bold">Sign In</div>
            </CardHeader>
            <Divider />
            <CardBody className="p-5 gap-4">
                <div>
                    <Input variant="flat" label="Email" />
                    <Spacer y={4}/>
                    <Input
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
                    />
                    <Spacer y={6}/>
                    <ForgetPassword/>
                    <Spacer y={4}/>
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
