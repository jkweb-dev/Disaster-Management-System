"use client";

import Link from "next/link";

import {
    usePathname
} from "next/navigation";

import {
    LayoutDashboard,
    Siren,
    Bell,
    UsersRound,
    Settings,
    ChevronRight,
    X,
    ShieldCheck,
    Circle
} from "lucide-react";


const RescueSidebar = ({
    sidebarOpen,
    setSidebarOpen
}) => {

    const pathname =
        usePathname();


    const menu = [

        {
            name: "Dashboard",
            path: "/rescue/dashboard",
            icon: LayoutDashboard
        },

        {
            name: "Emergencies",
            path: "/rescue/emergencies",
            icon: Siren
        },

        {
            name: "Notifications",
            path: "/rescue/notifications",
            icon: Bell
        },

        {
            name: "Team Profile",
            path: "/rescue/profile",
            icon: UsersRound
        },

        {
            name: "Settings",
            path: "/rescue/settings",
            icon: Settings
        }

    ];


    const isActive = (
        path
    ) => {

        if (
            pathname === path
        ) {

            return true;

        }


        return (
            pathname.startsWith(
                `${path}/`
            )
        );

    };


    return (

        <aside
            className={`
            fixed
            inset-y-0
            left-0
            z-50
            flex
            w-[285px]
            flex-col
            border-r
            border-slate-200
            bg-white
            shadow-2xl
            transition-transform
            duration-300
            ease-out

            lg:static
            
            lg:w-[270px]
            lg:shrink-0
            lg:translate-x-0
            lg:shadow-none

            ${
                sidebarOpen
                    ? "translate-x-0"
                    : "-translate-x-full"
            }
            `}
        >

            {/* ================================================= */}
            {/* BRAND */}
            {/* ================================================= */}

            <div
                className="
                shrink-0
                p-5
                sm:p-6
                "
            >

                <div
                    className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    bg-gradient-to-br
                    from-blue-600
                    via-indigo-600
                    to-violet-600
                    p-5
                    text-white
                    shadow-lg
                    shadow-blue-200/50
                    "
                >

                    {/* Decorative circles */}

                    <div
                        className="
                        absolute
                        -right-8
                        -top-8
                        h-24
                        w-24
                        rounded-full
                        bg-white/10
                        "
                    />

                    <div
                        className="
                        absolute
                        -bottom-10
                        -left-8
                        h-28
                        w-28
                        rounded-full
                        bg-white/10
                        "
                    />


                    <div
                        className="
                        relative
                        flex
                        items-center
                        gap-3
                        "
                    >

                        <div
                            className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            bg-white/15
                            ring-1
                            ring-white/20
                            "
                        >

                            <ShieldCheck
                                size={23}
                            />

                        </div>


                        <div
                            className="
                            min-w-0
                            "
                        >

                            <h2
                                className="
                                truncate
                                text-lg
                                font-bold
                                "
                            >

                                Rescue Center

                            </h2>


                            <p
                                className="
                                mt-0.5
                                truncate
                                text-xs
                                text-blue-100
                                "
                            >

                                Emergency Response

                            </p>

                        </div>

                    </div>

                </div>

            </div>



            {/* ================================================= */}
            {/* MOBILE CLOSE */}
            {/* ================================================= */}

            <div
                className="
                flex
                shrink-0
                items-center
                justify-between
                px-5
                pb-2
                lg:hidden
                "
            >

                <span
                    className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-slate-400
                    "
                >

                    Navigation

                </span>


                <button
                    type="button"
                    onClick={() =>
                        setSidebarOpen(false)
                    }
                    aria-label="Close navigation"
                    className="
                    rounded-xl
                    p-2
                    text-slate-400
                    transition
                    hover:bg-slate-100
                    hover:text-slate-700
                    "
                >

                    <X size={20} />

                </button>

            </div>



            {/* ================================================= */}
            {/* NAVIGATION */}
            {/* ================================================= */}

            <nav
                className="
                min-h-0
                flex-1
                overflow-y-auto
                px-4
                py-3
                sm:px-5
                "
            >

                <div
                    className="
                    space-y-2
                    "
                >

                    {
                        menu.map(
                            (item) => {

                                const Icon =
                                    item.icon;

                                const active =
                                    isActive(
                                        item.path
                                    );


                                return (

                                    <Link
                                        key={
                                            item.name
                                        }
                                        href={
                                            item.path
                                        }
                                        onClick={() =>
                                            setSidebarOpen(
                                                false
                                            )
                                        }
                                        className={`
                                        group
                                        flex
                                        min-h-[56px]
                                        items-center
                                        justify-between
                                        rounded-2xl
                                        px-3
                                        py-3
                                        transition-all
                                        duration-200

                                        ${
                                            active

                                                ?

                                            `
                                            bg-gradient-to-r
                                            from-blue-600
                                            to-indigo-600
                                            text-white
                                            shadow-md
                                            shadow-blue-200/50
                                            `

                                                :

                                            `
                                            text-slate-500
                                            hover:bg-blue-50
                                            hover:text-blue-600
                                            `
                                        }
                                        `}
                                    >

                                        <div
                                            className="
                                            flex
                                            min-w-0
                                            items-center
                                            gap-3
                                            "
                                        >

                                            <div
                                                className={`
                                                flex
                                                h-10
                                                w-10
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-xl
                                                transition

                                                ${
                                                    active

                                                        ?

                                                    "bg-white/15"

                                                        :

                                                    `
                                                    bg-slate-100
                                                    group-hover:bg-blue-100
                                                    `
                                                }
                                                `}
                                            >

                                                <Icon
                                                    size={20}
                                                    strokeWidth={
                                                        active
                                                            ? 2.2
                                                            : 2
                                                    }
                                                />

                                            </div>


                                            <span
                                                className={`
                                                truncate
                                                text-sm
                                                font-semibold

                                                ${
                                                    active
                                                        ? "text-white"
                                                        : "text-slate-600"
                                                }
                                                `}
                                            >

                                                {item.name}

                                            </span>

                                        </div>



                                        {
                                            active
                                                ?

                                            (

                                                <ChevronRight
                                                    size={17}
                                                    className="
                                                    shrink-0
                                                    "
                                                />

                                            )

                                                :

                                            (

                                                <span
                                                    className="
                                                    h-1.5
                                                    w-1.5
                                                    shrink-0
                                                    rounded-full
                                                    bg-slate-200
                                                    opacity-0
                                                    transition
                                                    group-hover:opacity-100
                                                    "
                                                />

                                            )
                                        }

                                    </Link>

                                );

                            }
                        )
                    }

                </div>

            </nav>



            {/* ================================================= */}
            {/* SYSTEM STATUS */}
            {/* ================================================= */}

            <div
                className="
                shrink-0
                p-4
                sm:p-5
                "
            >

                <div
                    className="
                    rounded-2xl
                    border
                    border-emerald-100
                    bg-emerald-50
                    p-4
                    "
                >

                    <div
                        className="
                        flex
                        items-center
                        gap-2
                        "
                    >

                        <Circle
                            size={10}
                            fill="currentColor"
                            className="
                            text-emerald-500
                            "
                        />


                        <span
                            className="
                            text-xs
                            font-bold
                            text-emerald-700
                            "
                        >

                            System Operational

                        </span>

                    </div>


                    <p
                        className="
                        mt-2
                        text-[11px]
                        leading-5
                        text-emerald-600
                        "
                    >

                        Emergency response services
                        are currently online.

                    </p>

                </div>

            </div>

        </aside>

    );

};


export default RescueSidebar;