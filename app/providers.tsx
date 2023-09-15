'use client';

import '@/styles/toastStyles.css';
import { SessionProvider } from 'next-auth/react';
import 'react-toastify/dist/ReactToastify.css';

import { store } from '@/config/redux/store';
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";
import { Provider } from "react-redux";

export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}


export function Providers({ children, themeProps }: ProvidersProps) {
    return (
        <Provider store={store}>
            <NextUIProvider>
                <SessionProvider>

                    {children}

                </SessionProvider>
            </NextUIProvider>
        </Provider>
    );
}
