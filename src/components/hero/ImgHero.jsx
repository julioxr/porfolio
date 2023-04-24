import React from "react";
import Image from "next/image";

const ImgHero = () => {
    // max-w-[350px] sm:max-w-xs md:max-w-lg
    return (
        <div className="w-full my-6 sm:max-w-sm md:max-w-none h-auto">
            <Image
                src="/heroImg.svg"
                alt="imagen de hero, hombre en pc trabajando"
                width={1200}
                height={1200}
            />
        </div>
    );
};

export default ImgHero;
