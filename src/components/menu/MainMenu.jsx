import React from "react";

const MainMenu = () => {
    return (
        <header className="">
            <div className="flex justify-between items-center container mx-auto h-12 sm:h-16 px-8 sm:px-0">
                <div className="font-bold text-2xl sm:text-3xl mr-auto text-night">
                    Julio.dev
                </div>
                <div className="mr-8 hidden md:static">
                    <ul className="list-none gap-6 flex font-medium">
                        <li className="hover:underline decoration-[3px] underline-offset-2  border-celadon decoration-celadon">
                            <a href="#inicio">Inicio</a>
                        </li>
                        <li className="hover:underline decoration-[3px] underline-offset-2  border-celadon decoration-celadon">
                            <a href="#proyectos">Proyectos</a>
                        </li>
                        <li className="hover:underline decoration-[3px] underline-offset-2  border-celadon decoration-celadon">
                            <a href="#sobre-mi">Sobre mi</a>
                        </li>
                        <li className="hover:underline decoration-[3px] underline-offset-2  border-celadon decoration-celadon">
                            <a href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
                <button className="hidden md:static py-1 px-3 bg-celadon w-32 text-night rounded-full">
                    Descargar CV
                </button>
            </div>
        </header>
    );
};

export default MainMenu;
