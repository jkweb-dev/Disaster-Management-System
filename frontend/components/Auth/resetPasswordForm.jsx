"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import {
    Lock,
    LoaderCircle,
    Save
} from "lucide-react";

import handleError from "@/utils/handleError";

const ResetPasswordForm = ({ token }) => {

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({

        password: "",
        confirmPassword: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!formData.password || !formData.confirmPassword) {

            toast.error("All fields are required");

            return;

        }

        if (formData.password !== formData.confirmPassword) {

            toast.error("Passwords do not match");

            return;

        }

        try {

            setLoading(true);

            const { data } = await axios.post(

                `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password/${token}`,

                formData

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

            <InputField
                type="password"
                name="password"
                placeholder="New Password"
                value={formData.password}
                onChange={handleChange}
            />

            <InputField
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
            />

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

                            Updating...

                        </>

                        :

                        <>

                            <Save size={18} />

                            Reset Password

                        </>

                }

            </button>

        </form>

    );

};

const InputField = ({ ...props }) => {

    return (

        <div className="relative">

            <Lock

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

                {...props}

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

    );

};

export default ResetPasswordForm;