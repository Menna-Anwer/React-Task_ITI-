
import { axiosInstance } from './../../NetWork/BaseUrl';



export const getMoviesList = () => (dispatch)=>{
    return axiosInstance.get("/movie/popular?api_key=18ebb55ec02cf2ed6553ddd53661fc5f")
    .then((res)=> dispatch({
        type:"GET_MOVIES",
        payload: res.data.results
    }))
    .catch((err)=>console.log(err))
}