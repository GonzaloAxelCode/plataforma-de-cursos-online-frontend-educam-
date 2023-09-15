
import { Modal, ModalBody, ModalContent } from "@nextui-org/react";





const ModalContainer = ({
    children, title = "Title Modal", isOpen, onOpen, onOpenChange, modalFooter, handleClickOk, titleBtnOk = ""
}: any) => {



    return (
        <Modal

            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
            backdrop="blur"

        >
            <ModalContent>
                {(onClose: any) => (
                    <div>

                        <ModalBody>
                            {children}
                        </ModalBody>

                    </div>
                )}
            </ModalContent>
        </Modal>
    )
}

export default ModalContainer