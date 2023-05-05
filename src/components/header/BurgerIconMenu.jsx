import React from "react";
import { GrMenu } from "react-icons/gr";

const BurgerIconMenu = ({ handleBurgerButton }) => {
    return (
        <div
            className="absolute right-8 top-8 text-3xl cursor-pointer"
            onClick={handleBurgerButton}
        >
            <GrMenu />
        </div>
    );
};

export default BurgerIconMenu;
