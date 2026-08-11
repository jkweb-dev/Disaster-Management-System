"use client";

import { useState } from "react";

import ProtectedRoute from "@/components/Auth/protetected";

import RescueSidebar from "@/components/Rescue/sidebar";
import RescueTopbar from "@/components/Rescue/topbar";


const RescueLayout = ({
    children
}) => {

    const [
        sidebarOpen,
        setSidebarOpen
    ] = useState(false);


    const closeSidebar = () => {

        setSidebarOpen(false);

    };


    return (

            <ProtectedRoute   allowedRoles={[
                "rescue"
            ]}
>

        <div
            className="
            flex
            h-screen
            overflow-hidden
            bg-slate-50
            "
        >

            {/* ================================================= */}
            {/* MOBILE OVERLAY */}
            {/* ================================================= */}

            {
                sidebarOpen && (

                    <button
                        type="button"
                        aria-label="Close navigation"
                        onClick={closeSidebar}
                        className="
                        fixed
                        inset-0
                        z-40
                        cursor-default
                        bg-slate-950/50
                        backdrop-blur-[2px]
                        lg:hidden
                        "
                    />

                )
            }



            {/* ================================================= */}
            {/* SIDEBAR */}
            {/* ================================================= */}

            <RescueSidebar

                sidebarOpen={
                    sidebarOpen
                }

                setSidebarOpen={
                    setSidebarOpen
                }

            />



            {/* ================================================= */}
            {/* RIGHT SIDE */}
            {/* ================================================= */}

            <div
                className="
                flex
                min-w-0
                flex-1
                flex-col
                overflow-hidden
                "
            >


                {/* ================================================= */}
                {/* TOPBAR */}
                {/* ================================================= */}
<RescueTopbar
    setSidebarOpen={setSidebarOpen}
/>


                {/* ================================================= */}
                {/* SCROLLABLE MAIN */}
                {/* ================================================= */}

                <main
                    className="
                    min-h-0
                    flex-1
                    overflow-y-auto
                    overscroll-contain
                    "
                >

                    <div
                        className="
                        min-h-full
                        w-full
                        px-4
                        py-5
                        sm:px-6
                        sm:py-6
                        lg:px-8
                        lg:py-8
                        "
                    >

                        {children}

                    </div>

                </main>

            </div>

        </div>

        </ProtectedRoute>

    );

};


export default RescueLayout;