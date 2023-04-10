import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiGithubFill, RiExternalLinkLine } from "react-icons/ri";

const CardPortfolio = ({ img }) => {
    return (
        <div className="bg-white h-auto rounded-lg shadow-xl max-w-[760px]">
            <div className="flex justify-center items-center h-full">
                <div className="p-4 rounded-lg">
                    <Image
                        src={img}
                        alt="imagen de hero, hombre en pc trabajando"
                        width={1280}
                        height={800}
                        className="rounded-lg h-auto"
                    />
                </div>
                <div className="text-center px-8 flex flex-col gap-4 max-w-[256px]">
                    <h4 className="font-bold">Portfolio personal</h4>
                    <p className="text-sm">
                        A car rental website is an online platform that allows
                        users to rent cars for personal or business use. The
                        website provides an interface for searching, comparing,
                        and reserving cars.
                    </p>
                    <div className="flex gap-4 justify-center font-semibold">
                        <span className="py-1 px-2 bg-viridian rounded-lg text-white">
                            React
                        </span>
                        <span className="py-1 px-2 bg-viridian rounded-lg text-white">
                            Next JS
                        </span>
                    </div>
                    <div className="flex gap-2 justify-center font font-semibold text-2xl">
                        <div className="flex gap-1">
                            <span className="text-base">GitHub</span>
                            <Link href="#" target="_blank">
                                <RiGithubFill />
                            </Link>
                        </div>
                        <div className="flex gap-1">
                            <span className="text-base">Demo</span>
                            <Link href="#" target="_blank">
                                <RiExternalLinkLine />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPortfolio;
