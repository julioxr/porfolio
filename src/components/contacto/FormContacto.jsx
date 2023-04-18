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
        <div className="flex justify-center pb-14 sm:pb-24">
            <form
                onSubmit={handleFormSubmit}
                className="w-[40rem] flex flex-col gap-2"
            >
                <label htmlFor="name" className="font-semibold">
                    Nombre
                </label>
                <input
                    id="name"
                    type="name"
                    name="nombre"
                    className="w-full rounded-sm h-10 pl-4 appearance-none font-light focus:outline-none"
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

                <label htmlFor="email" className="font-semibold">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full rounded-sm h-10 pl-4 appearance-none font-light focus:outline-none"
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

                <label htmlFor="message" className="font-semibold">
                    Mensaje
                </label>

                <textarea
                    id="message"
                    name="mensaje"
                    className="w-full h-32  rounded-sm pl-4 pt-2 appearance-none font-light focus:outline-none"
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
                    className="h-12 text-lg sm:w-32 bg-night text-white rounded-full mt-2"
                >
                    Submit
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
