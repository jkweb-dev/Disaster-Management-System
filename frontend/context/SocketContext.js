"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState
} from "react";

import socket from "@/lib/socket";
import useAuth from "@/hooks/useAuth";

const SocketContext =
createContext(null);

const SocketProvider = ({
children
}) => {

    const {user} = useAuth()


const [connected, setConnected] =
    useState(
        socket.connected
    );


const [notifications, setNotifications] =
    useState([]);


const [unreadCount, setUnreadCount] =
    useState(0);

    const notificationsRef =
    useRef([]);


    useEffect(() => {

    notificationsRef.current =
        notifications;

}, [notifications]);



/*
    Socket connection
*/
useEffect(() => {

    const handleConnect = () => {

        console.log(
            "Socket connected:",
            socket.id
        );

        setConnected(true);
    };


    const handleDisconnect = () => {

        console.log(
            "Socket disconnected"
        );

        setConnected(false);
    };


    const handleConnectError = (error) => {

        console.error(
            "Socket connection error:",
            error.message
        );

        setConnected(false);
    };


    // Start listening first
    socket.on(
        "connect",
        handleConnect
    );

    socket.on(
        "disconnect",
        handleDisconnect
    );

    socket.on(
        "connect_error",
        handleConnectError
    );


    // Then manage the connection
    if (!user) {

        if (socket.connected) {
            socket.disconnect();
        }

    } else {

        if (socket.connected) {
            socket.disconnect();
        }

        socket.connect();
    }


    // Cleanup listeners
    return () => {

        socket.off(
            "connect",
            handleConnect
        );

        socket.off(
            "disconnect",
            handleDisconnect
        );

        socket.off(
            "connect_error",
            handleConnectError
        );

    };

}, [user]);


/*
    Listen for real-time
    notifications
*/

useEffect(() => {

    const handleNotification =
        (notification) => {


            const alreadyExists =
                notificationsRef.current.some(
                    item =>
                        item._id ===
                        notification._id
                );


            if (alreadyExists) {

                return;

            }


            notificationsRef.current = [

                notification,

                ...notificationsRef.current

            ];


            setNotifications(
                notificationsRef.current
            );


            setUnreadCount(
                previous =>
                    previous + 1
            );

        };



    /*
        Start listening
    */

    socket.on(
        "notification",
        handleNotification
    );



    /*
        Remove listener
        when component unmounts
    */

    return () => {

        socket.off(
            "notification",
            handleNotification
        );

    };


}, []);


/*
    Mark one notification
    as read locally.
*/

const markNotificationAsRead =
    useCallback((notificationId) => {

        setNotifications(previous => {

            const notification =
                previous.find(
                    item =>
                        item._id === notificationId
                );


            if (
                !notification ||
                notification.isRead
            ) {

                return previous;

            }


            setUnreadCount(
                count =>
                    Math.max(
                        count - 1,
                        0
                    )
            );


            return previous.map(item =>

                item._id === notificationId

                    ? {
                        ...item,
                        isRead: true
                    }

                    : item

            );

        });

    }, []);

/*
    Replace notifications
    after fetching them from API.
*/
const setNotificationData =
    useCallback(({
        notifications,
        unreadCount
    }) => {

        setNotifications(
            notifications || []
        );


        setUnreadCount(
            unreadCount || 0
        );

    }, []);


/*
    Clear notification state.
*/

const clearNotifications =
    useCallback(() => {

        setNotifications([]);

        setUnreadCount(0);

    }, []);


return (

    <SocketContext.Provider
        value={{

            socket,

            connected,

            notifications,

            unreadCount,

            markNotificationAsRead,

            setNotificationData,

            clearNotifications

        }}
    >

        {children}

    </SocketContext.Provider>

);


};

const useSocket = () => {


const context =
    useContext(
        SocketContext
    );


if (!context) {

    throw new Error(
        "useSocket must be used inside SocketProvider"
    );

}


return context;


};

export {
SocketProvider,
useSocket
};
