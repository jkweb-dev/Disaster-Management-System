"use client";


const LoadingSkeleton = () => {


    return (

        <div
            className="
            min-h-screen
            bg-gray-50
            px-5
            py-8
            "
        >

            <div
                className="
                mx-auto
                max-w-7xl
                space-y-8
                "
            >


                {/* Header Skeleton */}

                <div
                    className="
                    animate-pulse
                    rounded-3xl
                    border
                    bg-white
                    p-6
                    "
                >

                    <div className="flex items-center gap-4">

                        <div
                            className="
                            h-16
                            w-16
                            rounded-2xl
                            bg-gray-200
                            "
                        />


                        <div className="space-y-3">

                            <div
                                className="
                                h-7
                                w-64
                                rounded
                                bg-gray-200
                                "
                            />

                            <div
                                className="
                                h-4
                                w-40
                                rounded
                                bg-gray-200
                                "
                            />

                        </div>


                    </div>


                </div>





                <div
                    className="
                    grid
                    gap-8
                    lg:grid-cols-3
                    "
                >


                    <div
                        className="
                        space-y-8
                        lg:col-span-2
                        "
                    >



                        {/* Emergency Info */}

                        <SkeletonCard lines={5}/>



                        {/* People */}

                        <SkeletonCard lines={3}/>



                        {/* Images */}

                        <div
                            className="
                            animate-pulse
                            rounded-3xl
                            border
                            bg-white
                            p-6
                            "
                        >

                            <div
                                className="
                                h-6
                                w-48
                                rounded
                                bg-gray-200
                                "
                            />


                            <div
                                className="
                                mt-6
                                grid
                                grid-cols-3
                                gap-4
                                "
                            >

                                {
                                    [1,2,3].map((item)=>(

                                        <div
                                            key={item}
                                            className="
                                            h-40
                                            rounded-2xl
                                            bg-gray-200
                                            "
                                        />

                                    ))
                                }

                            </div>


                        </div>



                    </div>





                    {/* Right Side */}

                    <div
                        className="
                        space-y-8
                        "
                    >

                        <SkeletonCard lines={4}/>


                        <SkeletonCard lines={6}/>


                    </div>



                </div>



            </div>


        </div>

    );

};







const SkeletonCard = ({
    lines=4
})=>{


    return (

        <div
            className="
            animate-pulse
            rounded-3xl
            border
            bg-white
            p-6
            space-y-5
            "
        >

            <div
                className="
                h-6
                w-52
                rounded
                bg-gray-200
                "
            />


            {
                Array.from({
                    length:lines
                })
                .map((_,index)=>(

                    <div
                        key={index}
                        className="
                        h-4
                        rounded
                        bg-gray-200
                        "
                    />

                ))
            }


        </div>

    );

};




export default LoadingSkeleton;