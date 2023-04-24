"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TextHero = () => {
    const [shouldShake, setShouldShake] = useState(false);
    useEffect(() => {
        setInterval(() => {
            setShouldShake(true);
            setTimeout(() => {
                setShouldShake(false);
            }, 500); // Duración de la animación de shake (en milisegundos)
        }, 6000); // Intervalo de tiempo para activar el shake (en milisegundos)
    }, []);

    return (
        <div className="flex flex-col justify-center sm:mb-0 sm:px-0 text-center md:text-start">
            <h1 className="text-4xl font-bold mb-2">Frontend developer</h1>
            <p className="text-base max-w-[350px]">
                Soy{" "}
                <span className="font-bold decoration-[2px] underline-offset-2 text-celadon underline">
                    Julio Roja
                </span>
                , un apasionado desarrollador web que vive en Argentina, Buenos
                Aires.
            </p>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.1 }}
                animate={shouldShake ? "shake" : undefined}
                variants={{
                    shake: {
                        rotate: [0, 3, -3, 2, -2, 1, -1, 0],
                        transition: {
                            duration: 0.5,
                        },
                    },
                }}
                className="md:py-1 md:px-3 w-60 self-center md:self-start sm:w-52 bg-celadon text-white font-semibold rounded-full my-6 text-lg h-14"
            >
                <a href="#contacto">Contactame</a>
            </motion.button>
        </div>
    );
};

export default TextHero;
