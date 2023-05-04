import React from "react";
import ImageCard from "./ImageCard";
import InfoCard from "./InfoCard";

const CardPortfolio = ({ img, title, description, web, github }) => {
    return (
        <div className="bg-white h-auto rounded-lg shadow-xl max-w-3xl">
            <div className="flex sm:flex-row flex-col justify-center items-center h-full">
                <ImageCard img={img} />
                <InfoCard
                    title={title}
                    description={description}
                    web={web}
                    github={github}
                />
            </div>
        </div>
    );
};

export default CardPortfolio;
