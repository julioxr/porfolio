"use client";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { AnimatePresence } from "framer-motion";
import CongratsContacto from "./CongratsContacto";

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
                <input
                    id="name"
                    type="name"
                    name="nombre"
                    placeholder="Nombre"
                    autoComplete="none"
                    className="w-full placeholder-white/70 z-30 rounded-sm h-10 pl-4 appearance-none font-medium focus:outline-celadon outline-white bg-night/50 text-white text-lg outline-2 outline"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    value={name}
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />

                {/* <label htmlFor="email" className="font-semibold">
                    Email
                </label> */}
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="none"
                    className="w-full placeholder-white/70 rounded-sm h-10 pl-4 text-lg appearance-none font-medium focus:outline-celadon outline-white bg-night/50 text-white outline-2 outline"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    value={email}
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />

                {/* <label htmlFor="message" className="font-semibold">
                    Mensaje
                </label> */}

                <textarea
                    id="message"
                    name="mensaje"
                    placeholder="Mensaje"
                    autoComplete="none"
                    className="w-full h-32 placeholder-white/70 text-lg rounded-sm pl-4 pt-2 appearance-none font-medium focus:outline-celadon outline-white bg-night/50 text-white outline-2 outline"
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    value={message}
                />
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
