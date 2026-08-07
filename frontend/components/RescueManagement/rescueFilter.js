"use client";


import {
    Search,
    Filter
} from "lucide-react";



const RescueFilters = ({
    search,
    setSearch,
    status,
    setStatus
}) => {


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
                flex
                items-center
                gap-3
                mb-5
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

                    <Filter size={22}/>

                </div>


                <h2
                    className="
                    text-lg
                    font-bold
                    text-gray-800
                    "
                >

                    Search & Filter

                </h2>


            </div>





            <div
                className="
                grid
                gap-4
                md:grid-cols-2
                "
            >



                {/* Search */}


                <div
                    className="
                    relative
                    "
                >

                    <Search

                        className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-gray-400
                        "

                        size={20}

                    />


                    <input

                        value={search}

                        onChange={
                            (e)=>
                            setSearch(e.target.value)
                        }

                        placeholder="Search organization..."

                        className="
                        w-full
                        rounded-2xl
                        border
                        bg-gray-50
                        py-3
                        pl-12
                        pr-4
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:bg-white
                        "

                    />


                </div>






                {/* Status Filter */}


                <select


                    value={status}


                    onChange={
                        (e)=>
                        setStatus(e.target.value)
                    }


                    className="
                    rounded-2xl
                    border
                    bg-gray-50
                    px-4
                    py-3
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:bg-white
                    "

                >

                    <option value="all">

                        All Teams

                    </option>


                    <option value="pending">

                        Pending Approval

                    </option>


                    <option value="approved">

                        Approved

                    </option>


                    <option value="rejected">

                        Rejected

                    </option>


                </select>




            </div>


        </div>

    );

};


export default RescueFilters;