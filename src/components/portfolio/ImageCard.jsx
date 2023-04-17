import React from "react";
import Image from "next/image";

const ImageCard = ({ img }) => {
    return (
        <div className="p-4 rounded-lg">
            <Image
                src={img}
                alt="imagen de hero, hombre en pc trabajando"
                width={1280}
                height={800}
                className="rounded-lg h-auto"
            />
        </div>
    );
};

export default ImageCard;
