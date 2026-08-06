import fs from "fs";
import path from "path";



const deleteFiles = (files)=>{


    if(!files || files.length === 0){
        return;
    }



    files.forEach((file)=>{


        const filePath = path.join(
            process.cwd(),
            "src",
            "uploads",
            file.filename
        );



        fs.unlink(
            filePath,
            (error)=>{


                if(error){

                    console.log(
                        "Failed to delete file:",
                        file.filename
                    );

                }


            }
        );


    });


};



export default deleteFiles;