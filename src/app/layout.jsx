import MainMenu from "@/components/menu/MainMenu";
import Head from "next/head";
import "./globals.css";
import BurgerMenu from "@/components/menu/BurgerMenu";

export const metadata = {
    title: "Portfolio | Julio Roja",
    description: "Porftolio de Julio Roja, front end developer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className="scroll-smooth">
            <Head>
                <link rel="icon" href="/julioLogo.png" />
            </Head>
            <body className="text-night overflow-x-hidden">
                <BurgerMenu />
                {/* <MainMenu /> */}
                <main>{children}</main>
            </body>
        </html>
    );
}
