import api from "./axios";



export const createEmergencyReport = async(data)=>{


    const response = await api.post(

        "/emergency/create",

        data,

        {
            headers:{
                "Content-Type":
                "multipart/form-data"
            }
        }

    );


    return response.data;


};







export const getMyEmergencyReports = async()=>{


    const response = await api.get(

        "/emergency/my-reports"

    );


    return response.data;


};







export const getEmergencyReportById = async(id)=>{


    const response = await api.get(

        `/api/emergency/${id}`

    );


    return response.data;


};