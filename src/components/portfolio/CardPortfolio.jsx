import React from "react";
import ImageCard from "./ImageCard";
import InfoCard from "./InfoCard";

const CardPortfolio = ({ img }) => {
    return (
        <div className="bg-white h-auto rounded-lg shadow-xl max-w-[760px]">
            <div className="flex justify-center items-center h-full">
                <ImageCard img={img} />
                <InfoCard />
            </div>
        </div>
    );
};

export default CardPortfolio;
