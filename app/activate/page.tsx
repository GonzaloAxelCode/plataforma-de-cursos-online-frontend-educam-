'use client';
import useActivate from '@/redux/Auth/hooks/useActivate';
import { useRouter, useSearchParams } from 'next/navigation';

import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

const ActivatePage = () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const [token, setToken] = useState('');
    const [uid, setUID] = useState('');
    const { activateAccountWithToken, isLoadingActivateAccount } = useActivate()

    useEffect(() => {
        const tokenParam = searchParams.get('token');
        const uidParam = searchParams.get('uid');

        setToken(tokenParam || "");
        setUID(uidParam || "");

    }, [searchParams])
    return (
        <div className="pt-32  px-4 py-8 sm:px-6">
            <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="ml-4 mt-4">
                    <h3 style={{ fontSize: "3em" }} className=" mt-3 mb-3 font-bold  leading-6 text-gray-900 dark:text-dark-txt">
                        Bienvenido a Educam
                    </h3>
                    <p className="font-regular mt-2 max-w-4xl text-lg text-gray-900 dark:text-dark-txt-secondary">
                        Antes de continuar por favor activa tu cuenta.
                    </p>
                    <Button
                        className="w-300 mb-5 mt-5 bg-gradient-to-tr from-black to-gray-700 text-white shadow-lg"
                        onPress={() => activateAccountWithToken(uid, token)} isLoading={isLoadingActivateAccount}>
                        Activar Cuenta
                    </Button>
                </div>


            </div>
        </div>
    )
}

export default ActivatePage