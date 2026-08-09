import api from "@/lib/axios";



/*
|--------------------------------------------------------------------------
| Get Approved Rescue Teams
|--------------------------------------------------------------------------
*/

export const getApprovedRescueTeams = async () => {

    const res = await api.get(
        "/admin/emergency-reports/rescue-teams"
    );


    return res.data;

};



/*
|--------------------------------------------------------------------------
| Assign Rescue Team
|--------------------------------------------------------------------------
*/

export const assignRescueTeam = async (
    reportId,
    rescueId
) => {

    const res = await api.patch(

        `/admin/emergency-reports/${reportId}/assign`,

        {
            rescueId
        }

    );


    return res.data;

};