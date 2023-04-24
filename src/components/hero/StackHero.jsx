import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const frontTechnologies = [
    {
        name: "NextJS",
        src: "/stack/nextjs.svg",
    },
    {
        name: "ReactJS",
        src: "/stack/reactjs.svg",
    },
    {
        name: "JavaScript",
        src: "/stack/js.svg",
    },
    {
        name: "TypeScript",
        src: "/stack/ts.svg",
    },
    {
        name: "TailwindCSS",
        src: "/stack/tailwind.svg",
    },
    {
        name: "Firebase",
        src: "/stack/firebase.svg",
    },
];

const backTechnologies = [
    {
        name: "NodeJS",
        src: "/stack/node.svg",
    },
    {
        name: "ExpressJS",
        src: "/stack/express.svg",
    },
    {
        name: "MongoDB",
        src: "/stack/mongo.svg",
    },
    {
        name: "MySQL",
        src: "/stack/sql.svg",
    },
];

const StackHero = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-start justify-start max-w-[350px] w-full sm:w-auto"
        >
            {/* <h2 className="font-bold hidden sm:block sm:mb-4 mb-2 underline decoration-[2px]">
                Stack Tecnológico
            </h2> */}
            <h2 className="font-semibold pb-1">Front</h2>
            <div className="flex flex-wrap gap-2 sm:gap-4 font-light sm:mt-2">
                {frontTechnologies &&
                    frontTechnologies.map(({ src, name }) => {
                        return (
                            <Image
                                src={src}
                                alt={name}
                                width={45}
                                height={45}
                                className="w-10"
                                key={name}
                            />
                        );
                    })}
            </div>
            <h2 className="font-semibold mt-2 pb-1">Back</h2>
            <div className="flex flex-wrap gap-2 sm:gap-4 font-light sm:mt-2">
                {backTechnologies &&
                    backTechnologies.map(({ src, name }) => {
                        return (
                            <Image
                                src={src}
                                alt={name}
                                width={45}
                                height={45}
                                className="w-10"
                                key={name}
                            />
                        );
                    })}
            </div>
        </motion.div>
    );
};

export default StackHero;
