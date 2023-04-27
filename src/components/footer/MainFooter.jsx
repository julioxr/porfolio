import React from "react";
import SocialsHero from "./SocialsFooter";

const MainFooter = () => {
    return (
        <footer className="md:h-16 bg-night text-white px-8 sm:px-0 z-40 -mt-1">
            <div className="container mx-auto flex md:flex-row flex-col-reverse justify-center  sm:gap-0 sm:justify-between items-center h-full">
                <div>
                    <p className="font-semibold text-sm py-4">
                        Copyright ©2023 - Todos los derechos reservados
                    </p>
                </div>
                <div className="flex sm:flex-row flex-col-reverse gap-4 sm:gap-12 justify-center items-center pt-4 md:pt-0">
                    <h3 className="text-white">julioroja987@gmail.com</h3>
                    <SocialsHero />
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
