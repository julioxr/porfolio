import React from "react";
import CardPortfolio from "./CardPortfolio";

const MainPortfolio = () => {
    return (
        <section className="h-auto p-12 bg-celadon">
            <div className="container mx-auto">
                <h2 className="font-bold mb-4">Portfolio</h2>

                <div className="flex gap-4 justify-center">
                    <CardPortfolio img="/portfolio.jpeg" />
                    <CardPortfolio img="/store.jpeg" />
                </div>
            </div>
        </section>
    );
};

export default MainPortfolio;
