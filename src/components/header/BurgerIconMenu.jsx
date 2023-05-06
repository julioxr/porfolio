import React from "react";
import { GrMenu } from "react-icons/gr";

const BurgerIconMenu = ({ isMenuOpen, setIsMenuOpen }) => {
    const handleBurgerButton = () => {
        console.log("clikceaste");
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div
            className="absolute right-5 top-5 text-3xl cursor-pointer md:hidden"
            onClick={handleBurgerButton}
        >
            <GrMenu />
        </div>
    );
};

export default BurgerIconMenu;
