import React from "react";
import FormContacto from "./FormContacto";

const MainContacto = () => {
    return (
        <section
            className="bg-celadon w-full text-night bg-[url('/ornament.svg')]"
            id="contacto"
        >
            <div className="container mx-auto">
                <h2 className="font-bold text-5xl pt-10 text-white text-center">
                    Contactame
                </h2>
                <FormContacto />
            </div>
        </section>
    );
};

export default MainContacto;
