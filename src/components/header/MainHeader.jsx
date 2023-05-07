"use client";
import { useState } from "react";
import MainMenuHeader from "@/components/header/MainMenuHeader";
import BurgerMenuHeader from "@/components/header/BurgerMenuHeader";

const MainHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="">
            {isMenuOpen && <BurgerMenuHeader handleMenu={handleMenu} />}
            <MainMenuHeader
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
        </header>
    );
};

export default MainHeader;
