import useLogin from "@/redux/Auth/hooks/useLogin"
import { DataUserLogin } from "@/redux/Auth/interfaces/register.models"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Link } from "@nextui-org/link"
import { useDisclosure } from "@nextui-org/modal"
import { useEffect, useState } from "react"
import { LockIcon } from "../icons/LockIcon"
import { MailIcon } from "../icons/MailIcon"
import { Logo } from "../icons/icons"
import ModalContainer from "./ModalContainer"

const LoginModal = () => {
    const { onOpen, onOpenChange, isOpen, onClose } = useDisclosure();
    const { isLoadingLogin, loginWithEmail, loginSuccess, loginErrors } = useLogin()

    const [formData, setFormData] = useState<DataUserLogin>({
        email: '',
        password: '',

    });
    useEffect(() => {
        if (loginSuccess) {
            onClose()
        }
        //@ts-ignore
    }, [loginSuccess, onClose])

    const handleSubmit = (e: any) => {
        e.preventDefault()
        loginWithEmail(formData)
    }
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
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col  space-y-3 items-center">

                        <Logo size={120} />
                        <div>
                            <p className="font-bold text-inherit text-center" style={{ fontSize: "1.6em" }}>Iniciar Session
                            </p>
                        </div>
                        <Input size="sm"

                            value={formData.email}
                            onChange={(e) => setFormData({
                                ...formData,
                                email: e.target.value
                            })}
                            autoFocus
                            endContent={
                                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            label="Email"
                            placeholder="Enter your email"
                            variant="bordered"

                        />
                        <Input size="sm"
                            endContent={
                                <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }

                            errorMessage={loginErrors?.detail && loginErrors?.detail}
                            value={formData.password}
                            onChange={(e) => setFormData({
                                ...formData,
                                password: e.target.value
                            })}
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                            variant="bordered"
                        />

                        <Button type="submit"
                            className="w-full mb-5 mt-5 bg-gradient-to-tr from-black to-gray-700 text-white shadow-lg"
                            isLoading={isLoadingLogin}
                        >
                            Ingresar
                        </Button>
                        <div className="flex py-2 px-1 w-full  text-left">
                            <span className="text-sm mr-3" >
                                Crea una cuenta con Metamask{"  "}
                            </span>
                            <Link color="primary" href="#" size="sm">
                                Registrarse
                            </Link>
                        </div>

                    </div>
                </form>
            </ModalContainer>
        </>
    )
}

export default LoginModal