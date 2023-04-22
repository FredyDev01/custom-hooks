import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [state, setstate] = useState({data: null, isLoading: true, err: null})    

    const getFetch = async()=> {
        setstate({...state, isLoading: true})
        const resp = await fetch(url)
        const {sprites: {front_default : foto}, forms: [{name: nombre}]} = await resp.json()        
        setstate({data: {nombre, foto}, isLoading: false, err: null})
    }
    
    useEffect(() => {
        getFetch()
    }, [url])
    

    return {
        data: state.data,
        isLoading: state.isLoading,
        err: state.err
    }
}
