export { request }
import { urlApi } from "@/main";
const request = async (apiEndpoint, method, data) => {
    try {

        const token = localStorage.getItem('access_token')

        const headers = {
            'Content-Type': 'application/json'
        }

        if (token) {
            headers['Authorization'] = `Bearer ${token}`
        }
        
        if(data && method === 'GET'){
            data == null
        }

        const response = await fetch(`${urlApi}${apiEndpoint}`, {
            method: method,
            headers: headers,
            body: JSON.stringify(data)
        })

        if(!response.ok){
            console.error(response.statusText)
        }
        
        return response
    } catch (error) {
        console.error(error)
    }
}
