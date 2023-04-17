import React from "react";

const TextHero = () => {
    return (
        <div className="flex flex-col justify-center sm:mb-0 sm:px-0 ">
            <h1 className="text-4xl font-bold mb-2">Frontend developer</h1>
            <p className="text-base max-w-[350px]">
                Soy{" "}
                <span className="font-bold decoration-[2px] underline-offset-2 text-celadon underline">
                    Julio Roja
                </span>
                , un apasionado desarrollador web que vive en Argentina, Buenos
                Aires.
            </p>
            <button className="md:py-1 md:px-3 sm:w-52 bg-celadon text-white font-semibold rounded-full my-6 text-lg h-14">
                Contactame
            </button>
        </div>
    );
};

export default TextHero;
