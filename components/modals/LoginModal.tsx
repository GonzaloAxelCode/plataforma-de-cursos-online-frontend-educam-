import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Link } from "@nextui-org/link"
import { useDisclosure } from "@nextui-org/modal"
import { LockIcon } from "../icons/LockIcon"
import { MailIcon } from "../icons/MailIcon"
import { Logo } from "../icons/icons"
import ModalContainer from "./ModalContainer"

const LoginModal = () => {
    const { onOpen, onOpenChange, isOpen } = useDisclosure();

    return (
        <>
            <Button
                onPress={onOpen}
                isExternal
                as={Link}
                className="text-sm font-normal text-default-600 bg-default-100"
                variant="ghost"
            >
                Iniciar Session
            </Button>
            <ModalContainer title="Iniciar Session"
                isOpen={isOpen}
                onOpen={onOpen}
                onOpenChange={onOpenChange}
                titleBtnOk="Iniciar Session"
            >

                <div className="flex flex-col  space-y-3 items-center">
                    <div>
                        <Logo size={100} />

                        <p className="font-bold text-inherit text-center" style={{ fontSize: "1.6em" }}>Educam</p>
                    </div>
                    <Input
                        autoFocus
                        endContent={
                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="Email"
                        placeholder="Enter your email"
                        variant="bordered"
                    />
                    <Input
                        endContent={
                            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        variant="bordered"
                    />
                    <div className="flex py-2 px-1 justify-between">

                        <Link color="primary" href="#" size="sm">
                            Registrarse?
                        </Link>
                    </div>
                </div>
            </ModalContainer>
        </>
    )
}

export default LoginModal