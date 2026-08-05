"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import useAuth from "@/hooks/useAuth";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {

    const router = useRouter();

    const {
        user,
        loading
    } = useAuth();


    useEffect(() => {

        if (loading) return;


        // Not logged in
        if (!user) {

            router.replace("/login");
            return;

        }


        // Logged in but wrong role
        if (
            allowedRoles.length > 0 &&
            !allowedRoles.includes(user.role)
        ) {

            router.replace("/");

        }

    }, [user, loading, allowedRoles, router]);


    if (loading) {

        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );

    }


    if (!user) {

        return null;

    }


    if (
        allowedRoles.length > 0 &&
        !allowedRoles.includes(user.role)
    ) {

        return null;

    }


    return children;

};

export default ProtectedRoute;