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
            }, 500);
        }, 6000);
    }, []);

    return (
        <div className="flex flex-col justify-center sm:mb-0 sm:px-0 text-center md:text-start max-w-none">
            <motion.h1
                initial={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                animate={{ y: 0.4, opacity: 1 }}
                className="text-4xl md:text-5xl font-bold mb-2"
            >
                Frontend developer
            </motion.h1>
            <motion.p
                initial={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                animate={{ y: 0.4, opacity: 1 }}
                className="md:text-lg max-w-[350px] md:max-w-sm"
            >
                Soy{" "}
                <span className="font-bold decoration-[2px] underline-offset-2 text-celadon underline">
                    Julio Roja
                </span>
                , un apasionado desarrollador web que vive en Argentina, Buenos
                Aires.
            </motion.p>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                animate={shouldShake ? "shake" : undefined}
                variants={{
                    shake: {
                        rotate: [0, 3, -3, 2, -2, 1, -1, 0],
                        transition: {
                            duration: 0.5,
                        },
                        opacity: 1,
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
