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
    const { signNupWithEmail, errorsRegister, clearErrorsRegister, isLoading } = useRegister()
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const { onOpen, onOpenChange, isOpen } = useDisclosure();
    const toggleVisibility1 = () => setIsVisible1(!isVisible1);
    const toggleVisibility2 = () => setIsVisible2(!isVisible2);

    const [formData, setFormData] = useState<UserRegisterData>({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        re_password: '',
    });


    const handleSubmit = (e: any) => {
        clearErrorsRegister()
        e.preventDefault()
        console.log(formData)
        signNupWithEmail(formData)
    }

    return (
        <>
            <Button
                onPress={onOpen}
                isExternal
                as={Link}
                color="primary"
                className="bg-gradient-to-tr from-black to-gray-700 text-white shadow-lg"
                variant="flat"

            >
                Registrarse
            </Button>
            <ModalContainer title="Registro de usuario"
                isOpen={isOpen}
                onOpen={onOpen}
                onOpenChange={onOpenChange}

                titleBtnOk="Registrarse"
            >
                <form onSubmit={handleSubmit}>


                    <div className="flex flex-col text-center space-y-3 items-center">
                        <div>

                            <Logo size={100} />

                            <p className="font-bold text-inherit text-center" style={{ fontSize: "1.6em" }}>Educam</p>
                        </div>
                        <div className="w-full text-left">

                            <Input
                                errorMessage={errorsRegister?.first_name && errorsRegister?.first_name?.[0]}
                                value={formData.first_name}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    first_name: e.target.value
                                })}
                                size="sm"
                                autoFocus
                                label="Nombres"
                                placeholder="Introduzca su nombre"
                                variant="bordered"



                            />
                        </div>
                        <div className="w-full text-left">

                            <Input
                                autoFocus
                                errorMessage={errorsRegister?.last_name && errorsRegister?.last_name?.[0]}
                                value={formData.last_name}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    last_name: e.target.value
                                })} size="sm"
                                label="Apellidos"
                                placeholder="Introduzca su apellido"
                                variant="bordered"
                            />
                        </div>
                        <div className="w-full text-left">

                            <Input size="sm"
                                autoFocus
                                value={formData.username}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    username: e.target.value
                                })}
                                label="Username"
                                placeholder="Introduzca un nombre de usuario"
                                variant="bordered"
                                errorMessage={errorsRegister?.username && errorsRegister?.username?.[0]}
                            />
                        </div>

                        <div className="w-full text-left">

                            <Input size="sm"
                                autoFocus
                                value={formData.email}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    email: e.target.value
                                })}
                                label="Email"
                                placeholder="Introduzca su  correo electronico"
                                variant="bordered"
                                errorMessage={errorsRegister?.email && errorsRegister?.email?.[0]}
                            />
                        </div>
                        <div className="w-full text-left">

                            <Input size="sm"
                                className="w-full"
                                label="Password"
                                variant="bordered"
                                errorMessage={errorsRegister?.password && errorsRegister?.password?.[0] || errorsRegister?.non_field_errors && errorsRegister?.non_field_errors?.[0]}
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
                        </div>
                        <div className="w-full text-left">

                            <Input size="sm"
                                label="Password"
                                variant="bordered"
                                placeholder="Enter your password"
                                value={formData.re_password}

                                errorMessage={errorsRegister?.re_password && errorsRegister?.re_password?.[0]}

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
                            <span style={{ color: "red" }}>
                                {errorsRegister?.detail}
                            </span>
                        </div>
                        <div className="flex py-2 px-1 w-full text-left">
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
                    <Button type="submit"
                        isLoading={isLoading}
                        className="w-full mb-5 mt-5 bg-gradient-to-tr from-black to-gray-700 text-white shadow-lg"

                    >
                        Registrarse Ahora
                    </Button>
                </form>


            </ModalContainer>
        </>
    )
}

export default RegisterModal