"use client";
import { useState } from "react";
import ReactGA from "react-ga";
import MainMenuHeader from "@/components/header/MainMenuHeader";
import BurgerMenuHeader from "@/components/header/BurgerMenuHeader";

const TRACKING_ID = "G-60T6ES4N7Z";
ReactGA.initialize(TRACKING_ID);

const MainHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header id="inicio">
            {isMenuOpen && <BurgerMenuHeader handleMenu={handleMenu} />}
            <MainMenuHeader
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
        </header>
    );
};

export default MainHeader;
