import React from "react";
import Image from "next/image";

const ImgHero = () => {
    return (
        <div className="w-full my-6 max-w-[350px] sm:max-w-[20rem] md:max-w-[30rem] h-auto">
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
