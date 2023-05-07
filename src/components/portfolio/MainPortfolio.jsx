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
            "Ecommerce especializado en productos de tecnología, donde podrás encontrar una amplia selección de gadgets y dispositivos electrónicos. Nuestro carrito de compra te permite agregar los productos que te interesan y finalizar tu compra de manera rápida y segura. ¡Haz tu pedido hoy y obtén los últimos avances en tecnología!",
        github: "https://github.com/julioxr/tienda",
        web: "https://tienda-julioxr.vercel.app/",
    },
    {
        id: 2,
        title: "Portfolio",
        img: "/portfolio.jpg",
        description:
            "Mi portfolio es una ventana a mi trabajo como desarrollador, en la que podrás explorar algunos de mis proyectos más recientes y destacados. Desde aplicaciones web hasta soluciones de software personalizadas, cada proyecto es una oportunidad para mostrar mis habilidades en el desarrollo de software y la implementación de tecnologías innovadoras. Espero que mi portfolio te brinde una visión más clara de mis habilidades y conocimientos, y te invite a explorar las muchas posibilidades que puedo ofrecer como desarrollador.",
        github: "https://github.com/julioxr/porfolio",
        web: "https://julioroja.dev.ar/",
    },
    {
        id: 3,
        title: "Inmobiliaria",
        img: "/inmobiliaria.png",
        description:
            "Landing page de inmobiliaria Cafran, donde te ofrecemos una selección exclusiva de propiedades inmobiliarias. Con nuestra amplia experiencia en el mercado inmobiliario, te garantizamos la calidad y la autenticidad de cada una de las propiedades que te presentamos en nuestro sitio web.",
        github: "https://github.com/julioxr/inmobiliaria-cafran",
        web: "https://cafran.netlify.app/",
    },
    {
        id: 4,
        title: "Supermarket",
        img: "/supermarket.jpg",
        description:
            "Nuestro check list de supermercado te permitirá planificar tus compras de manera efectiva y asegurarte de que no te olvides de nada importante en tu próxima visita al supermercado. Hemos diseñado nuestro check list con una variedad de categorías de productos, desde alimentos frescos hasta productos de limpieza, para que puedas organizar tus compras y maximizar tu tiempo en el supermercado. Además, hemos incluido espacio para notas y recordatorios, lo que te permite agregar elementos personalizados a la lista y adaptarla a tus necesidades individuales.",
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
