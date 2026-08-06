"use client";

import {
    Images,
    ImageOff
} from "lucide-react";


const ImageGallery = ({
    report
}) => {


    const images = report.images || [];



    return (

        <div
            className="
            rounded-3xl
            border
            bg-white
            p-6
            shadow-sm
            "
        >

            <div
                className="
                mb-6
                flex
                items-center
                gap-3
                "
            >

                <div
                    className="
                    rounded-xl
                    bg-blue-100
                    p-3
                    text-blue-600
                    "
                >

                    <Images size={22}/>

                </div>


                <h2
                    className="
                    text-xl
                    font-bold
                    text-gray-800
                    "
                >

                    Emergency Images

                </h2>


            </div>





            {
                images.length === 0

                ?

                (

                    <div
                        className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gray-50
                        py-12
                        text-gray-500
                        "
                    >

                        <ImageOff size={40}/>

                        <p className="mt-3">
                            No images uploaded
                        </p>


                    </div>

                )

                :

                (

                    <div
                        className="
                        grid
                        gap-4
                        sm:grid-cols-2
                        lg:grid-cols-3
                        "
                    >

                        {
                            images.map(
                                (image,index)=>(

                                    <div
                                        key={index}
                                        className="
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        "
                                    >

                                        <img

                                            src={
                                                `${process.env.NEXT_PUBLIC_API_URL}${image.url}`
                                            }

                                            alt="Emergency image"

                                            className="
                                            h-56
                                            w-full
                                            object-cover
                                            transition
                                            duration-300
                                            hover:scale-105
                                            "

                                        />

                                    </div>

                                )
                            )
                        }


                    </div>

                )
            }



        </div>

    );

};


export default ImageGallery;