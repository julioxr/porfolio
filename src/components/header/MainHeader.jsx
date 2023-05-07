"use client";
import { useState } from "react";
import MainMenuHeader from "@/components/header/MainMenuHeader";
import BurgerMenuHeader from "@/components/header/BurgerMenuHeader";

const MainHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="">
            {isMenuOpen && <BurgerMenuHeader />}
            <MainMenuHeader
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
        </header>
    );
};

export default MainHeader;
