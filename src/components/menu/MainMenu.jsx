"use client";
import React from "react";
import { motion } from "framer-motion";

const MainMenu = () => {
    return (
        <motion.header
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1 }}
        >
            <div className="flex justify-between items-center container mx-auto h-12 sm:h-16 px-8 sm:px-0 gap-8">
                <div className="font-bold text-2xl sm:text-3xl mr-auto text-night">
                    Julio.dev
                </div>
                <div className="hidden md:block h-full">
                    <ul className="list-none gap-6 flex text-lg font-medium items-center h-full">
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            className="hover:text-celadon border-celadon decoration-celadon p-2"
                        >
                            <a href="#inicio">Inicio</a>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            className="hover:text-celadon border-celadon decoration-celadon"
                        >
                            <a href="#proyectos">Proyectos</a>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            className="hover:text-celadon border-celadon decoration-celadon"
                        >
                            <a href="#sobre-mi">Sobre mi</a>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            className="hover:text-celadon border-celadon decoration-celadon"
                        >
                            <a href="#contacto">Contacto</a>
                        </motion.li>
                    </ul>
                </div>
                <button className="hidden md:block py-1 px-3 bg-celadon w-32 text-night rounded-full">
                    Descargar CV
                </button>
            </div>
        </motion.header>
    );
};

export default MainMenu;
