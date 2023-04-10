import MainContacto from "@/components/contacto/MainContacto";
import MainFooter from "@/components/footer/MainFooter";
import MainHero from "@/components/hero/MainHero";
import MainInfo from "@/components/info/MainInfo";
import MainPortfolio from "@/components/portfolio/MainPortfolio";

export default function Home() {
    return (
        <>
            <MainHero />
            <MainPortfolio />
            <MainInfo />
            <MainContacto />
            <MainFooter />
        </>
    );
}
