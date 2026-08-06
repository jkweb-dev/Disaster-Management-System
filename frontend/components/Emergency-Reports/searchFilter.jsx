"use client";

import { Search } from "lucide-react";

const SearchFilter = ({
    search,
    setSearch,
    status,
    setStatus
}) => {

    return (

        <div className="flex flex-col gap-4 md:flex-row">

            <div className="relative flex-1">

                <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                    type="text"
                    placeholder="Search by title or emergency type..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    className="
                        w-full
                        rounded-xl
                        border
                        bg-white
                        py-3
                        pl-11
                        pr-4
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-100
                    "
                />

            </div>

            <select
                value={status}
                onChange={(e) =>
                    setStatus(e.target.value)
                }
                className="
                    rounded-xl
                    border
                    bg-white
                    px-4
                    py-3
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-100
                "
            >

                <option value="All">
                    All Status
                </option>

                <option value="Pending">
                    Pending
                </option>

                <option value="Assigned">
                    Assigned
                </option>

                <option value="In Progress">
                    In Progress
                </option>

                <option value="Resolved">
                    Resolved
                </option>

                <option value="Rejected">
                    Rejected
                </option>

            </select>

        </div>

    );

};

export default SearchFilter;