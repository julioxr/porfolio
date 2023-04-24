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
            <section
                className=" sm:h-[calc(100vh-64px)] h-[calc(100vh-48px)] relative bg-[url('/fondo.svg')]"
                id="inicio"
            >
                <div className="container mx-auto flex flex-col-reverse md:flex-row px-8 sm:px-0 justify-end md:justify-center items-center sm:pt-0 h-full md:max-w-6xl">
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        transition={{ duration: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="flex sm:flex-col flex-col justify-center items-center w-full"
                    >
                        <TextHero />
                        <StackHero />
                    </motion.div>
                    <ImgHero />
                </div>
                <SeparatorHero />
            </section>
        </>
    );
};

export default MainHero;
