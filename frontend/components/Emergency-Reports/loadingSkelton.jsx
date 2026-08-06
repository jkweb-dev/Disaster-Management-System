"use client";

const LoadingSkeleton = () => {

    return (

        <div className="grid gap-6 lg:grid-cols-2">

            {[1,2,3,4].map((item)=>(

                <div
                    key={item}
                    className="animate-pulse rounded-2xl border bg-white p-6"
                >

                    <div className="flex justify-between">

                        <div>

                            <div className="h-6 w-52 rounded bg-gray-200"></div>

                            <div className="mt-4 h-4 w-32 rounded bg-gray-200"></div>

                        </div>

                        <div className="h-8 w-24 rounded-full bg-gray-200"></div>

                    </div>

                    <div className="mt-8 space-y-4">

                        <div className="h-4 w-full rounded bg-gray-200"></div>

                        <div className="h-4 w-2/3 rounded bg-gray-200"></div>

                        <div className="h-4 w-1/2 rounded bg-gray-200"></div>

                    </div>

                    <div className="mt-8 h-11 w-36 rounded-xl bg-gray-200"></div>

                </div>

            ))}

        </div>

    );

};

export default LoadingSkeleton;