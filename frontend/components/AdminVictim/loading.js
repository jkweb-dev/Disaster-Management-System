"use client";


const VictimsLoadingSkeleton = () => {

    return (

        <div
            className="
            overflow-hidden
            rounded-3xl
            border
            border-gray-100
            bg-white
            shadow-sm
            "
        >

            {/* ========================================= */}
            {/* Desktop Skeleton */}
            {/* ========================================= */}

            <div className="hidden lg:block">

                {/* Header */}

                <div
                    className="
                    flex
                    items-center
                    gap-6
                    border-b
                    border-gray-100
                    bg-gray-50
                    px-6
                    py-4
                    "
                >

                    <Skeleton className="h-3 w-32" />

                    <Skeleton className="h-3 w-28" />

                    <Skeleton className="h-3 w-24" />

                    <Skeleton className="ml-auto h-3 w-20" />

                    <Skeleton className="h-3 w-24" />

                    <Skeleton className="h-3 w-20" />

                </div>



                {/* Rows */}

                <div className="divide-y divide-gray-100">

                    {
                        Array.from({
                            length: 6
                        }).map(
                            (_, index) => (

                                <div
                                    key={index}
                                    className="
                                    grid
                                    grid-cols-[1.5fr_1.5fr_1fr_0.7fr_1fr_0.7fr]
                                    items-center
                                    gap-6
                                    px-6
                                    py-5
                                    "
                                >

                                    {/* Victim */}

                                    <div
                                        className="
                                        flex
                                        items-center
                                        gap-3
                                        "
                                    >

                                        <Skeleton
                                            className="
                                            h-11
                                            w-11
                                            rounded-2xl
                                            "
                                        />


                                        <div
                                            className="
                                            space-y-2
                                            "
                                        >

                                            <Skeleton
                                                className="
                                                h-3
                                                w-28
                                                "
                                            />

                                            <Skeleton
                                                className="
                                                h-2.5
                                                w-14
                                                "
                                            />

                                        </div>

                                    </div>



                                    {/* Contact */}

                                    <div
                                        className="
                                        space-y-2
                                        "
                                    >

                                        <Skeleton
                                            className="
                                            h-3
                                            w-40
                                            "
                                        />

                                        <Skeleton
                                            className="
                                            h-2.5
                                            w-24
                                            "
                                        />

                                    </div>



                                    {/* Location */}

                                    <Skeleton
                                        className="
                                        h-3
                                        w-24
                                        "
                                    />



                                    {/* Reports */}

                                    <div
                                        className="
                                        flex
                                        justify-center
                                        "
                                    >

                                        <Skeleton
                                            className="
                                            h-9
                                            w-14
                                            rounded-xl
                                            "
                                        />

                                    </div>



                                    {/* Date */}

                                    <Skeleton
                                        className="
                                        h-3
                                        w-24
                                        "
                                    />



                                    {/* Button */}

                                    <div
                                        className="
                                        flex
                                        justify-end
                                        "
                                    >

                                        <Skeleton
                                            className="
                                            h-9
                                            w-24
                                            rounded-xl
                                            "
                                        />

                                    </div>

                                </div>

                            )
                        )
                    }

                </div>

            </div>



            {/* ========================================= */}
            {/* Mobile Skeleton */}
            {/* ========================================= */}

            <div
                className="
                divide-y
                divide-gray-100
                lg:hidden
                "
            >

                {
                    Array.from({
                        length: 5
                    }).map(
                        (_, index) => (

                            <div
                                key={index}
                                className="
                                p-5
                                "
                            >

                                {/* Top */}

                                <div
                                    className="
                                    flex
                                    items-center
                                    justify-between
                                    "
                                >

                                    <div
                                        className="
                                        flex
                                        items-center
                                        gap-3
                                        "
                                    >

                                        <Skeleton
                                            className="
                                            h-11
                                            w-11
                                            rounded-2xl
                                            "
                                        />


                                        <div
                                            className="
                                            space-y-2
                                            "
                                        >

                                            <Skeleton
                                                className="
                                                h-3
                                                w-28
                                                "
                                            />

                                            <Skeleton
                                                className="
                                                h-2.5
                                                w-36
                                                "
                                            />

                                        </div>

                                    </div>


                                    <Skeleton
                                        className="
                                        h-12
                                        w-14
                                        rounded-xl
                                        "
                                    />

                                </div>



                                {/* Details */}

                                <div
                                    className="
                                    mt-4
                                    grid
                                    gap-2
                                    sm:grid-cols-2
                                    "
                                >

                                    <Skeleton
                                        className="
                                        h-10
                                        rounded-xl
                                        "
                                    />

                                    <Skeleton
                                        className="
                                        h-10
                                        rounded-xl
                                        "
                                    />

                                    <Skeleton
                                        className="
                                        h-10
                                        rounded-xl
                                        "
                                    />

                                </div>



                                {/* Button */}

                                <Skeleton
                                    className="
                                    mt-4
                                    h-11
                                    w-full
                                    rounded-xl
                                    "
                                />

                            </div>

                        )
                    )
                }

            </div>

        </div>

    );

};



const Skeleton = ({
    className = ""
}) => {

    return (

        <div
            className={`
            animate-pulse
            bg-gray-200
            ${className}
            `}
        />

    );

};


export default VictimsLoadingSkeleton;