import React from "react";

const TextCard = ({ title, description }) => {
    return (
        <>
            <h4 className="font-bold text-xl sm:text-base">{title}</h4>
            <p className="text-sm">{description}</p>
        </>
    );
};

export default TextCard;
