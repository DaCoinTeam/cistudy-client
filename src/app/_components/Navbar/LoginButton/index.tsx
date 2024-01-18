import React from "react"
import {
    Avatar,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    useDisclosure,
} from "@nextui-org/react"
import AuthenticationModal from "./AuthenticationModal"
// import { AppButton } from "@app/_shared"
const user = null
const LoginButton = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    return (
        <>
            {user ? (
                <Dropdown placement='bottom-end'>
                    <DropdownTrigger>
                        <Avatar
                            showFallback
                            isBordered
                            size="sm"
                            as='button'
                            className='transition-transform'
                            src='https://media.istockphoto.com/id/1166613720/photo/sunflower-in-full-bloom-with-blue-sky.webp?b=1&s=170667a&w=0&k=20&c=kAbs2YK8la_t5kRip_-tFyDroAw4QsKsMKeit9IGA4o='
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label='Profile Actions' variant='flat'>
                        <DropdownItem key='profile' className='h-14 gap-2'>
                            <p className='font-semibold'>Signed in as</p>
                            <p className='font-semibold'>zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key='settings'>My Settings</DropdownItem>
                        <DropdownItem key='team_settings'>Team Settings</DropdownItem>
                        <DropdownItem key='analytics'>Analytics</DropdownItem>
                        <DropdownItem key='system'>System</DropdownItem>
                        <DropdownItem key='configurations'>Configurations</DropdownItem>
                        <DropdownItem key='help_and_feedback'>Help & Feedback</DropdownItem>
                        <DropdownItem key='logout' color='danger'>
              Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            ) : (
                <Avatar  size="sm"  isBordered onClick={onOpen} />
            )}

            <AuthenticationModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
    )
}
export default LoginButton
