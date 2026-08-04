"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import {
    Mail,
    LoaderCircle,
    Send
} from "lucide-react";

import handleError from "@/utils/handleError";

const ForgotPasswordForm = () => {

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState("");



    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!email.trim()) {

            toast.error("Email is required");

            return;

        }

        try {

            setLoading(true);

            const { data } = await axios.post(

                `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,

               { email }

            );

            toast.success(data.message);

            router.push("/login");

        }

        catch (error) {

            handleError(error, router);

        }

        finally {

            setLoading(false);

        }

    };



    return (

        <form
            onSubmit={handleSubmit}
            className="space-y-6"
        >

            <div className="relative">

                <Mail

                    size={20}

                    className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                "
                />

                <input

                    type="email"

                    placeholder="Enter your registered email"

                    value={email}

                    onChange={(e) => setEmail(e.target.value)}

                    className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    py-3.5
                    pl-12
                    pr-4
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-100
                "
                />

            </div>



            <button

                disabled={loading}

                className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-emerald-500
                py-3.5
                font-semibold
                text-white
                transition
                hover:scale-[1.02]
                disabled:opacity-70
            "
            >

                {

                    loading

                        ?

                        <>

                            <LoaderCircle className="animate-spin" />

                            Sending...

                        </>

                        :

                        <>

                            <Send size={18} />

                            Send Reset Link

                        </>

                }

            </button>



            <button

                type="button"

                onClick={() => router.push("/login")}

                className="
                w-full
                text-center
                text-sm
                font-medium
                text-blue-600
                hover:underline
            "
            >

                Back to Login

            </button>

        </form>

    );

};

export default ForgotPasswordForm;