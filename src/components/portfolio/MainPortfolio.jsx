"use client";
import React from "react";
import CardPortfolio from "./CardPortfolio";
import { motion } from "framer-motion";

const cards = [
    {
        id: 1,
        title: "Supermarket",
        img: "/store.jpeg",
    },
    {
        id: 2,
        title: "Portfolio",
        img: "/portfolio.jpg",
    },
    {
        id: 3,
        title: "Inmobiliaria",
        img: "/inmobiliaria.png",
    },
    {
        id: 4,
        title: "Supermarket",
        img: "/supermarket.jpg",
    },
];

const MainPortfolio = () => {
    return (
        <section
            className="h-auto pb-14 sm:pb-16 md:pb-32 pt-24 sm:pt-32 md:pt-48 bg-celadon relative"
            id="proyectos"
        >
            <div className="">
                <div>
                    <div className="z-10 -rotate-2">
                        <motion.h2
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="font-bold -mt-20 sm:-mt-6 md:-mt-16 mb-4 text-[4rem] sm:text-8xl md:text-[9rem] absolute -top-1 sm:-top-20 left-4 sm:left-10 text-white"
                        >
                            PROYECTOS
                        </motion.h2>
                    </div>

                    <div className="flex gap-x-4 gap-y-6 flex-wrap justify-center z-30 relative px-8 sm:px-8">
                        {cards.map((card) => {
                            return (
                                <CardPortfolio img={card.img} key={card.id} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainPortfolio;
