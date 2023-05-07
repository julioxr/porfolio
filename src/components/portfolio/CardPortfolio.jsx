import React from "react";
import ImageCard from "./ImageCard";
import InfoCard from "./InfoCard";

const CardPortfolio = ({ img, title, description, web, github, tech }) => {
    return (
        <div className="bg-white h-auto rounded-lg shadow-xl w-96 md:w-[27rem] lg:w-[40rem] xl:w-[48rem]">
            <div className="flex flex-col lg:flex-row justify-center items-center h-full">
                <ImageCard img={img} />
                <InfoCard
                    title={title}
                    description={description}
                    web={web}
                    github={github}
                    tech={tech}
                />
            </div>
        </div>
    );
};

export default CardPortfolio;
