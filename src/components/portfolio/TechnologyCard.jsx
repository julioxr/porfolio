import React from "react";

const TechnologyCard = ({ tech }) => {
    return (
        <div className=" flex gap-2 flex-wrap justify-center items-center font-medium">
            {tech.map((t) => (
                <span
                    key={t}
                    className="py-1 px-2 border-[2px] text-sm border-celadon bg-celadon rounded-lg whitespace-nowrap text-white"
                >
                    {t}
                </span>
            ))}
        </div>
    );
};

export default TechnologyCard;
