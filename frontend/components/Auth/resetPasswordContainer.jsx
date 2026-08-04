"use client";

import { motion } from "framer-motion";
import { LockKeyhole } from "lucide-react";

import ResetPasswordForm from "./resetPasswordForm";

const ResetPasswordContainer = ({ token }) => {

    return (

        <section
            className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-gradient-to-br
            from-blue-50
            via-white
            to-emerald-50
            px-5
            py-16
        "
        >

            <motion.div

                initial={{ opacity: 0, y: 30 }}

                animate={{ opacity: 1, y: 0 }}

                className="
                w-full
                max-w-lg
                rounded-3xl
                bg-white
                p-8
                shadow-xl
                "
            >

                <div className="mb-8 text-center">

                    <div
                        className="
                        mx-auto
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-100
                        text-blue-600
                        "
                    >

                        <LockKeyhole size={34} />

                    </div>

                    <h1
                        className="
                        mt-5
                        text-3xl
                        font-bold
                        text-slate-900
                        "
                    >

                        Reset Password

                    </h1>

                    <p
                        className="
                        mt-3
                        text-slate-600
                        "
                    >

                        Create a new secure password for your account.

                    </p>

                </div>

                <ResetPasswordForm token={token} />

            </motion.div>

        </section>

    );

};

export default ResetPasswordContainer;