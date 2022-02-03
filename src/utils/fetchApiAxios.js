import axios from "axios"

export const baseUrl="https://bayut.p.rapidapi.com"


export const fetchApiAxios=async(url) => {
    const {data}=await axios.get((url),{
        headers:{
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '6d8a0640a6msh6e404dee8081791p117570jsn3a75cab7c683'
        }
    })

    return data

}