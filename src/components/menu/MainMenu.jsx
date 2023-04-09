import React from "react";

const MainMenu = () => {
    return (
        <header className="flex justify-between bg-red-400 px-12">
            <div>Julio.dev</div>
            <div className="flex list-none gap-6">
                <ul>
                    <li>
                        <a href="">Home</a>
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
        </header>
    );
};

export default MainMenu;
