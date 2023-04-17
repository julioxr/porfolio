import React from "react";

import TextCard from "./TextCard";
import TechnologyCard from "./TechnologyCard";
import ButtonsCard from "./ButtonsCard";

const InfoCard = () => {
    return (
        <div className="text-center sm:px-8 flex flex-col pb-4 sm:pb-4 gap-4 max-w-[256px]">
            <TextCard />
            <TechnologyCard />
            <ButtonsCard />
        </div>
    );
};

export default InfoCard;
