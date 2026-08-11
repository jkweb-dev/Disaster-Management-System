"use client";

import EmergencyCard from "./card";


const EmergencyList = ({
    emergencies = []
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
                emergencies.map(
                    (emergency) => (

                        <EmergencyCard
                            key={
                                emergency._id
                            }
                            emergency={
                                emergency
                            }
                        />

                    )
                )
            }

        </div>

    );

};


export default EmergencyList;