import React from "react";

const MainMenu = () => {
    return (
        <header className="">
            <div className="flex justify-between items-center container mx-auto h-16">
                <div className="font-bold text-3xl mr-auto text-night">
                    Julio.dev
                </div>
                <div className="mr-8">
                    <ul className="list-none gap-6 flex font-medium">
                        <li>
                            <a href="#inicio">Inicio</a>
                        </li>
                        <li>
                            <a href="#sobre-mi">Sobre mi</a>
                        </li>
                        <li>
                            <a href="#proyectos">Proyectos</a>
                        </li>
                        <li>
                            <a href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
                <button className="py-1 px-3 bg-celadon w-32 text-night rounded-full">
                    Descargar CV
                </button>
            </div>
        </header>
    );
};

export default MainMenu;
