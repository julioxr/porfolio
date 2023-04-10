import MainMenu from "@/components/menu/MainMenu";
import Head from "next/head";
import "./globals.css";

export const metadata = {
    title: "Portfolio | Julio Roja",
    description: "Porftolio de Julio Roja, front end developer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <Head>
                <link rel="icon" href="/julioLogo.png" />
            </Head>
            <body>
                <MainMenu />
                <main>{children}</main>
            </body>
        </html>
    );
}
