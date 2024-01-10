import { useState, useEffect } from "react";
import axios from 'axios'

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '4c9ffc097bmsh6f47b60f9525dcep163375jsndd6b840984b1',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };
    const fetchData = async () => {
        setIsLoading(true)

        try{
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
        }catch(error){
            setError(error)
            alert("there is an error")
        }finally{
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    },[])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    console.log(options)
    return { data, isLoading, error, refetch}
}

export default useFetch