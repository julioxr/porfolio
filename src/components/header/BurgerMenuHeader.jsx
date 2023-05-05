"use client";
import { motion } from "framer-motion";

const BurgerMenuHeader = () => {
    return (
        <section
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 0 }}
            className="fixed bg-celadon z-40 min-h-screen h-auto w-full shadow-xl shadow-night/20 overflow-hidden"
        >
            <div className="min-h-screen flex items-center pb-40 justify-center flex-col gap-8">
                <ul className="list-none gap-8 flex flex-col text-2xl font-medium items-center">
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                        className="hover:text-celadon border-celadon decoration-celadon"
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
                <button className=" py-3 px-24 text-lg font-medium bg-night text-white rounded-full">
                    <a href="/cv/CV_JULIO_ROJA.pdf" download>
                        Descargar CV
                    </a>
                </button>
            </div>
        </section>
    );
};

export default BurgerMenuHeader;
