import React from "react";
import Image from "next/image";

const ImgHero = () => {
    return (
        <div>
            <div className="w-72 sm:w-[30rem] h-auto">
                <Image
                    src="/heroImg.svg"
                    alt="imagen de hero, hombre en pc trabajando"
                    width={1200}
                    height={1200}
                />
            </div>
        </div>
    );
};

export default ImgHero;
