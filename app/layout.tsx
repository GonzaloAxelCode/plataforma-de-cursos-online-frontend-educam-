import "@/styles/globals.css";
import { Metadata } from "next";
import localFont from 'next/font/local';
import { Providers } from "./providers";
export const metadata: Metadata = {
	//	title: {
	//default: siteConfig.name,
	//		template: `%s - ${siteConfig.name}`,

	//},
	title: "Educam - Academia de Programación",

	description:
		'Cursos interactivos y de alta calidad para aprender Programacion. Únete a nuestra academia y transforma tu carrera en programación, sin importar tu nivel de experiencia.',

	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

const font = localFont({
	src: [
		{
			path: '../styles/fonts/circular/CircularStd-Book.woff',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../styles/fonts/circular/CircularStd-BookItalic.woff',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../styles/fonts/circular/CircularStd-Medium.woff',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../styles/fonts/circular/CircularStd-MediumItalic.woff',
			weight: '500',
			style: 'italic',
		},
		{
			path: '../styles/fonts/circular/CircularStd-Bold.woff',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../styles/fonts/circular/CircularStd-BoldItalic.woff',
			weight: '700',
			style: 'italic',
		},
		{
			path: '../styles/fonts/circular/CircularStd-Light.woff',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../styles/fonts/circular/CircularStd-Light-Italic.woff',
			weight: '300',
			style: 'italic',
		},
		{
			path: '../styles/fonts/circular/CircularStd-Black.woff',
			weight: '900',
			style: 'normal',
		},
		{
			path: '../styles/fonts/circular/CircularStd-BlackItalic.woff',
			weight: '900',
			style: 'italic',
		},
	],
});



export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className={font.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
