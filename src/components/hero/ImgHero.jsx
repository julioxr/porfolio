import React from "react";
import Image from "next/image";

const ImgHero = () => {
    return (
        <div className="w-full my-6 sm:mt-0 sm:px-0 sm:max-w-[20rem] md:max-w-[30rem]  max-w-[350px] h-auto">
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
