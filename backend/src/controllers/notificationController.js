import Notification from "../models/notification.js";



/*
    Get notifications
    for the logged-in user
*/

const getNotifications = async (req, res) => {

    try {

        const notifications =
            await Notification.find({

                recipient: req.user.id

            })
            .sort({
                createdAt: -1
            });


        const unreadCount =
            await Notification.countDocuments({

                recipient: req.user.id,

                isRead: false

            });



        return res.status(200).json({

            message:
                "Notifications fetched successfully",

            notifications,

            unreadCount

        });

    }

    catch (error) {

        console.error(
            "Get notifications error:",
            error
        );


        return res.status(500).json({

            message:
                "Failed to fetch notifications"

        });

    }

};



/*
    Mark one notification
    as read
*/

const markAsRead = async (req, res) => {

    try {

        const {
            id
        } = req.params;



        const notification =
            await Notification.findOne({

                _id: id,

                recipient: req.user.id

            });



        if (!notification) {

            return res.status(404).json({

                message:
                    "Notification not found"

            });

        }



        notification.isRead = true;


        await notification.save();



        return res.status(200).json({

            message:
                "Notification marked as read",

            notification

        });

    }

    catch (error) {

        console.error(
            "Mark notification as read error:",
            error
        );


        return res.status(500).json({

            message:
                "Failed to update notification"

        });

    }

};



/*
    Mark all notifications
    as read
*/

const markAllAsRead = async (req, res) => {

    try {

        await Notification.updateMany(

            {

                recipient: req.user.id,

                isRead: false

            },

            {

                $set: {

                    isRead: true

                }

            }

        );



        return res.status(200).json({

            message:
                "All notifications marked as read"

        });

    }

    catch (error) {

        console.error(
            "Mark all notifications as read error:",
            error
        );


        return res.status(500).json({

            message:
                "Failed to update notifications"

        });

    }

};



export {
    getNotifications,
    markAsRead,
    markAllAsRead
};