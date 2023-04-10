import React from "react";
import Waves from "../waves/Waves";
import Image from "next/image";

const MainInfo = () => {
    return (
        <section className="py-20 relative h-auto">
            <div className="container mx-auto flex justify-center h-[40rem] w-full">
                <div className="max-w-4xl flex w-full gap-8 items-center">
                    <div className="z-20">
                        <Image src="/aboutMe.svg" width={800} height={800} />
                    </div>
                    <div className="flex flex-col gap-3 w-[40rem]">
                        <h4 className="-ml-24 z-10 font-bold text-5xl text-white bg-celadon px-4">
                            SOBRE MI
                        </h4>
                        <h2 className="font-bold underline decoration-[2px]">
                            Un desarrollador Front End dedicado
                        </h2>
                        <p className="text-sm text-gray-500">
                            ¡Hola!, actualmente, me desempeño como SAP Key User
                            en el área de logística desempeñando rol de QA hace
                            6 años, donde me encargo de analizar, testear e
                            implementar desarrollos en SAP y aplicaciones web.
                        </p>
                        <p className="text-sm text-gray-500">
                            Soy una persona muy autodidacta y hace 2 años decidi
                            encaminarme en el desarrollo web
                        </p>
                        <p className="text-sm text-gray-500">
                            Tengo facilidad para trabajo en equipo, soy curioso,
                            trabajo siempre con iniciativa, excelente
                            comunicación y compañerismo, analítico, en constante
                            aprendizaje, me encanta enseñar, capacitar y ayudar.
                        </p>
                    </div>
                </div>
            </div>
            <Waves />
        </section>
    );
};

export default MainInfo;
