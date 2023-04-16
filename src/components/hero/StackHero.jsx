import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const StackHero = () => {
    return (
        <div className="flex flex-col items-start justify-start w-full max-w-4xl px-8 sm:px-0">
            <h2 className="font-bold mb-4 underline decoration-[2px]">
                Stack Tecnológico
            </h2>
            <h2 className="font-semibold">Front</h2>
            <div className="flex gap-2 sm:gap-8 font-light mt-2">
                <Image src="/stack/nextjs.svg" alt="" width={45} height={45} />
                <Image src="/stack/reactjs.svg" alt="" width={45} height={45} />
                <Image src="/stack/js.svg" alt="" width={45} height={45} />
                <Image src="/stack/ts.svg" alt="" width={45} height={45} />
                <Image
                    src="/stack/tailwind.svg"
                    alt=""
                    width={45}
                    height={45}
                />
                <Image
                    src="/stack/firebase.svg"
                    alt=""
                    width={45}
                    height={45}
                />

                <Image
                    src="/stack/bootstrap.svg"
                    alt=""
                    width={45}
                    height={45}
                />
            </div>
            <h2 className="font-semibold mt-2">Back</h2>
            <div className="flex gap-2 sm:gap-8 font-light mt-2">
                <Image src="/stack/node.svg" alt="" width={45} height={45} />
                <Image src="/stack/express.svg" alt="" width={45} height={45} />
                <Image src="/stack/mongo.svg" alt="" width={45} height={45} />
                <Image src="/stack/sql.svg" alt="" width={45} height={45} />
            </div>
        </div>
    );
};

export default StackHero;
