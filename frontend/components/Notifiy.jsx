"use client";

import {
useEffect,
useRef,
useState
} from "react";

import { Bell } from "lucide-react";

import api from "@/lib/axios";

import { useSocket } from "@/context/SocketContext";

const NotificationBell = () => {

const {
    notifications,
    unreadCount,
    setNotificationData,
    markNotificationAsRead
} = useSocket();


const [
    isOpen,
    setIsOpen
] = useState(false);


const [
    loading,
    setLoading
] = useState(false);


const containerRef =
    useRef(null);



/*
    Fetch notification history
    when component mounts.
*/

useEffect(() => {

    const fetchNotifications =
        async () => {

            try {

                setLoading(true);


                const response =
                    await api.get(
                        "/notifications"
                    );


                setNotificationData({

                    notifications:
                        response.data.notifications,

                    unreadCount:
                        response.data.unreadCount

                });

            }

            catch (error) {

                console.error(
                    "Failed to fetch notifications:",
                    error
                );

            }

            finally {

                setLoading(false);

            }

        };


    fetchNotifications();

}, [setNotificationData]);
/*
    Close dropdown when clicking
    outside.
*/

useEffect(() => {

    const handleClickOutside =
        (event) => {

            if (

                containerRef.current &&
                !containerRef.current.contains(
                    event.target
                )

            ) {

                setIsOpen(false);

            }

        };


    document.addEventListener(
        "mousedown",
        handleClickOutside
    );


    return () => {

        document.removeEventListener(
            "mousedown",
            handleClickOutside
        );

    };

}, []);



/*
    Mark one notification
    as read.
*/

const handleNotificationClick =
    async (notification) => {

        if (notification.isRead) {

            return;

        }


        try {

            await api.patch(
                `/notifications/${notification._id}/read`
            );


            markNotificationAsRead(
                notification._id
            );

        }

        catch (error) {

            console.error(
                "Failed to mark notification:",
                error
            );

        }

    };



/*
    Mark everything as read.
*/

const handleMarkAllRead =
    async () => {

        if (unreadCount === 0) {

            return;

        }


        try {

            await api.patch(
                "/notifications/read-all"
            );


            setNotificationData({

                notifications:
                    notifications.map(
                        notification => ({

                            ...notification,

                            isRead: true

                        })
                    ),

                unreadCount: 0

            });

        }

        catch (error) {

            console.error(
                "Failed to mark all notifications:",
                error
            );

        }

    };



return (

    <div
        ref={containerRef}
        className="relative"
    >

        {/* Bell */}

        <button
            type="button"
            onClick={() =>
                setIsOpen(
                    previous => !previous
                )
            }
            className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                text-slate-600
                transition
                hover:bg-slate-100
                hover:text-slate-900
                focus:outline-none
            "
            aria-label="Notifications"
        >

            <Bell
                size={20}
                strokeWidth={1.8}
            />


            {unreadCount > 0 && (

                <span
                    className="
                        absolute
                        -right-0.5
                        -top-0.5
                        flex
                        min-h-[19px]
                        min-w-[19px]
                        items-center
                        justify-center
                        rounded-full
                        bg-red-500
                        px-1
                        text-[10px]
                        font-bold
                        text-white
                        ring-2
                        ring-white
                    "
                >

                    {unreadCount > 99
                        ? "99+"
                        : unreadCount}

                </span>

            )}

        </button>



        {/* Dropdown */}

        {isOpen && (

            <div
                className="
                    fixed
                   left-0
                    top-[72px]
                    z-60
                    w-[calc(100vw-24px)]
                    max-w-[390px]
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-2xl
                    sm:absolute
                    sm :right-0
                    sm:top-10
                    sm:w-[390px]
                "
            >

                {/* Header */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-slate-100
                        px-4
                        py-3
                    "
                >

                    <div>

                        <h3
                            className="
                                text-sm
                                font-bold
                                text-slate-900
                            "
                        >
                            Notifications
                        </h3>


                        <p
                            className="
                                mt-0.5
                                text-xs
                                text-slate-500
                            "
                        >
                            {unreadCount} unread
                        </p>

                    </div>


                    {unreadCount > 0 && (

                        <button
                            type="button"
                            onClick={
                                handleMarkAllRead
                            }
                            className="
                                text-xs
                                font-semibold
                                text-indigo-600
                                transition
                                hover:text-indigo-800
                            "
                        >
                            Mark all as read
                        </button>

                    )}

                </div>



                {/* Notification list */}

                <div
                    className="
                        max-h-[420px]
                        overflow-y-auto
                    "
                >

                    {loading ? (

                        <div
                            className="
                                px-5
                                py-10
                                text-center
                                text-sm
                                text-slate-500
                            "
                        >
                            Loading notifications...
                        </div>

                    ) : notifications.length === 0 ? (

                        <div
                            className="
                                px-5
                                py-12
                                text-center
                            "
                        >

                            <Bell
                                size={30}
                                className="
                                    mx-auto
                                    text-slate-300
                                "
                            />


                            <p
                                className="
                                    mt-3
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                "
                            >
                                No notifications
                            </p>


                            <p
                                className="
                                    mt-1
                                    text-xs
                                    text-slate-400
                                "
                            >
                                You're all caught up.
                            </p>

                        </div>

                    ) : (

                        notifications.map(
                            notification => (

                                <button
                                    key={
                                        notification._id
                                    }
                                    type="button"
                                    onClick={() =>
                                        handleNotificationClick(
                                            notification
                                        )
                                    }
                                    className={`
                                        flex
                                        w-full
                                        gap-3
                                        border-b
                                        border-slate-100
                                        px-4
                                        py-4
                                        text-left
                                        transition
                                        hover:bg-slate-50
                                        ${
                                            !notification.isRead
                                                ? "bg-indigo-50/50"
                                                : "bg-white"
                                        }
                                    `}
                                >

                                    {/* Status dot */}

                                    <div
                                        className="
                                            mt-1.5
                                            shrink-0
                                        "
                                    >

                                        <span
                                            className={`
                                                block
                                                h-2
                                                w-2
                                                rounded-full
                                                ${
                                                    !notification.isRead
                                                        ? "bg-indigo-500"
                                                        : "bg-slate-200"
                                                }
                                            `}
                                        />

                                    </div>



                                    {/* Content */}

                                    <div
                                        className="
                                            min-w-0
                                            flex-1
                                        "
                                    >

                                        <div
                                            className="
                                                flex
                                                items-start
                                                justify-between
                                                gap-3
                                            "
                                        >

                                            <p
                                                className={`
                                                    text-sm
                                                    ${
                                                        !notification.isRead
                                                            ? "font-bold text-slate-900"
                                                            : "font-semibold text-slate-700"
                                                    }
                                                `}
                                            >
                                                {
                                                    notification.title
                                                }
                                            </p>

                                        </div>


                                        <p
                                            className="
                                                mt-1
                                                line-clamp-2
                                                text-xs
                                                leading-5
                                                text-slate-500
                                            "
                                        >
                                            {
                                                notification.message
                                            }
                                        </p>


                                        <p
                                            className="
                                                mt-2
                                                text-[10px]
                                                font-medium
                                                text-slate-400
                                            "
                                        >
                                            {new Date(
                                                notification.createdAt
                                            ).toLocaleString()}
                                        </p>

                                    </div>

                                </button>

                            )
                        )

                    )}

                </div>

            </div>

        )}

    </div>

);

};

export default NotificationBell;
