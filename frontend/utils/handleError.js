import { toast } from "react-hot-toast";


const handleError = (
    error,
    router
) => {


    const status = error.response?.status;


    const message =
    error.response?.data?.message ||
    "Something went wrong";



    switch(status){


        case 400:

            toast.error(
                message || "Invalid request"
            );

            break;



        case 401:

            toast.error(
                "Session expired. Please login again."
            );


            localStorage.removeItem("token");
            localStorage.removeItem("user");


            router.push("/");


            break;




        case 403:

            toast.error(
               message || "You are not allowed to perform this action"
            );

            break;



        case 404:

            toast.error(
               message || "Requested resource not found"
            );

            break;




        case 409:

            toast.error(
                message || "Already exists"
            );

            break;




        case 500:

            toast.error(
               message || "Server error. Please try again later"
            );

            break;




        default:

            toast.error(
                message
            );

    }


};


export default handleError;