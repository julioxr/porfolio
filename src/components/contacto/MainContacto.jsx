"use client";
import FormContacto from "./FormContacto";
import Image from "next/image";
import WavesContacto from "./WavesContacto";
import { motion } from "framer-motion";

const MainContacto = () => {
    return (
        <section
            className="bg-night relative w-full pt-4 text-night bg-[url('/fondodos.svg')] px-8 overflow-x-hidden"
            id="contacto"
        >
            <motion.h2
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-8 sm:top-2 md:top-4 left-4 sm:left-11 sm:text-[5rem] md:text-[9rem]  z-10 font-bold text-white text-[3.5rem]"
            >
                CONTACTAME
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="flex container mx-auto w-full justify-between items-center max-w-lg md:max-w-5xl gap-8 "
            >
                <div className="w-full md:w-1/2 z-30">
                    <FormContacto />
                </div>
                <div className="w-1/2 my-6 hidden md:block sm:max-w-[20rem] md:max-w-[30rem] h-auto z-30 ">
                    <Image
                        src="/contacto.svg"
                        alt="Imagen de contacto con persona hablando"
                        width={800}
                        height={800}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default MainContacto;
