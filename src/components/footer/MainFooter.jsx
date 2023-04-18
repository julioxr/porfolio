import React from "react";
import SocialsHero from "./SocialsFooter";

const MainFooter = () => {
    return (
        <footer className="h-24 bg-night text-white px-8 sm:px-0 z-40">
            <div className="container mx-auto flex sm:flex-row flex-col-reverse justify-center gap-2 sm:gap-0 sm:justify-between items-center h-full">
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
