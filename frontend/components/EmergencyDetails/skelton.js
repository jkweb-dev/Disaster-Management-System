"use client";


const EmergencyDetailsSkeleton = () => {


    return (

        <div
            className="
            mx-auto
            w-full
            max-w-[1600px]
            space-y-6
            "
        >

            {/* Header skeleton */}

            <div
                className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-100
                bg-white
                p-5
                shadow-sm
                sm:p-6
                lg:p-8
                "
            >

                <div
                    className="
                    h-4
                    w-36
                    animate-pulse
                    rounded
                    bg-slate-100
                    "
                />


                <div
                    className="
                    mt-7
                    flex
                    flex-col
                    gap-6
                    lg:flex-row
                    lg:justify-between
                    "
                >

                    <div
                        className="
                        flex
                        gap-4
                        "
                    >

                        <div
                            className="
                            h-16
                            w-16
                            shrink-0
                            animate-pulse
                            rounded-2xl
                            bg-slate-100
                            "
                        />


                        <div
                            className="
                            space-y-3
                            "
                        >

                            <div
                                className="
                                h-3
                                w-28
                                animate-pulse
                                rounded
                                bg-slate-100
                                "
                            />

                            <div
                                className="
                                h-8
                                w-64
                                max-w-[70vw]
                                animate-pulse
                                rounded
                                bg-slate-100
                                "
                            />

                            <div
                                className="
                                h-4
                                w-36
                                animate-pulse
                                rounded
                                bg-slate-100
                                "
                            />

                        </div>

                    </div>


                    <div
                        className="
                        space-y-3
                        lg:w-80
                        "
                    >

                        <div
                            className="
                            h-16
                            animate-pulse
                            rounded-2xl
                            bg-slate-100
                            "
                        />


                        <div
                            className="
                            h-20
                            animate-pulse
                            rounded-2xl
                            bg-slate-100
                            "
                        />

                    </div>

                </div>

            </div>



            {/* Status skeleton */}

            <div
                className="
                h-32
                animate-pulse
                rounded-3xl
                bg-slate-100
                "
            />



            {/* Main grid */}

            <div
                className="
                grid
                grid-cols-1
                gap-6
                xl:grid-cols-3
                "
            >

                {/* Main content */}

                <div
                    className="
                    space-y-6
                    xl:col-span-2
                    "
                >

                    {
                        Array.from({
                            length: 4
                        }).map(
                            (_, index) => (

                                <div
                                    key={index}
                                    className="
                                    rounded-3xl
                                    border
                                    border-slate-100
                                    bg-white
                                    p-6
                                    shadow-sm
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
                                            h-11
                                            w-11
                                            animate-pulse
                                            rounded-2xl
                                            bg-slate-100
                                            "
                                        />


                                        <div
                                            className="
                                            space-y-2
                                            "
                                        >

                                            <div
                                                className="
                                                h-4
                                                w-36
                                                animate-pulse
                                                rounded
                                                bg-slate-100
                                                "
                                            />

                                            <div
                                                className="
                                                h-3
                                                w-48
                                                animate-pulse
                                                rounded
                                                bg-slate-100
                                                "
                                            />

                                        </div>

                                    </div>


                                    <div
                                        className="
                                        mt-6
                                        grid
                                        grid-cols-1
                                        gap-3
                                        sm:grid-cols-2
                                        "
                                    >

                                        {
                                            Array.from({
                                                length: 4
                                            }).map(
                                                (_, itemIndex) => (

                                                    <div
                                                        key={
                                                            itemIndex
                                                        }
                                                        className="
                                                        h-20
                                                        animate-pulse
                                                        rounded-2xl
                                                        bg-slate-50
                                                        "
                                                    />

                                                )
                                            )
                                        }

                                    </div>

                                </div>

                            )
                        )
                    }

                </div>



                {/* Sidebar */}

                <div
                    className="
                    space-y-6
                    "
                >

                    {
                        Array.from({
                            length: 2
                        }).map(
                            (_, index) => (

                                <div
                                    key={index}
                                    className="
                                    h-72
                                    animate-pulse
                                    rounded-3xl
                                    bg-slate-100
                                    "
                                />

                            )
                        )
                    }

                </div>

            </div>

        </div>

    );

};


export default EmergencyDetailsSkeleton;