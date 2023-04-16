import React from "react";
import Waves from "../waves/Waves";
import Image from "next/image";

const MainInfo = () => {
    return (
        <section className="py-20 relative h-auto" id="sobre-mi">
            <div className="container mx-auto flex justify-center sm:py-20 w-full">
                <div className="max-w-4xl flex flex-col sm:flex-row w-full gap-8 items-center">
                    <div className="z-20">
                        <Image src="/aboutMe.svg" width={800} height={800} />
                    </div>
                    <div className="flex flex-col gap-3 sm:w-[40rem]">
                        <h4 className="-ml-28  z-10 font-bold text-5xl text-white bg-celadon px-4">
                            SOBRE MI
                        </h4>
                        <h2 className="font-bold underline decoration-[2px]">
                            Un desarrollador Front End dedicado
                        </h2>
                        <p className="text-sm text-gray-500">
                            ¡Hola! Soy un desarrollador frontend con amplias
                            habilidades en tecnologías como Next.js, React,
                            JavaScript, Tailwind y Firebase, las cuales utilizo
                            a diario en mi trabajo. También tengo experiencia en
                            tecnologías de backend como NodeJS, Express, MongoDB
                            y MySQL.
                        </p>
                        <p className="text-sm text-gray-500">
                            Hace 2 años decidí incursionar en el desarrollo web
                            y desde entonces he demostrado ser un autodidacta
                            apasionado por aprender y mejorar constantemente.
                            Actualmente, trabajo como QA hace 6 años, lo que me
                            ha brindado una visión más completa y crítica sobre
                            el desarrollo de software.
                        </p>
                        <p className="text-sm text-gray-500">
                            Soy una persona con iniciativa y orientada a
                            resultados, siempre dispuesto a colaborar con mi
                            equipo y brindar ayuda a quienes lo necesitan. Me
                            gusta enseñar y compartir mis conocimientos para
                            ayudar a los demás a crecer y mejorar.
                        </p>
                    </div>
                </div>
            </div>
            <Waves />
        </section>
    );
};

export default MainInfo;
