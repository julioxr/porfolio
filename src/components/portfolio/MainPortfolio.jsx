"use client";
import React from "react";
import CardPortfolio from "./CardPortfolio";
import { motion } from "framer-motion";

const cards = [
    {
        id: 1,
        title: "Store",
        img: "/store.jpeg",
        description:
            "Ecommerce de una tienda de articulos de technologia, con carrito de compra",
        github: "https://github.com/julioxr/tienda",
        web: "https://tienda-julioxr.vercel.app/",
    },
    {
        id: 2,
        title: "Portfolio",
        img: "/portfolio.jpg",
        description:
            "Ecommerce de una tienda de articulos de technologia, con carrito de compra",
        github: "https://github.com/julioxr/porfolio",
        web: "https://julioroja.dev.ar/",
    },
    {
        id: 3,
        title: "Inmobiliaria",
        img: "/inmobiliaria.png",
        description:
            "Ecommerce de una tienda de articulos de technologia, con carrito de compra",
        github: "https://github.com/julioxr/inmobiliaria-cafran",
        web: "https://cafran.netlify.app/",
    },
    {
        id: 4,
        title: "Supermarket",
        img: "/supermarket.jpg",
        description:
            "Ecommerce de una tienda de articulos de technologia, con carrito de compra",
        github: "https://github.com/julioxr/supermarket-crud-tailwind",
        web: "https://supermarket-checklist.netlify.app/",
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
                                <CardPortfolio
                                    img={card.img}
                                    key={card.id}
                                    title={card.title}
                                    description={card.description}
                                    web={card.web}
                                    github={card.github}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainPortfolio;
