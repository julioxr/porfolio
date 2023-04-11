import React from "react";
import SocialsHero from "./SocialsFooter";

const MainFooter = () => {
    return (
        <footer className="h-24 bg-night text-white">
            <div className="container mx-auto flex justify-between items-center h-full">
                <div>
                    <p className="font-semibold text-sm">
                        Copyright ©2023 - Todos los derechos reservados
                    </p>
                </div>
                <div>
                    <SocialsHero />
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
