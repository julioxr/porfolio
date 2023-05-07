"use client";
import { motion } from "framer-motion";

const BurgerMenuHeader = ({ handleMenu }) => {
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
                        className="hover:text-white border-celadon decoration-celadon"
                    >
                        <a href="#inicio" onClick={handleMenu}>
                            Inicio
                        </a>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                        className="hover:text-white border-celadon decoration-celadon"
                    >
                        <a href="#proyectos" onClick={handleMenu}>
                            Proyectos
                        </a>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                        className="hover:text-white border-celadon decoration-celadon"
                    >
                        <a href="#sobre-mi" onClick={handleMenu}>
                            Sobre mi
                        </a>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                        className="hover:text-white border-celadon decoration-celadon"
                    >
                        <a href="#contacto" onClick={handleMenu}>
                            Contacto
                        </a>
                    </motion.li>
                </ul>
                <a href="/cv/CV_JULIO_ROJA.pdf" download>
                    <button
                        className=" py-3 px-12 text-lg font-medium bg-night text-white rounded-full"
                        onClick={handleMenu}
                    >
                        Descargar CV
                    </button>
                </a>
            </div>
        </section>
    );
};

export default BurgerMenuHeader;
