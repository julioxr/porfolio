import React from "react";
import Image from "next/image";

const ImgHero = () => {
    return (
        <div className="w-full my-6 max-w-sm md:max-w-none h-auto">
            <Image
                src="/heroImg.svg"
                alt="imagen de hero, hombre en pc trabajando"
                className="w-72 sm:w-full"
                width={1200}
                height={1200}
            />
        </div>
    );
};

export default ImgHero;
