import Notification from "../models/notification.js";

import { getIO } from "../socket/socket.js";


const createNotification = async ({

    recipient,

    type,

    title,

    message,

    relatedId = null,

    relatedType = null

}) => {


    /*
        Always save the notification
        in MongoDB first.
    */

    const notification =
        await Notification.create({

            recipient,

            type,

            title,

            message,

            relatedId,

            relatedType

        });



    /*
        Real-time delivery is optional.

        If Socket.IO is unavailable,
        the notification still remains
        safely stored in MongoDB.
    */

    try {

        const io = getIO();


        io.to(
            `user:${recipient.toString()}`
        ).emit(

            "notification",

            notification

        );

    }

    catch (error) {

        console.error(

            "Real-time notification failed:",

            error.message

        );

    }



    return notification;

};



export default createNotification;