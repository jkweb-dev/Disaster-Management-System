"use client";


const LoadingSkeleton = () => {

    return (

        <div
            className="
            grid
            gap-5
            sm:grid-cols-2
            xl:grid-cols-3
            "
        >

            {
                Array.from({ length: 6 }).map(
                    (_, index) => (

                        <div
                            key={index}
                            className="
                            overflow-hidden
                            rounded-3xl
                            border
                            border-gray-100
                            bg-white
                            shadow-sm
                            "
                        >

                            <div
                                className="
                                h-1.5
                                animate-pulse
                                bg-gray-200
                                "
                            />


                            <div className="p-6">

                                {/* Header */}

                                <div
                                    className="
                                    flex
                                    items-start
                                    justify-between
                                    "
                                >

                                    <div className="w-full">

                                        <div
                                            className="
                                            h-6
                                            w-24
                                            animate-pulse
                                            rounded-full
                                            bg-gray-200
                                            "
                                        />


                                        <div
                                            className="
                                            mt-4
                                            h-6
                                            w-3/4
                                            animate-pulse
                                            rounded-lg
                                            bg-gray-200
                                            "
                                        />


                                        <div
                                            className="
                                            mt-2
                                            h-4
                                            w-1/2
                                            animate-pulse
                                            rounded-lg
                                            bg-gray-100
                                            "
                                        />

                                    </div>


                                    <div
                                        className="
                                        h-10
                                        w-10
                                        shrink-0
                                        animate-pulse
                                        rounded-xl
                                        bg-gray-200
                                        "
                                    />

                                </div>



                                {/* Description */}

                                <div className="mt-5 space-y-2">

                                    <div
                                        className="
                                        h-4
                                        w-full
                                        animate-pulse
                                        rounded
                                        bg-gray-100
                                        "
                                    />

                                    <div
                                        className="
                                        h-4
                                        w-5/6
                                        animate-pulse
                                        rounded
                                        bg-gray-100
                                        "
                                    />

                                </div>



                                {/* Victim */}

                                <div
                                    className="
                                    mt-5
                                    flex
                                    items-center
                                    gap-3
                                    rounded-2xl
                                    bg-gray-50
                                    p-4
                                    "
                                >

                                    <div
                                        className="
                                        h-10
                                        w-10
                                        animate-pulse
                                        rounded-xl
                                        bg-gray-200
                                        "
                                    />


                                    <div className="flex-1">

                                        <div
                                            className="
                                            h-3
                                            w-20
                                            animate-pulse
                                            rounded
                                            bg-gray-200
                                            "
                                        />


                                        <div
                                            className="
                                            mt-2
                                            h-4
                                            w-32
                                            animate-pulse
                                            rounded
                                            bg-gray-200
                                            "
                                        />

                                    </div>

                                </div>



                                {/* Information */}

                                <div
                                    className="
                                    mt-5
                                    space-y-3
                                    "
                                >

                                    <SkeletonLine/>

                                    <SkeletonLine/>

                                    <SkeletonLine/>

                                </div>



                                {/* Footer */}

                                <div
                                    className="
                                    mt-6
                                    flex
                                    items-center
                                    justify-between
                                    border-t
                                    border-gray-100
                                    pt-5
                                    "
                                >

                                    <div
                                        className="
                                        h-7
                                        w-24
                                        animate-pulse
                                        rounded-full
                                        bg-gray-200
                                        "
                                    />


                                    <div
                                        className="
                                        h-4
                                        w-28
                                        animate-pulse
                                        rounded
                                        bg-gray-100
                                        "
                                    />

                                </div>



                                {/* Button */}

                                <div
                                    className="
                                    mt-4
                                    h-11
                                    w-full
                                    animate-pulse
                                    rounded-2xl
                                    bg-gray-200
                                    "
                                />

                            </div>

                        </div>

                    )
                )
            }

        </div>

    );

};



const SkeletonLine = () => (

    <div
        className="
        flex
        items-center
        gap-3
        "
    >

        <div
            className="
            h-5
            w-5
            animate-pulse
            rounded
            bg-gray-200
            "
        />


        <div
            className="
            h-4
            w-40
            animate-pulse
            rounded
            bg-gray-100
            "
        />

    </div>

);


export default LoadingSkeleton;