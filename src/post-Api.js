// post Api calling

import axios from "axios"

async function apiCalled() {
    try {
        let dt =  JSON.stringify({
            user_firstname: "Savan",
            user_lastname: "Italiya",
            user_email: "tirthkakdiya@gmail.comn",
            password: "savan343",
            confirmpasword: "savan343"
        })
        const rawData = await axios.post("http://192.168.1.67:4000/v2/users", dt, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const mainData = rawData.data
        console.log("mainData == ", mainData);
        return mainData
    } catch (error) {
        console.log("error == ", error);
        return error
    }
}

const apiData = await apiCalled()


console.log("rawData == ", apiData.data);
