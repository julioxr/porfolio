import React from "react";

const TextCard = ({ title, description }) => {
    const shortDescription = description.slice(0, 160) + "...";

    return (
        <>
            <h4 className="font-bold text-xl pt-4">{title}</h4>
            <p className="text-sm">{shortDescription}</p>
        </>
    );
};

export default TextCard;
