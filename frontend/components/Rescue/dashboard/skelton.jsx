"use client";


const DashboardSkeleton = () => {

    return (

        <div
            className="
            mx-auto
            w-full
            max-w-[1600px]
            animate-pulse
            "
        >

            {/* ================================================= */}
            {/* HEADER SKELETON */}
            {/* ================================================= */}

            <section
                className="
                rounded-3xl
                border
                border-slate-100
                bg-white
                p-5
                sm:p-7
                lg:p-8
                "
            >

                <div
                    className="
                    flex
                    flex-col
                    gap-6
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                    "
                >

                    <div
                        className="
                        w-full
                        max-w-2xl
                        "
                    >

                        <div
                            className="
                            h-7
                            w-44
                            rounded-full
                            bg-slate-200
                            "
                        />


                        <div
                            className="
                            mt-5
                            h-10
                            w-full
                            max-w-lg
                            rounded-xl
                            bg-slate-200
                            "
                        />


                        <div
                            className="
                            mt-3
                            h-4
                            w-full
                            max-w-xl
                            rounded-lg
                            bg-slate-100
                            "
                        />


                        <div
                            className="
                            mt-2
                            h-4
                            w-3/4
                            max-w-md
                            rounded-lg
                            bg-slate-100
                            "
                        />

                    </div>


                    <div
                        className="
                        h-20
                        w-full
                        rounded-2xl
                        bg-slate-100
                        sm:w-64
                        "
                    />

                </div>

            </section>



            {/* ================================================= */}
            {/* STATISTICS */}
            {/* ================================================= */}

            <section
                className="
                mt-6
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
                xl:grid-cols-4
                "
            >

                {
                    [1, 2, 3, 4].map(
                        (item) => (

                            <div
                                key={item}
                                className="
                                rounded-3xl
                                border
                                border-slate-100
                                bg-white
                                p-5
                                sm:p-6
                                "
                            >

                                <div
                                    className="
                                    flex
                                    items-start
                                    justify-between
                                    "
                                >

                                    <div
                                        className="
                                        h-12
                                        w-12
                                        rounded-2xl
                                        bg-slate-100
                                        "
                                    />


                                    <div
                                        className="
                                        h-10
                                        w-14
                                        rounded-lg
                                        bg-slate-100
                                        "
                                    />

                                </div>


                                <div
                                    className="
                                    mt-5
                                    h-4
                                    w-24
                                    rounded
                                    bg-slate-100
                                    "
                                />


                                <div
                                    className="
                                    mt-2
                                    h-3
                                    w-40
                                    rounded
                                    bg-slate-100
                                    "
                                />


                                <div
                                    className="
                                    mt-5
                                    h-1
                                    rounded-full
                                    bg-slate-100
                                    "
                                />

                            </div>

                        )
                    )
                }

            </section>



            {/* ================================================= */}
            {/* CONTENT SKELETON */}
            {/* ================================================= */}

            <section
                className="
                mt-6
                grid
                grid-cols-1
                gap-6
                xl:grid-cols-3
                "
            >

                {/* Urgent */}

                <div
                    className="
                    rounded-3xl
                    border
                    border-slate-100
                    bg-white
                    p-5
                    sm:p-6
                    xl:col-span-2
                    "
                >

                    <div
                        className="
                        h-6
                        w-48
                        rounded-lg
                        bg-slate-200
                        "
                    />


                    <div
                        className="
                        mt-6
                        space-y-4
                        "
                    >

                        {[1, 2, 3].map(
                            (item) => (

                                <div
                                    key={item}
                                    className="
                                    flex
                                    items-center
                                    gap-4
                                    rounded-2xl
                                    bg-slate-50
                                    p-4
                                    "
                                >

                                    <div
                                        className="
                                        h-11
                                        w-11
                                        shrink-0
                                        rounded-xl
                                        bg-slate-200
                                        "
                                    />


                                    <div
                                        className="
                                        min-w-0
                                        flex-1
                                        "
                                    >

                                        <div
                                            className="
                                            h-4
                                            w-2/3
                                            rounded
                                            bg-slate-200
                                            "
                                        />


                                        <div
                                            className="
                                            mt-2
                                            h-3
                                            w-1/2
                                            rounded
                                            bg-slate-100
                                            "
                                        />

                                    </div>

                                </div>

                            )
                        )}

                    </div>

                </div>



                {/* Active */}

                <div
                    className="
                    rounded-3xl
                    border
                    border-slate-100
                    bg-white
                    p-5
                    sm:p-6
                    "
                >

                    <div
                        className="
                        h-6
                        w-40
                        rounded-lg
                        bg-slate-200
                        "
                    />


                    <div
                        className="
                        mt-6
                        space-y-4
                        "
                    >

                        {[1, 2, 3].map(
                            (item) => (

                                <div
                                    key={item}
                                    className="
                                    rounded-2xl
                                    bg-slate-50
                                    p-4
                                    "
                                >

                                    <div
                                        className="
                                        h-4
                                        w-3/4
                                        rounded
                                        bg-slate-200
                                        "
                                    />


                                    <div
                                        className="
                                        mt-3
                                        h-3
                                        w-1/2
                                        rounded
                                        bg-slate-100
                                        "
                                    />


                                    <div
                                        className="
                                        mt-4
                                        h-7
                                        w-full
                                        rounded-lg
                                        bg-slate-100
                                        "
                                    />

                                </div>

                            )
                        )}

                    </div>

                </div>

            </section>



            {/* ================================================= */}
            {/* RECENT ASSIGNMENTS */}
            {/* ================================================= */}

            <section
                className="
                mt-6
                rounded-3xl
                border
                border-slate-100
                bg-white
                p-5
                sm:p-6
                "
            >

                <div
                    className="
                    h-6
                    w-52
                    rounded-lg
                    bg-slate-200
                    "
                />


                <div
                    className="
                    mt-6
                    space-y-3
                    "
                >

                    {[1, 2, 3, 4].map(
                        (item) => (

                            <div
                                key={item}
                                className="
                                h-14
                                rounded-xl
                                bg-slate-50
                                "
                            />

                        )
                    )}

                </div>

            </section>

        </div>

    );

};


export default DashboardSkeleton;