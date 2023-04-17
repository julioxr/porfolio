"use client";
import React from "react";
import CardPortfolio from "./CardPortfolio";
import { motion } from "framer-motion";

const cards = [
    {
        title: "Supermarket",
        img: "/store.jpeg",
    },
    {
        title: "Portfolio",
        img: "/portfolio.jpeg",
    },
    {
        title: "Inmobiliaria",
        img: "/inmobiliaria.png",
    },
    {
        title: "Supermarket",
        img: "/supermarket.jpg",
    },
];

const MainPortfolio = () => {
    return (
        <section
            className="h-auto pb-4 sm:pb-32 pt-16 sm:pt-44 bg-celadon relative"
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
                            className="font-bold mb-4 text-[4rem] sm:text-[15rem] absolute top-0 sm:-top-20 left-0 sm:left-10 text-white"
                        >
                            PROYECTOS
                        </motion.h2>
                    </div>

                    <div className="flex gap-x-4 gap-y-6 flex-wrap justify-center z-30 relative px-8 sm:px-8">
                        {cards.map((card) => {
                            return <CardPortfolio img={card.img} />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainPortfolio;
