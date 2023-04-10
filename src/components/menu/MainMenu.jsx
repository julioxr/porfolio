import React from "react";

const MainMenu = () => {
    return (
        <header className="">
            <div className="flex justify-between items-center container mx-auto h-16">
                <div className="font-bold text-2xl mr-auto text-celadon">
                    Julio.dev
                </div>
                <div className="mr-8">
                    <ul className="list-none gap-6 flex font-medium">
                        <li>
                            <a href="">Inicio</a>
                        </li>
                        <li>
                            <a href="">Sobre mi</a>
                        </li>
                        <li>
                            <a href="">Proyectos</a>
                        </li>
                        <li>
                            <a href="">Contacto</a>
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
