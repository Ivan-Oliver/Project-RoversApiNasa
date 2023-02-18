import { getToken } from "./storage"

export type listNasa = {
    

}


export const fetchData = async () => {
    let mars: listNasa[] = getData()

    if (!mars || mars.length === 0) {
    try {
        const response = await fetch('/http://localhost:8000/mars')
        console.log({ response})
        const data = await response.json()
        console.log({ data })
        const results: listNasa[] = data.results

        if (results && results.length >0){
            setData(results)
            mars = results
        }
    }
    catch (error) {
        console.log('Hubo un error')
    }
}
return mars
}