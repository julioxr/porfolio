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
        name: "Tailwind",
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
            className="flex flex-col items-start justify-start w-full"
        >
            <h2 className="font-semibold pb-1">Front</h2>
            <div className="flex gap-3 sm:gap-4 font-light sm:mt-2">
                {frontTechnologies &&
                    frontTechnologies.map(({ src, name }, index) => {
                        return (
                            <>
                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.2,
                                    }}
                                    className="flex flex-col w-12 items-center text-xs font-bold"
                                >
                                    <motion.div>
                                        <Image
                                            src={src}
                                            alt={name}
                                            width={45}
                                            height={45}
                                            className="w-10"
                                            key={name}
                                        />
                                    </motion.div>
                                    <h2>{name}</h2>
                                </motion.div>
                            </>
                        );
                    })}
            </div>
            <h2 className="font-semibold mt-2 pb-1">Back</h2>
            <motion.div className="flex gap-3 sm:gap-4 justify-between font-light sm:mt-2">
                {backTechnologies &&
                    backTechnologies.map(({ src, name }, index) => {
                        return (
                            <>
                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.2,
                                    }}
                                    className="flex flex-col w-12 items-center text-xs font-bold"
                                >
                                    <motion.div>
                                        <Image
                                            src={src}
                                            alt={name}
                                            width={45}
                                            height={45}
                                            className="w-10"
                                            key={name}
                                        />
                                    </motion.div>
                                    <h2>{name}</h2>
                                </motion.div>
                            </>
                        );
                    })}
            </motion.div>
        </motion.div>
    );
};

export default StackHero;
