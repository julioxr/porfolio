import "./globals.css";

export const metadata = {
    title: "Portfolio | Julio Roja",
    description: "Porftolio de Julio Roja, front end developer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
