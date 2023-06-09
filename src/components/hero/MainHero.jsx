"use client";
import React from "react";
import StackHero from "./StackHero";
import { motion } from "framer-motion";
import ImgHero from "./ImgHero";
import TextHero from "./TextHero";
import SeparatorHero from "./SeparatorHero";

const MainHero = () => {
    return (
        <>
            <section className=" sm:h-[calc(100vh-64px)] h-[calc(100vh-48px)] relative bg-[url('/fondo.svg')]">
                <div className="container mx-auto flex flex-col-reverse md:flex-row px-8 lg:px-0 justify-end md:justify-center items-center sm:pt-0 h-full sm:h-[calc(100%-100px)] md:max-w-5xl">
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        transition={{ duration: 1 }}
                        animate={{ y: 0.4, opacity: 1 }}
                        className="flex sm:flex-col flex-col justify-center items-center md:items-start md:mx-auto w-full "
                    >
                        <TextHero />
                        <StackHero />
                    </motion.div>
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        transition={{ duration: 1 }}
                        animate={{ y: 0.4, opacity: 1 }}
                        className="flex justify-center sm:w-full"
                    >
                        <ImgHero />
                    </motion.div>
                </div>
                <SeparatorHero />
            </section>
        </>
    );
};

export default MainHero;
