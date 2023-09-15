import useRegister from "@/redux/Auth/hooks/useRegister"
import { UserRegisterData } from "@/redux/Auth/interfaces/register.models"
import { Button } from "@nextui-org/button"
import { Checkbox } from "@nextui-org/checkbox"
import { Input } from "@nextui-org/input"
import { Link } from "@nextui-org/link"
import { useDisclosure } from "@nextui-org/modal"
import { useState } from "react"
import { EyeFilledIcon } from "../icons/EyeFilledIcon"
import { EyeSlashFilledIcon } from "../icons/EyeSlashFilledIcon"
import { Logo } from "../icons/icons"
import ModalContainer from "./ModalContainer"


const RegisterModal = () => {
    const { signNupWithEmail } = useRegister()
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const { onOpen, onOpenChange, isOpen } = useDisclosure();
    const toggleVisibility1 = () => setIsVisible1(!isVisible1);
    const toggleVisibility2 = () => setIsVisible2(!isVisible2);

    const [formData, setFormData] = useState<UserRegisterData>({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        re_password: '',
    });


    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(formData)
        signNupWithEmail(formData)
    }
    const handleRegister = () => {
    }
    return (
        <>
            <Button
                onPress={onOpen}
                isExternal
                as={Link}
                color="primary"
                className="text-sm font-normal text-default-600 "
                variant="flat"

            >
                Registrarse
            </Button>
            <ModalContainer title="Registro de usuario"
                isOpen={isOpen}
                onOpen={onOpen}
                onOpenChange={onOpenChange}
                handleClickOk={handleRegister}
                titleBtnOk="Registrarse"
            >
                <form onSubmit={handleSubmit}>


                    <div className="flex flex-col text-center space-y-3 items-center">
                        <div>

                            <Logo size={100} />

                            <p className="font-bold text-inherit text-center" style={{ fontSize: "1.6em" }}>Educam</p>
                        </div>
                        <Input
                            value={formData.firstName}
                            onChange={(e) => setFormData({
                                ...formData,
                                firstName: e.target.value
                            })}
                            autoFocus
                            label="Nombres"
                            placeholder="Introduzca su nombre"
                            variant="bordered"
                        />
                        <Input
                            autoFocus
                            value={formData.lastName}
                            onChange={(e) => setFormData({
                                ...formData,
                                lastName: e.target.value
                            })}
                            label="Apellidos"
                            placeholder="Introduzca su apellido"
                            variant="bordered"
                        />
                        <Input
                            autoFocus
                            value={formData.username}
                            onChange={(e) => setFormData({
                                ...formData,
                                username: e.target.value
                            })}
                            label="Username"
                            placeholder="Introduzca un nombre de usuario"
                            variant="bordered"
                        />
                        <Input
                            autoFocus
                            value={formData.email}
                            onChange={(e) => setFormData({
                                ...formData,
                                email: e.target.value
                            })}
                            label="Email"
                            placeholder="Introduzca su  correo electronico"
                            variant="bordered"
                        />

                        <Input
                            className="w-full"
                            label="Password"
                            variant="bordered"
                            value={formData.password}
                            onChange={(e) => setFormData({
                                ...formData,
                                password: e.target.value
                            })}
                            placeholder="Enter your password"
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={toggleVisibility1}>
                                    {isVisible1 ? (
                                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    )}
                                </button>
                            }
                            type={isVisible1 ? "text" : "password"}

                        />
                        <Input
                            label="Password"
                            variant="bordered"
                            placeholder="Enter your password"
                            value={formData.re_password}
                            onChange={(e) => setFormData({
                                ...formData,
                                re_password: e.target.value
                            })}
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={toggleVisibility2}>
                                    {isVisible2 ? (
                                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    )}
                                </button>
                            }
                            type={isVisible2 ? "text" : "password"}
                            className="w-full"
                        />
                        <div className="flex py-2 px-1 justify-between">
                            <Checkbox
                                classNames={{
                                    label: "text-small",
                                }}
                            >
                                Aceptar Terminos y Condiciones
                            </Checkbox>
                            <Link color="primary" href="#" size="sm">
                                Ya tiene  una cuenta?
                            </Link>
                        </div>
                    </div>
                    <Button type="submit" className="w-full" color="primary">
                        Registrarse Ahora
                    </Button>
                </form>


            </ModalContainer>
        </>
    )
}

export default RegisterModal