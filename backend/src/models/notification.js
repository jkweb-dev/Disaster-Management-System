import mongoose from "mongoose";


const notificationSchema = new mongoose.Schema(

    {

        // User who should receive
        // this notification

        recipient: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        },


        // Notification category

        type: {

            type: String,

            required: true

        },


        // Notification heading

        title: {

            type: String,

            required: true

        },


        // Notification message

        message: {

            type: String,

            required: true

        },


        // Optional ID of the related
        // resource

        relatedId: {

            type: mongoose.Schema.Types.ObjectId,

            default: null

        },


        // What the related resource is

        relatedType: {

            type: String,

            default: null

        },


        // Read/unread state

        isRead: {

            type: Boolean,

            default: false

        }

    },

    {

        timestamps: true

    }

);


const Notification =
    mongoose.model(
        "Notification",
        notificationSchema
    );


export default Notification;