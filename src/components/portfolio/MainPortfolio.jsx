"use client";
import React from "react";
import CardPortfolio from "./CardPortfolio";
import { motion } from "framer-motion";

const MainPortfolio = () => {
    return (
        <section
            className="h-auto pb-4 sm:pb-32 pt-10 sm:pt-44 bg-celadon relative"
            id="proyectos"
        >
            <div className="">
                <div>
                    <div className="z-10">
                        <motion.h2
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            ease="easeInOut"
                            className="font-bold mb-4 text-[3rem] sm:text-[15rem] absolute top-0 sm:-top-20 left-0 sm:left-10 sm:text-white"
                        >
                            PROYECTOS
                        </motion.h2>
                    </div>

                    <div className="flex gap-x-4 gap-y-6 flex-wrap justify-center z-30 relative">
                        <CardPortfolio img="/store.jpeg" />
                        <CardPortfolio img="/portfolio.jpeg" />
                        <CardPortfolio img="/inmobiliaria.png" />
                        <CardPortfolio img="/supermarket.jpg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainPortfolio;
