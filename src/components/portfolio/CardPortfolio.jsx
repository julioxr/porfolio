import React from "react";
import ImageCard from "./ImageCard";
import InfoCard from "./InfoCard";
import { motion } from "framer-motion";

const CardPortfolio = ({ img, title, description, web, github, tech }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white h-auto rounded-lg shadow-xl w-96 md:w-[27rem] lg:w-[40rem] xl:w-[48rem]"
        >
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
        </motion.div>
    );
};

export default CardPortfolio;
