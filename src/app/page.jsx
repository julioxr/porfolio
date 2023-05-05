import MainHeader from "@/components/header/MainHeader";
import MainHero from "@/components/hero/MainHero";
import MainPortfolio from "@/components/portfolio/MainPortfolio";
import MainInfo from "@/components/info/MainInfo";
import MainContacto from "@/components/contacto/MainContacto";
import MainFooter from "@/components/footer/MainFooter";

export default function Home() {
    return (
        <>
            <MainHeader />
            <MainHero />
            <MainPortfolio />
            <MainInfo />
            <MainContacto />
            <MainFooter />
        </>
    );
}
