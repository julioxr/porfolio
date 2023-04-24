import FormContacto from "./FormContacto";
import Image from "next/image";
import WavesContacto from "./WavesContacto";

const MainContacto = () => {
    return (
        <section
            className="bg-night relative w-full text-night bg-[url('/fondodos.svg')] px-8 overflow-x-hidden"
            id="contacto"
        >
            <h2 className="absolute -top-0 left-4 sm:left-11 sm:text-[9rem] z-10 font-bold text-white text-[3.5rem] -rotate-2">
                CONTACTAME
            </h2>
            <div className="flex container mx-auto w-full justify-between items-center max-w-5xl gap-8 ">
                <div className="w-full md:w-1/2 z-30">
                    <FormContacto />
                </div>
                <div className="w-1/2 my-6 hidden sm:block sm:max-w-[20rem] md:max-w-[30rem] h-auto z-30">
                    <Image
                        src="/contacto.svg"
                        alt="Imagen de contacto con persona hablando"
                        width={800}
                        height={800}
                    />
                </div>
            </div>
        </section>
    );
};

export default MainContacto;
