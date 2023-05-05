"use client";
import { useState } from "react";
import MainMenuHeader from "@/components/header/MainMenuHeader";
import BurgerMenuHeader from "@/components/header/BurgerMenuHeader";
import BurgerIconMenu from "./BurgerIconMenu";

const MainHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleBurgerButton = () => {
        console.log("clikceaste");
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <BurgerIconMenu handleBurgerButton={handleBurgerButton} />
            <MainMenuHeader />
            {isMenuOpen && <BurgerMenuHeader />}
        </>
    );
};

export default MainHeader;
