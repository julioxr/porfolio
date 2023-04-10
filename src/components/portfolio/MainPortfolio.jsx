import React from "react";
import CardPortfolio from "./CardPortfolio";

const MainPortfolio = () => {
    return (
        <section className="h-auto pb-48 pt-32 bg-celadon">
            <div className="container mx-auto">
                <div>
                    <h2 className="font-bold text-xl mb-4">Portfolio</h2>

                    <div className="flex gap-x-4 gap-y-8 flex-wrap justify-start">
                        <CardPortfolio img="/portfolio.jpeg" />
                        <CardPortfolio img="/store.jpeg" />
                        <CardPortfolio img="/supermarket.jpg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainPortfolio;
