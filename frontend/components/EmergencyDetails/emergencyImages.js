"use client";

import {
    Image as ImageIcon,
    ExternalLink
} from "lucide-react";


const BACKEND_URL =
    "http://localhost:5000";


const EmergencyImages = ({
    images = []
}) => {


    const getImageUrl = (image) => {

        if (!image) {
            return "";
        }


        /*
        If backend already gives
        a complete URL.
        */

        if (
            image.url &&
            (
                image.url.startsWith("http://") ||
                image.url.startsWith("https://")
            )
        ) {

            return image.url;

        }


        /*
        Otherwise use filename.
        */

        if (image.filename) {

            return `${BACKEND_URL}/uploads/${image.filename}`;

        }


        /*
        Fallback for a plain string.
        */

        if (typeof image === "string") {

            if (
                image.startsWith("http://") ||
                image.startsWith("https://")
            ) {

                return image;

            }

            return `${BACKEND_URL}/uploads/${image}`;

        }


        return "";

    };



    return (

        <section
            className="
            rounded-3xl
            border
            border-slate-100
            bg-white
            p-5
            shadow-sm
            sm:p-6
            "
        >

            {/* Header */}

            <div
                className="
                flex
                items-center
                justify-between
                gap-4
                "
            >

                <div
                    className="
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
                        items-center
                        justify-center
                        rounded-2xl
                        bg-indigo-50
                        text-indigo-600
                        "
                    >

                        <ImageIcon
                            size={21}
                        />

                    </div>


                    <div>

                        <h2
                            className="
                            text-lg
                            font-bold
                            text-slate-800
                            "
                        >

                            Emergency Images

                        </h2>


                        <p
                            className="
                            mt-0.5
                            text-xs
                            text-slate-400
                            "
                        >

                            Photos submitted with this report.

                        </p>

                    </div>

                </div>



                <span
                    className="
                    shrink-0
                    rounded-full
                    bg-indigo-50
                    px-3
                    py-1.5
                    text-xs
                    font-bold
                    text-indigo-600
                    "
                >

                    {images.length}

                </span>

            </div>



            {/* Images */}

            {
                images.length > 0 ? (

                    <div
                        className="
                        mt-6
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-2
                        lg:grid-cols-3
                        "
                    >

                        {
                            images.map(
                                (image, index) => {

                                    const imageUrl =
                                        getImageUrl(image);


                                    return (

                                        <div
                                            key={
                                                image?._id ||
                                                image?.filename ||
                                                index
                                            }
                                            className="
                                            group
                                            relative
                                            overflow-hidden
                                            rounded-2xl
                                            border
                                            border-slate-100
                                            bg-slate-100
                                            "
                                        >

                                            <div
                                                className="
                                                aspect-[4/3]
                                                "
                                            >

                                                {
                                                    imageUrl ? (

                                                        <img
                                                            src={
                                                                imageUrl
                                                            }
                                                            alt={
                                                                `Emergency image ${index + 1}`
                                                            }
                                                            className="
                                                            h-full
                                                            w-full
                                                            object-cover
                                                            transition
                                                            duration-500
                                                            group-hover:scale-105
                                                            "
                                                        />

                                                    ) : (

                                                        <div
                                                            className="
                                                            flex
                                                            h-full
                                                            items-center
                                                            justify-center
                                                            text-slate-400
                                                            "
                                                        >

                                                            <ImageIcon
                                                                size={32}
                                                            />

                                                        </div>

                                                    )
                                                }

                                            </div>



                                            {/* Overlay */}

                                            {
                                                imageUrl && (

                                                    <a
                                                        href={
                                                            imageUrl
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="
                                                        absolute
                                                        right-3
                                                        top-3
                                                        flex
                                                        h-9
                                                        w-9
                                                        items-center
                                                        justify-center
                                                        rounded-xl
                                                        bg-black/50
                                                        text-white
                                                        opacity-0
                                                        backdrop-blur-sm
                                                        transition
                                                        group-hover:opacity-100
                                                        "
                                                        aria-label={
                                                            `Open emergency image ${index + 1}`
                                                        }
                                                    >

                                                        <ExternalLink
                                                            size={16}
                                                        />

                                                    </a>

                                                )
                                            }



                                            {/* Image number */}

                                            <div
                                                className="
                                                absolute
                                                bottom-3
                                                left-3
                                                rounded-lg
                                                bg-black/50
                                                px-2.5
                                                py-1
                                                text-[10px]
                                                font-semibold
                                                text-white
                                                backdrop-blur-sm
                                                "
                                            >

                                                Image {index + 1}

                                            </div>

                                        </div>

                                    );

                                }
                            )
                        }

                    </div>

                ) : (

                    <div
                        className="
                        mt-6
                        flex
                        min-h-[180px]
                        flex-col
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-dashed
                        border-slate-200
                        bg-slate-50
                        px-6
                        text-center
                        "
                    >

                        <div
                            className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-white
                            text-slate-400
                            shadow-sm
                            "
                        >

                            <ImageIcon
                                size={22}
                            />

                        </div>


                        <p
                            className="
                            mt-3
                            text-sm
                            font-semibold
                            text-slate-600
                            "
                        >

                            No images attached

                        </p>


                        <p
                            className="
                            mt-1
                            text-xs
                            text-slate-400
                            "
                        >

                            This emergency report contains
                            no uploaded photos.

                        </p>

                    </div>

                )
            }

        </section>

    );

};


export default EmergencyImages;