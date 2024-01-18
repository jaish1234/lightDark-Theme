// Api calling :-  getapiCalling
// step:0 mokeapi
// step:1 ->           npm install axios         or        npm i axios   //

import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function ApiCall() {

    let [apiData, setApiData] = useState([])
    let [bClick, setBClick] = useState(0)

    async function getApiCall() {
        try {
            console.log("first line of try")
            const rawData = await axios.get("https://641926f375be53f451ede258.mockapi.io/know")
            const mainData = rawData.data
            console.log("last line of try")
            return mainData
        } catch (error) {
            return [{ error }]
        }
    }

    useEffect(() => {
        console.log("first line of useeffect")
        getApiCall().then((y) => {
            setApiData(y)
        })
        // setApiData(myData)
        console.log("apiData == ", apiData);
    }, [bClick])

    return (
        <>
            <button onClick={() => {
                setBClick(bClick + 1)
            }}>
                click me
            </button>
            <h1>this is api data function component</h1>

            {
                (apiData !== []) ? <div>
                    {
                        apiData.map((value, index) => {
                            const date = new Date(value.createdAt)
                            console.log(date);
                            return (
                                <div key={index} style={{
                                    display: "flex",
                                    marginLeft: "100px",
                                    marginTop: "20px",
                                    border: "2px solid",
                                    width: "400px",
                                }}>
                                    <div>
                                        <img src={value.avatar} alt='user image' height={200}></img>
                                    </div>
                                    <div style={{
                                        marginTop: "20px",
                                        marginLeft: "10px"
                                    }}>
                                        <h5>id :- {value.id}</h5>
                                        <h5>name :- {value.name}</h5>
                                        <h5>date :- {date.toDateString()}</h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> : <h1>empty it's loading</h1>
            }

        </>
    )
}

export default ApiCall