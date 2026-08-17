"use client";

import {
    Bell,
    Menu,
    UserRound
} from "lucide-react";

import NotificationBell from "@/components/Notifiy";


const RescueTopbar = ({
    setSidebarOpen
}) => {

    return (

        <header
            className="
            
            flex
            h-16
            z-60
            shrink-0
            items-center
            border-b
            border-slate-200
            bg-white/95
            px-4
            shadow-sm
            backdrop-blur
            sm:h-[72px]
            sm:px-6
            lg:px-8
            "
        >

            <div
                className="
                flex
                w-full
                items-center
                justify-between
                gap-4
                "
            >


              <NotificationBell/>  {/* ================================================= */}
                {/* LEFT SIDE */}
                {/* ================================================= */}

                <div
                    className="
                    flex
                    min-w-0
                    items-center
                    gap-3
                    "
                >

                    {/* Mobile Menu */}

                    <button
                        type="button"
                        onClick={() =>
                            setSidebarOpen(true)
                        }
                        aria-label="Open navigation"
                        className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        text-slate-600
                        shadow-sm
                        transition
                        hover:border-blue-100
                        hover:bg-blue-50
                        hover:text-blue-600
                        lg:hidden
                        "
                    >

                        <Menu
                            size={21}
                        />

                    </button>



                    {/* Desktop Title */}

                    <div
                        className="
                        hidden
                        min-w-0
                        lg:block
                        "
                    >

                        <p
                            className="
                            truncate
                            text-sm
                            font-medium
                            text-slate-400
                            "
                        >

                            Rescue Control Center

                        </p>


                        <h1
                            className="
                            truncate
                            text-lg
                            font-bold
                            text-slate-800
                            "
                        >

                            Emergency Response

                        </h1>

                    </div>



                    {/* Mobile Title */}

                    <div
                        className="
                        min-w-0
                        lg:hidden
                        "
                    >

                        <h1
                            className="
                            truncate
                            text-base
                            font-bold
                            text-slate-800
                            sm:text-lg
                            "
                        >

                            Rescue Control Center

                        </h1>


                        <p
                            className="
                            truncate
                            text-[11px]
                            text-slate-400
                            sm:text-xs
                            "
                        >

                            Emergency Response

                        </p>

                    </div>

                </div>



                {/* ================================================= */}
                {/* RIGHT SIDE */}
                {/* ================================================= */}

                <div
                    className="
                    flex
                    shrink-0
                    items-center
                    gap-2
                    sm:gap-3
                    "
                >

                    {/* Notification */}

                    <button
                        type="button"
                        aria-label="Notifications"
                        className="
                        relative
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        text-slate-500
                        transition
                        hover:border-blue-100
                        hover:bg-blue-50
                        hover:text-blue-600
                        "
                    >

                        <Bell
                            size={19}
                        />


                        {/* Notification dot */}

                        <span
                            className="
                            absolute
                            right-2
                            top-2
                            h-2
                            w-2
                            rounded-full
                            bg-red-500
                            ring-2
                            ring-white
                            "
                        />

                    </button>



                    {/* ================================================= */}
                    {/* USER */}
                    {/* ================================================= */}

                    <div
                        className="
                        flex
                        items-center
                        gap-2
                        sm:gap-3
                        "
                    >

                        {/* Avatar */}

                        <div
                            className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-gradient-to-br
                            from-blue-600
                            to-indigo-600
                            text-white
                            shadow-sm
                            "
                        >

                            <UserRound
                                size={19}
                            />

                        </div>



                        {/* User information */}

                        <div
                            className="
                            hidden
                            min-w-0
                            md:block
                            "
                        >

                            <p
                                className="
                                max-w-32
                                truncate
                                text-sm
                                font-semibold
                                text-slate-700
                                "
                            >

                                Rescue Team

                            </p>


                            <div
                                className="
                                flex
                                items-center
                                gap-1.5
                                "
                            >

                                <span
                                    className="
                                    h-1.5
                                    w-1.5
                                    rounded-full
                                    bg-emerald-500
                                    "
                                />

                                <p
                                    className="
                                    text-xs
                                    text-slate-400
                                    "
                                >

                                    Active

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </header>

    );

};


export default RescueTopbar;