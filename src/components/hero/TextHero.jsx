import React from "react";

const TextHero = () => {
    return (
        <div className="flex flex-col justify-center gap-2 sm:gap-6 mb-6 sm:mb-0 px-8 sm:px-0 ">
            <h1 className="text-4xl font-bold">Frontend developer</h1>
            <p className="text-base max-w-[350px]">
                Soy{" "}
                <span className="font-bold decoration-[2px] underline-offset-2 text-celadon underline">
                    Julio Roja
                </span>
                , un apasionado desarrollador web que vive en Argentina, Buenos
                Aires.
            </p>
            <button className="py-1 px-3 w-32 bg-celadon text-night rounded-full mt-2">
                Contactame
            </button>
        </div>
    );
};

export default TextHero;
