"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const FormContacto = () => {
    const [state, handleSubmit] = useForm("xvonvajk");

    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <div className="flex justify-center pb-14 sm:pb-24">
            <form
                onSubmit={handleSubmit}
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
        </div>
    );
};

export default FormContacto;
