import axios from 'axios'
import { useSnackBar } from '../providers/SnackBarProvider'

const useAxios = () => {
    const snack = useSnackBar()
    axios.interceptors.request.use(data => {
        console.log('In useAxios request interceptors')
        return Promise.resolve(data)
    }, null)

    axios.interceptors.response.use(data => {
        console.log('In useAxios response interceptors RESOLVE')
        return Promise.resolve(data)
    }, error => {
        const expectedError = error.response && error.response.status >= 400
        if(expectedError) snack("error",error.message)
        console.log('in useAxios response interceptors ERROR')
        return Promise.reject(error)
    })
}

export default useAxios