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
            className="h-auto pb-14 sm:pb-16 md:pb-32 pt-2 sm:pt-8 md:pt-14 bg-celadon relative"
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
                            className="font-bold text-[4rem] sm:text-8xl pl-4 sm:pl-11 pb-0 sm:pb-4 md:text-[9rem] text-white"
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
