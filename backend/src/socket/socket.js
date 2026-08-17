import { Server } from "socket.io";
import jwt from "jsonwebtoken";

import User from "../models/user.js";


let io;



const initializeSocket = (server) => {


    io = new Server(server, {

        cors: {

            origin: "http://localhost:3000",

            credentials: true

        }

    });



    /*
        Socket authentication middleware
    */

    io.use(
        async (socket, next) => {

            try {

                /*
                    Socket.IO handshake receives
                    the browser cookies.
                */

                const cookieHeader =
                    socket.handshake.headers.cookie;



                if (!cookieHeader) {

                    return next(
                        new Error(
                            "Not authenticated"
                        )
                    );

                }



                /*
                    Extract token from cookies
                */

                const cookies =
                    Object.fromEntries(

                        cookieHeader
                            .split(";")
                            .map(
                                cookie => {

                                    const [
                                        key,
                                        ...value
                                    ] =
                                        cookie
                                            .trim()
                                            .split("=");

                                    return [
                                        key,
                                        value.join("=")
                                    ];

                                }
                            )

                    );



                const token =
                    cookies.token;



                if (!token) {

                    return next(
                        new Error(
                            "Not authenticated"
                        )
                    );

                }



                /*
                    Verify JWT
                */

                const decoded =
                    jwt.verify(

                        token,

                        process.env.JWT_SECRET

                    );



                /*
                    Find user
                */

                const user =
                    await User.findById(
                        decoded.id
                    )
                    .select("-password");



                if (!user) {

                    return next(
                        new Error(
                            "User not found"
                        )
                    );

                }



                /*
                    Attach authenticated
                    user to socket
                */

                socket.user = user;



                next();

            }

            catch (error) {

                console.error(
                    "Socket authentication error:",
                    error
                );


                next(
                    new Error(
                        "Not authenticated"
                    )
                );

            }

        }
    );



    /*
        Connection
    */

    io.on(
        "connection",
        (socket) => {


            console.log(

                "Socket connected:",

                socket.id,

                "User:",

                socket.user._id.toString()

            );



            /*
                Automatically create
                private user room.
            */

            const room =
                `user:${socket.user._id.toString()}`;



            socket.join(room);



            console.log(

                `User joined private room: ${room}`

            );



            /*
                Disconnect
            */

            socket.on(
                "disconnect",
                () => {

                    console.log(

                        "Socket disconnected:",

                        socket.id

                    );

                }
            );

        }
    );



    return io;

};



const getIO = () => {


    if (!io) {

        throw new Error(

            "Socket.IO has not been initialized"

        );

    }



    return io;

};



export {
    initializeSocket,
    getIO
};