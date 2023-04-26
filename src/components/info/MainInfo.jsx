"use client";
import React from "react";
import Waves from "../waves/Waves";
import Image from "next/image";
import { motion } from "framer-motion";
import WavesContacto from "../contacto/WavesContacto";

const MainInfo = () => {
    return (
        <section
            className="pt-24 sm:pt-20 md:pt-40 md:pb-24 relative h-auto"
            id="sobre-mi"
        >
            <div className="container mx-auto flex justify-center pb-10 sm:pt-20 sm:pb-32 w-full">
                <div className="max-w-5xl flex flex-col md:flex-row w-full gap-12 items-center ">
                    <div className="z-20">
                        <Image
                            src="/aboutMe.svg"
                            width={800}
                            height={800}
                            alt="Imagen de persona trabajando en la pc"
                            className="max-w-[350px] sm:max-w-[25rem] md:max-w-xl"
                        />
                    </div>
                    <div className="flex flex-col gap-3 md:w-[40rem]">
                        <motion.h4 className="absolute top-8 sm:top-14 left-4 sm:left-11 sm:text-[6rem] md:text-[9rem] z-10 font-bold text-celadon text-[4rem] -rotate-2 lg:top-20">
                            SOBRE MI
                        </motion.h4>
                        <h2 className="font-bold text-lg underline underline-offset-2 decoration-[2px] px-8 md:px-0">
                            Un desarrollador Front End dedicado
                        </h2>
                        <div className="flex gap-4 flex-col w-full pb-8 sm:pb-0">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="text-sm text-gray-500 px-8 md:px-0"
                            >
                                ¡Hola! Soy un desarrollador frontend con amplias
                                habilidades en tecnologías como Next.js, React,
                                JavaScript, Tailwind y Firebase, las cuales
                                utilizo a diario en mi trabajo. También tengo
                                experiencia en tecnologías de backend como
                                NodeJS, Express, MongoDB y MySQL.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="text-sm text-gray-500 px-8 md:px-0"
                            >
                                Hace 2 años decidí incursionar en el desarrollo
                                web y desde entonces he demostrado ser un
                                autodidacta apasionado por aprender y mejorar
                                constantemente. Actualmente, trabajo como QA
                                hace 6 años, lo que me ha brindado una visión
                                más completa y crítica sobre el desarrollo de
                                software.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="text-sm text-gray-500 px-8 md:px-0"
                            >
                                Soy una persona con iniciativa y orientada a
                                resultados, siempre dispuesto a colaborar con mi
                                equipo y brindar ayuda a quienes lo necesitan.
                                Me gusta enseñar y compartir mis conocimientos
                                para ayudar a los demás a crecer y mejorar.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
            <Waves />
            <WavesContacto />
        </section>
    );
};

export default MainInfo;
