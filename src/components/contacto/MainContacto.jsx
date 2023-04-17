import React from "react";
import FormContacto from "./FormContacto";

const MainContacto = () => {
    return (
        <section
            className="bg-celadon w-full text-night bg-[url('/ornament.svg')] px-8"
            id="contacto"
        >
            <div className="container mx-auto">
                <h2 className="font-bold text-5xl py-6 sm:py-10 text-white text-center">
                    Contactame
                </h2>
                <FormContacto />
            </div>
        </section>
    );
};

export default MainContacto;
