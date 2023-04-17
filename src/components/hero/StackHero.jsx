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
            className="sm:flex flex-col items-start justify-start w-full max-w-4xl px-8 sm:px-0"
        >
            <h2 className="font-bold sm:mb-4 mb-2 underline decoration-[2px]">
                Stack Tecnológico
            </h2>
            <h2 className="font-semibold">Front</h2>
            <div className="flex flex-wrap gap-2 sm:gap-8 font-light sm:mt-2">
                {frontTechnologies &&
                    frontTechnologies.map(({ src, name }) => {
                        return (
                            <Image
                                src={src}
                                alt={name}
                                width={45}
                                height={45}
                                className="w-9 sm:w-12"
                            />
                        );
                    })}
            </div>
            <h2 className="font-semibold mt-2">Back</h2>
            <div className="flex flex-wrap gap-2 sm:gap-8 font-light sm:mt-2">
                {backTechnologies &&
                    backTechnologies.map(({ src, name }) => {
                        {
                            console.log(src);
                        }
                        return (
                            <Image
                                src={src}
                                alt={name}
                                width={45}
                                height={45}
                                className="w-9 sm:w-12"
                            />
                        );
                    })}
            </div>
        </motion.div>
    );
};

export default StackHero;
