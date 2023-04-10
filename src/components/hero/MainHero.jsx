import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";

const MainHero = () => {
    return (
        <section className="h-[calc(100vh-48px)] text-night">
            <div className="container mx-auto flex flex-col justify-center items-center h-full">
                <div className="flex justify-between w-full max-w-3xl ">
                    <div className="flex flex-col justify-center gap-3">
                        <h1 className="text-3xl font-bold">Julio Roja.</h1>
                        <p className="text-sm leading-4 max-w-[300px]">
                            Soy un desarrollador frontend apasionado que vive en
                            Argentina, Buenos Aires.
                        </p>
                        {/* <ul className="flex gap-4 text-2xl">
                            <li>
                                <Link
                                    href="https://www.linkedin.com/in/julio-roja/"
                                    target="_blank"
                                >
                                    <RiLinkedinBoxFill />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://github.com/julioxr"
                                    target="_blank"
                                >
                                    <RiGithubFill />
                                </Link>
                            </li>
                        </ul> */}
                        <button className="py-1 px-3 w-32 bg-celadon text-night rounded-full">
                            Contactame
                        </button>
                    </div>
                    <div>
                        <div className="w-96 h-96">
                            <Image
                                src="/heroImg.svg"
                                alt="imagen de hero, hombre en pc trabajando"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                    <h2 className="font-bold">Stack Tecnologico</h2>
                    <div className="flex gap-8 font-light">
                        <p>Next JS</p>
                        <p>React</p>
                        <p>JavaScript</p>
                        <p>Tailwind</p>
                        <p>Firebase</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainHero;
