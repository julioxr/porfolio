import React from "react";
import Image from "next/image";

const ImgHero = () => {
    return (
        <div className="w-full px-6 mt-4 mb-4 sm:mt-0 sm:px-0 sm:w-[20rem] md:w-[30rem] h-auto">
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
