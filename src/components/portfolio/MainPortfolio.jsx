import React from "react";
import CardPortfolio from "./CardPortfolio";

const MainPortfolio = () => {
    return (
        <section
            className="h-auto pb-32 pt-44 bg-celadon relative"
            id="proyectos"
        >
            <div className="container mx-auto">
                <div>
                    <div className="z-10">
                        <h2 className="font-bold mb-4 text-[15rem] absolute -top-20 left-10 text-white">
                            PROYECTOS
                        </h2>
                    </div>

                    <div className="flex gap-x-4 gap-y-6 flex-wrap justify-start z-30 relative">
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
