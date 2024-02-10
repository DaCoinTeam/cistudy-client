import {
    Avatar,
    Divider,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/react"
import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "@redux"

export const ProfileSelect = () => {
    const user = useSelector((state: RootState) => state.auth.user)!

    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar
                    showFallback
                    isBordered
                    size="sm"
                    as="button"
                    className="transition-transform"
                    src="https://media.istockphoto.com/id/1166613720/photo/sunflower-in-full-bloom-with-blue-sky.webp?b=1&s=170667a&w=0&k=20&c=kAbs2YK8la_t5kRip_-tFyDroAw4QsKsMKeit9IGA4o="
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="py-4">
                    <p className="font-bold text-base">{user.email}</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="logout" color="danger">
          Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
