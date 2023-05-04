import React from "react";
import Link from "next/link";
import { RiGithubFill, RiExternalLinkLine } from "react-icons/ri";

const ButtonsCard = ({ web, github }) => {
    return (
        <div className="flex gap-2 justify-center font font-semibold text-2xl">
            <div className="flex gap-1">
                <span className="text-base">GitHub</span>
                <Link href={github} target="_blank">
                    <RiGithubFill />
                </Link>
            </div>
            <div className="flex gap-1">
                <span className="text-base">Demo</span>
                <Link href={web} target="_blank">
                    <RiExternalLinkLine />
                </Link>
            </div>
        </div>
    );
};

export default ButtonsCard;
