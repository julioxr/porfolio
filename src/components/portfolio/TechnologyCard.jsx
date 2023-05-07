import React from "react";

const TechnologyCard = ({ tech }) => {
    return (
        <div className="flex gap-4 justify-center font-semibold">
            {tech.map((t) => (
                <span
                    key={t}
                    className="py-1 px-2 bg-white border-2 border-celadon rounded-lg text-celadon"
                >
                    {t}
                </span>
            ))}
        </div>
    );
};

export default TechnologyCard;
