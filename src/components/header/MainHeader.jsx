"use client";
import { useState } from "react";
import MainMenuHeader from "@/components/header/MainMenuHeader";
import BurgerMenuHeader from "@/components/header/BurgerMenuHeader";

const MainHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <MainMenuHeader
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
            {isMenuOpen && <BurgerMenuHeader />}
        </>
    );
};

export default MainHeader;
