import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch (url) {
    const [data, setData] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url)
                setData((response.data.data))
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [url], [])
    
    return data
}