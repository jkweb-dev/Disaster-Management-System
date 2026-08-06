"use client";


import { useState } from "react";

import {
    MapContainer,
    TileLayer,
    Marker,
    useMapEvents
} from "react-leaflet";


import "leaflet/dist/leaflet.css";


import L from "leaflet";



delete L.Icon.Default.prototype._getIconUrl;


L.Icon.Default.mergeOptions({

    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",

    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",

    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",

});






const DraggableMarker = ({
    position,
    handleLocationChange
}) => {


    const [markerPosition,setMarkerPosition] =
        useState(position);



    const eventHandlers = {


        dragend(e){


            const marker =
                e.target;



            const newPosition =
                marker.getLatLng();



            setMarkerPosition(newPosition);



            handleLocationChange({

                latitude:newPosition.lat,

                longitude:newPosition.lng

            });



        }


    };



    return (

        <Marker

            position={markerPosition}

            draggable={true}

            eventHandlers={eventHandlers}

        />

    );


};









const LocationClickHandler = ({
    handleLocationChange
}) => {


    useMapEvents({

        click(e){


            handleLocationChange({

                latitude:e.latlng.lat,

                longitude:e.latlng.lng

            });


        }


    });



    return null;

};









const LocationStep = ({
    formData,
    handleLocationChange
}) => {



    const [loading,setLoading] =
        useState(false);


    const [addressLoading,setAddressLoading] =
        useState(false);








    const reverseGeocode = async(
        latitude,
        longitude
    )=>{


        try{


            setAddressLoading(true);



            const response =
                await fetch(

                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`

                );



            const data =
                await response.json();




            handleLocationChange({

                address:
                    data.display_name || "",


                city:
                    data.address?.city ||
                    data.address?.town ||
                    data.address?.village ||
                    ""

            });



        }
        catch(error){


            console.log(
                "Reverse geocoding error",
                error
            );


        }
        finally{


            setAddressLoading(false);


        }


    };









    const updateLocation = ({
        latitude,
        longitude
    })=>{


        handleLocationChange({

            latitude,

            longitude

        });



        reverseGeocode(
            latitude,
            longitude
        );


    };








    const getCurrentLocation = ()=>{


        setLoading(true);



        navigator.geolocation.getCurrentPosition(

            (position)=>{


                updateLocation({

                    latitude:
                        position.coords.latitude,


                    longitude:
                        position.coords.longitude

                });



                setLoading(false);


            },


            ()=>{


                alert(
                    "Please allow location permission"
                );


                setLoading(false);


            },

            {
                enableHighAccuracy:true
            }


        );


    };








    return (

        <div className="space-y-6">


            <div>


                <h2 className="
                    text-xl
                    font-semibold
                    text-gray-800
                ">
                    Emergency Location
                </h2>



                <p className="
                    text-sm
                    text-gray-500
                ">
                    Use GPS or move the marker manually.
                </p>


            </div>








            <button

                type="button"

                onClick={getCurrentLocation}

                disabled ={loading}

                className="
                    px-5
                    py-3
                    rounded-xl
                    bg-blue-600
                    text-white
                    hover:bg-blue-700
                "

            >

                {
                    loading
                    ?
                    "Getting Location..."
                    :
                    "📍 Use Current Location"
                }


            </button>










            {
                formData.location.latitude && (


                <div className="
                    h-[350px]
                    rounded-2xl
                    overflow-hidden
                    border
                ">


                    <MapContainer

                        center={[
                            formData.location.latitude,

                            formData.location.longitude
                        ]}

                        zoom={15}

                        className="
                            h-full
                            w-full
                        "

                    >


                        <TileLayer

                            url="
                            https://tile.openstreetmap.org/{z}/{x}/{y}.png
                            "

                        />



                        <DraggableMarker

                            position={[
                                formData.location.latitude,

                                formData.location.longitude
                            ]}

                            handleLocationChange={
                                updateLocation
                            }

                        />



                        <LocationClickHandler

                            handleLocationChange={
                                updateLocation
                            }

                        />


                    </MapContainer>



                </div>


                )
            }









            {
                addressLoading && (

                    <p className="
                        text-sm
                        text-blue-600
                    ">

                        Finding address...

                    </p>

                )
            }









            {
                formData.location.address && (

                    <div className="
                        bg-green-50
                        border
                        border-green-200
                        rounded-xl
                        p-4
                    ">


                        <p className="
                            text-sm
                            font-medium
                        ">

                            Address:

                        </p>


                        <p className="
                            text-sm
                            text-gray-600
                        ">

                            {formData.location.address}

                        </p>



                        <p className="
                            text-sm
                            mt-2
                        ">

                            City:

                            {" "}

                            {formData.location.city}


                        </p>



                    </div>

                )
            }









            <div>


                <label className="
                    block
                    text-sm
                    font-medium
                    mb-2
                ">
                    Landmark
                </label>


                <input

                    value={
                        formData.location.landmark
                    }


                    onChange={(e)=>

                        handleLocationChange({

                            landmark:
                                e.target.value

                        })

                    }


                    placeholder="
                    Example: Near school, hospital
                    "

                    className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        border
                        outline-none
                    "

                />


            </div>





        </div>

    );


};


export default LocationStep;