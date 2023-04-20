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
                <div className="container mx-auto flex flex-col px-8 sm:px-0 justify-start items-center sm:pt-8 h-full">
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        transition={{ duration: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="flex sm:flex-row flex-col-reverse justify-between items-center w-full max-w-4xl"
                    >
                        <TextHero />
                        <ImgHero />
                    </motion.div>
                    <StackHero />
                </div>
                <SeparatorHero />
            </section>
        </>
    );
};

export default MainHero;
