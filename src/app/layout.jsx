import Head from "next/head";
import "./globals.css";

export const metadata = {
    title: "Portfolio | Julio Roja",
    description: "Porftolio de Julio Roja, front end developer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className="scroll-smooth">
            <Head>
                <link rel="icon" href="/julioLono.png" sizes="any" />
                {/* <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-60T6ES4N7Z"
                ></Script>
                <Script>
                    {`
                   window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-60T6ES4N7Z');
                    `}
                </Script> */}
            </Head>
            <body className="text-night overflow-x-hidden">
                <main>{children}</main>
            </body>
        </html>
    );
}
