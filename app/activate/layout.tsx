import { Navbar } from "@/components/navbar/navbar";


export const metadata = {
    title: 'Activate - ',
    description:
        'Cursos interactivos y de alta calidad para aprender en Educam. Únete a nuestra academia y transforma tu carrera en programación, sin importar tu nivel de experiencia.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <Navbar />
            {children}

        </section>
    );
}