import React from "react"
import { Modal, ModalContent } from "@nextui-org/react"
import AuthenticationTabs from "./AuthenticationTabs"
interface AuthenticationModalProps {
  isOpen: boolean
  onOpenChange: () => void
}

export const AuthenticationModal = ({
    isOpen,
    onOpenChange,
}: AuthenticationModalProps) => {
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} 
                size='lg'
                backdrop="blur"
                // isDismissable={false}
            >
                <ModalContent >
                    <AuthenticationTabs />
                </ModalContent>
            </Modal>
        </>
    )
}
