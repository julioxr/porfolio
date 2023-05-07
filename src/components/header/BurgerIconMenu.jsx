import React from "react";
import { GrMenu } from "react-icons/gr";

const BurgerIconMenu = ({ isMenuOpen, setIsMenuOpen }) => {
    const handleBurgerButton = () => {
        console.log("clikceaste");
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div
            className="text-3xl cursor-pointer md:hidden z-50"
            onClick={handleBurgerButton}
        >
            <GrMenu />
        </div>
    );
};

export default BurgerIconMenu;
