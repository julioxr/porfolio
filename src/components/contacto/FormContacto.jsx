"use client";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { AnimatePresence } from "framer-motion";
import CongratsContacto from "./CongratsContacto";
import {
    BsFillPersonFill,
    BsFillSendCheckFill,
    BsFillEnvelopeAtFill,
} from "react-icons/bs";

const FormContacto = () => {
    const [state, handleSubmit] = useForm("xvonvajk");
    const [showCongrats, setShowCongrats] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const clearInputs = () => {
        setName("");
        setEmail("");
        setMessage("");
    };

    const validateEmptyInput = (event) => {
        if (name == "" || email == "" || message == "") {
            setShowCongrats(true);
            setError(true);
            setTimeout(() => setShowCongrats(false), 3000);
        } else {
            // handleSubmit(event);
            clearInputs();
            setShowCongrats(true);
            setError(false);
            setTimeout(() => setShowCongrats(false), 3000); // 3 segundos
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        validateEmptyInput();
    };

    return (
        <div className="flex w-full justify-center pb-14 pt-28 md:pt-52 sm:pb-24">
            <form
                onSubmit={handleFormSubmit}
                className="flex w-full flex-col gap-6 text-night"
            >
                {/* <label htmlFor="name" className="font-semibold z-30">
                    Nombre
                </label> */}
                <div className="relative">
                    <div className="flex w-10">
                        <BsFillPersonFill className="text-white absolute h-full text-2xl left-2" />
                    </div>
                    <input
                        id="name"
                        type="name"
                        name="nombre"
                        placeholder="Nombre"
                        autoComplete="none"
                        className="w-full placeholder-white/70 z-30 rounded-sm h-10 pl-12 appearance-none font-medium focus:outline-celadon outline-white bg-night/50 text-white text-lg outline-2 outline"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        value={name}
                    />
                </div>
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />

                {/* <label htmlFor="email" className="font-semibold">
                    Email
                </label> */}
                <div className="relative">
                    <div className="flex w-10">
                        <BsFillEnvelopeAtFill className="text-white absolute h-full text-2xl left-2" />
                    </div>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="none"
                        className="w-full placeholder-white/70 rounded-sm h-10 pl-12 text-lg appearance-none font-medium focus:outline-celadon outline-white bg-night/50 text-white outline-2 outline"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                    />
                </div>
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />

                {/* <label htmlFor="message" className="font-semibold">
                    Mensaje
                </label> */}

                <div className="relative">
                    <div className="flex w-10 h-auto absolute top-2 left-2">
                        <BsFillSendCheckFill className="text-white text-2xl left-0 top-0" />
                    </div>
                    <textarea
                        id="message"
                        name="mensaje"
                        placeholder="Mensaje"
                        autoComplete="none"
                        className="w-full h-32 placeholder-white/70 text-lg rounded-sm pl-12 pt-1 appearance-none font-medium focus:outline-celadon outline-white bg-night/50 text-white outline-2 outline"
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        value={message}
                    />
                </div>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="h-12 font-medium text-lg sm:w-48 bg-celadon text-night rounded-full mt-2"
                >
                    Enviar mensaje
                </button>
            </form>
            <AnimatePresence>
                {showCongrats && (
                    <CongratsContacto error={error} setError={setError} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default FormContacto;
