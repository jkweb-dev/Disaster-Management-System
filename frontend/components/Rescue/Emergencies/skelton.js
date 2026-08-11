"use client";


const EmergencySkeleton = ({
    count = 4
}) => {


    return (

        <div
            className="
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-2
            "
        >

            {
                Array.from({
                    length: count
                }).map(
                    (_, index) => (

                        <div
                            key={index}
                            className="
                            overflow-hidden
                            rounded-3xl
                            border
                            border-slate-100
                            bg-white
                            p-5
                            shadow-sm
                            sm:p-6
                            "
                        >

                            {/* Top accent */}

                            <div
                                className="
                                h-1
                                w-full
                                animate-pulse
                                rounded-full
                                bg-slate-100
                                "
                            />



                            {/* Header */}

                            <div
                                className="
                                mt-5
                                flex
                                items-start
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
                                        h-11
                                        w-11
                                        shrink-0
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
                                            w-32
                                            animate-pulse
                                            rounded
                                            bg-slate-100
                                            "
                                        />

                                        <div
                                            className="
                                            h-3
                                            w-20
                                            animate-pulse
                                            rounded
                                            bg-slate-100
                                            "
                                        />

                                    </div>

                                </div>



                                <div
                                    className="
                                    h-6
                                    w-20
                                    animate-pulse
                                    rounded-full
                                    bg-slate-100
                                    "
                                />

                            </div>



                            {/* Badges */}

                            <div
                                className="
                                mt-5
                                flex
                                gap-2
                                "
                            >

                                <div
                                    className="
                                    h-6
                                    w-20
                                    animate-pulse
                                    rounded-full
                                    bg-slate-100
                                    "
                                />


                                <div
                                    className="
                                    h-6
                                    w-28
                                    animate-pulse
                                    rounded-full
                                    bg-slate-100
                                    "
                                />

                            </div>



                            {/* Description */}

                            <div
                                className="
                                mt-5
                                space-y-2
                                "
                            >

                                <div
                                    className="
                                    h-3
                                    w-full
                                    animate-pulse
                                    rounded
                                    bg-slate-100
                                    "
                                />

                                <div
                                    className="
                                    h-3
                                    w-4/5
                                    animate-pulse
                                    rounded
                                    bg-slate-100
                                    "
                                />

                            </div>



                            {/* Information */}

                            <div
                                className="
                                mt-5
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
                                                flex
                                                items-center
                                                gap-3
                                                rounded-2xl
                                                bg-slate-50
                                                p-3
                                                "
                                            >

                                                <div
                                                    className="
                                                    h-9
                                                    w-9
                                                    shrink-0
                                                    animate-pulse
                                                    rounded-xl
                                                    bg-slate-200
                                                    "
                                                />


                                                <div
                                                    className="
                                                    flex-1
                                                    space-y-2
                                                    "
                                                >

                                                    <div
                                                        className="
                                                        h-2
                                                        w-16
                                                        animate-pulse
                                                        rounded
                                                        bg-slate-200
                                                        "
                                                    />

                                                    <div
                                                        className="
                                                        h-3
                                                        w-24
                                                        animate-pulse
                                                        rounded
                                                        bg-slate-200
                                                        "
                                                    />

                                                </div>

                                            </div>

                                        )
                                    )
                                }

                            </div>



                            {/* Footer */}

                            <div
                                className="
                                mt-5
                                flex
                                flex-col
                                gap-3
                                border-t
                                border-slate-100
                                pt-4
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                                "
                            >

                                <div
                                    className="
                                    h-3
                                    w-32
                                    animate-pulse
                                    rounded
                                    bg-slate-100
                                    "
                                />


                                <div
                                    className="
                                    h-10
                                    w-full
                                    animate-pulse
                                    rounded-xl
                                    bg-slate-100
                                    sm:w-28
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


export default EmergencySkeleton;