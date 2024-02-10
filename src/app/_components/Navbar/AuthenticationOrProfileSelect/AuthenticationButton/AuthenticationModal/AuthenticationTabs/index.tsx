import React from "react"
import { Tabs, Tab, Link, Card, CardBody, } from "@nextui-org/react"

import { Key } from "@react-types/shared"
import { SignUpTab } from "./SignUpTab"
import { SignInTab } from "./SignInTab"


export const AuthenticationTabs = () => {
    const initValue: string = "login"
    const [selected, setSelected] = React.useState(initValue)

    return (
        <div className="flex flex-col w-full">
            <Card className="max-w-full">
                <CardBody className="overflow-hidden ">
                    <Tabs
                        fullWidth
                        size="lg"
                        variant="underlined"
                        aria-label="Tabs form"
                        selectedKey={selected}
                        onSelectionChange={(key: Key) => { setSelected(key.toString()) }}
                    >
                        <Tab key="login" title="Login" className="py-5">
                            <SignInTab />
                            <p className="text-center text-small pt-2 ">
                                Need to create an account?{" "}
                                <Link size="sm"
                                    className="text-teal-500 cursor-pointer"
                                    underline="always"
                                    onPress={() => setSelected("sign-up")}>
                                    Sign up
                                </Link>
                            </p>

                        </Tab>
                        <Tab key="sign-up" title="Sign up" className="py-5">
                            <SignUpTab />
                            <p className="text-center text-small pt-2">
                                Already have an account?{" "}
                                <Link size="sm"
                                    className="text-teal-500 cursor-pointer"
                                    underline="always"
                                    onPress={() => setSelected("login")}>
                                    Login
                                </Link>
                            </p>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>

        </div>
    )
}

export default AuthenticationTabs