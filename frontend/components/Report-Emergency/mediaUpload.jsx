"use client";


import { useRef } from "react";
import { FaImage, FaTimes, FaUpload } from "react-icons/fa";



const MediaUpload = ({
    formData,
    setImages
}) => {



    const fileInputRef = useRef(null);



    const handleFileChange = (e)=>{


        const files = Array.from(e.target.files);



        const newFiles = [
            ...formData.images,
            ...files
        ];



        setImages(newFiles);


    };





    const removeImage = (index)=>{


        const updatedImages =
            formData.images.filter(
                (_,i)=> i !== index
            );


        setImages(updatedImages);


    };





    return (

        <div className="space-y-6">



            <div>

                <h2 className="
                    text-xl
                    font-semibold
                    text-gray-800
                ">
                    Upload Images
                </h2>


                <p className="
                    text-sm
                    text-gray-500
                    mt-1
                ">
                    Add photos that help rescue teams understand the situation.
                </p>

            </div>





            {/* Upload Box */}

            <div

                onClick={()=>fileInputRef.current.click()}

                className="
                    border-2
                    border-dashed
                    border-gray-300
                    rounded-2xl
                    p-8
                    flex
                    flex-col
                    items-center
                    justify-center
                    cursor-pointer
                    hover:border-blue-500
                    hover:bg-blue-50
                    transition
                "

            >


                <FaUpload
                    className="
                        text-3xl
                        text-blue-600
                    "
                />


                <p className="
                    mt-3
                    font-medium
                    text-gray-700
                ">
                    Click to upload images
                </p>


                <p className="
                    text-sm
                    text-gray-500
                    mt-1
                ">
                    JPG, PNG, JPEG, WEBP (Maximum 5 images)
                </p>


                <input

                    ref={fileInputRef}

                    type="file"

                    accept="image/*"

                    multiple

                    hidden

                    onChange={handleFileChange}

                />


            </div>






            {/* Preview */}

            {
                formData.images.length > 0 && (


                    <div className="
                        grid
                        grid-cols-2
                        sm:grid-cols-3
                        gap-4
                    ">


                        {
                            formData.images.map(
                                (image,index)=>(


                                <div

                                    key={index}

                                    className="
                                        relative
                                        rounded-xl
                                        overflow-hidden
                                        border
                                        bg-gray-100
                                    "

                                >


                                    <img

                                        src={
                                            URL.createObjectURL(
                                                image
                                            )
                                        }

                                        alt="preview"

                                        className="
                                            w-full
                                            h-32
                                            object-cover
                                        "

                                    />



                                    <button

                                        type="button"

                                        onClick={()=>
                                            removeImage(index)
                                        }

                                        className="
                                            absolute
                                            top-2
                                            right-2
                                            w-7
                                            h-7
                                            rounded-full
                                            bg-red-500
                                            text-white
                                            flex
                                            items-center
                                            justify-center
                                        "

                                    >

                                        <FaTimes size={12}/>

                                    </button>



                                </div>


                            ))
                        }


                    </div>


                )
            }





            {
                formData.images.length >= 5 && (

                    <div className="
                        text-sm
                        text-orange-600
                        bg-orange-50
                        p-3
                        rounded-lg
                    ">

                        Maximum 5 images allowed.

                    </div>

                )
            }



        </div>

    );

};


export default MediaUpload;