import React from "react";
import Link from "next/link";
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";

const SocialsHero = () => {
    return (
        <ul className="flex gap-4 items-center justify-center text-3xl">
            <li>
                <Link
                    href="https://www.linkedin.com/in/julio-roja/"
                    target="_blank"
                >
                    <RiLinkedinBoxFill />
                </Link>
            </li>
            <li>
                <Link href="https://github.com/julioxr" target="_blank">
                    <RiGithubFill />
                </Link>
            </li>
        </ul>
    );
};

export default SocialsHero;
