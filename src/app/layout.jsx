import MainMenu from "@/components/menu/MainMenu";
import "./globals.css";

export const metadata = {
    title: "Portfolio | Julio Roja",
    description: "Porftolio de Julio Roja, front end developer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <MainMenu />
                <main className="container mx-auto">{children}</main>
            </body>
        </html>
    );
}
