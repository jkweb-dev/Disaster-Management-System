"use client";


const LoadingSkeleton = () => {


    return (

        <div
            className="
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-3
            "
        >


            {
                Array.from({
                    length:6
                })
                .map((_,index)=>(

                    <div

                        key={index}

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
                            w-40
                            rounded
                            bg-gray-200
                            "
                        />


                        <div
                            className="
                            mt-5
                            space-y-3
                            "
                        >

                            <div className="h-4 rounded bg-gray-200"/>

                            <div className="h-4 rounded bg-gray-200"/>

                            <div className="h-4 rounded bg-gray-200"/>

                        </div>


                        <div
                            className="
                            mt-6
                            h-12
                            rounded-2xl
                            bg-gray-200
                            "
                        />


                    </div>


                ))
            }


        </div>

    );

};


export default LoadingSkeleton;