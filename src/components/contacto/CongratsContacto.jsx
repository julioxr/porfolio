import { useEffect } from "react";
import { motion } from "framer-motion";

const CongratsContacto = ({ error }) => {
    const validatedStyle = error
        ? "bg-red-500 text-white"
        : "bg-green-500 text-white";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
            }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            className={`${validatedStyle} absolute flex bottom-0 px-12 h-10 w-full rounded-sm items-center justify-center font-semibold left-0 right-0 `}
        >
            <motion.p
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                exit={{ x: 500 }}
                transition={{ duration: 0.3 }}
            >
                {error
                    ? "Los campos no pueden estar vacios"
                    : "Gracias por contactarme!"}
            </motion.p>
        </motion.div>
    );
};

export default CongratsContacto;
