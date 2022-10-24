import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { axiosInstance } from './../NetWork/BaseUrl';


function MovieDetails() {
 const param = useParams()
  const [cartMovie,setCartMovie ] = useState({})
  console.log(param.id);
    useEffect(()=>{
      axiosInstance.get(`/movie/${param.id}?api_key=18ebb55ec02cf2ed6553ddd53661fc5f`
      // , {
          // params:{
          //     api_key: "18ebb55ec02cf2ed6553ddd53661fc5f",
          // }
      // }
      )
      .then((response) => setCartMovie(response.data))
      .catch((err) => console.log(err.message))
  },[])

  return (
    <div className="mt-5 container"   style={{height:"100vh"}}>
      <div  key={cartMovie.id} className="mb-3 col-lg-8 col-md-10 col-sm-11" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={`https://image.tmdb.org/t/p/w500${cartMovie.poster_path}`} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title mx-5">{cartMovie.title}</h5>
              <p className="card-text mx-5">
                {cartMovie.overview}
              </p>
              <p className="card-text mx-5">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
