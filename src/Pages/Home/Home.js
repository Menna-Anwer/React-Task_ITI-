import "./Home.css";
// import axios from "axios";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import {useSelector , useDispatch} from "react-redux";
import ChangbgColor from "../bgColor"
// import { axiosInstance } from './../NetWork/BaseUrl';
import { getMoviesList } from './../Store/Action/MovieAction';
import { Langcontext } from './../../Context/LangContext';
import { FavAction } from './../Store/Action/FavAction';

function Home() {
  // const [movie, setMovie] = useState([]);

  //context

  const {langContext,setLangcontext} = useContext(Langcontext)


  // const changeBG = useSelector((state)=> state.bgColor.color)
 //thuk
  const movie = useSelector((state)=> state.movie.list)

  const dispatch = useDispatch()
  // const addToFav = (e) =>{
  //   dispatch(FavAction(e))
  //   console.log(e.id);
  // }
  
  useEffect(() => {
   
     dispatch(getMoviesList())

    // axiosInstance.get("/movie/popular", {
    //     params: {
    //       api_key: "18ebb55ec02cf2ed6553ddd53661fc5f",
    //     },
    //   })

    //   .then((response) => setMovie(response.data.results))
    //   .catch((err) => console.log(err.message));
     
  }, []);

  return (
    <div className="container">
       <ChangbgColor/>
       <p>Language : {langContext}</p>
        <button className=" btn btn-info" onClick={()=>setLangcontext(langContext==="Ar" ? "En" : "Ar") }></button>
      <h1>Home</h1>
      {/* <p>{language}</p> */}
      <div className="row">
        {movie.map((movie, index) => {
          return (
            <div  key={movie.id}  className="col-lg-3 col-md-5 col-sm-10 my-4">
              <img
                src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-text my-3">{movie.title} </h5>
              </div>
              <div className="d-flex justify-content-between align-items-center ">
                  <Link to={`/movie_details/${movie.id}`}>
                    <button className="btn my-3 " style={{ backgroundColor: " pink" }}>
                      Show Details
                    </button>
                  </Link>
                  <span ><i class="fa-regular fa-star"></i></span>

              </div>
             
            </div>
        
          );
        })}
      </div>
    </div>
  );
}
export default Home;
