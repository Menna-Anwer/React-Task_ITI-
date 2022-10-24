import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
// import axios from "axios";
import { axiosInstance } from './NetWork/BaseUrl';

function Results() {
  const [movie, setMovie] = useState([]);
  const { search } = useLocation();
  const query = React.useMemo(() => new URLSearchParams(search), [search]).get("q" );
  console.log(query);
  useEffect(() => {
    axiosInstance.get(`/search/movie?api_key=18ebb55ec02cf2ed6553ddd53661fc5f&query=${query} `)
      .then((response) => setMovie(response.data.results))
      .catch((err) => console.log(err.message));
  }, []);
  console.log(movie);
  return (
    <div className="container">
      <div className="row">
        {movie.map((item) => (
          <div className="col-4">
              <div key={item.id} 
              style={{ width: "250px" }} >
              <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-text">{item.title} </h5>
              </div>
              <Link to={`/movie_details/${item.id}`}>
                <button
                  className="btn my-3"
                  style={{ backgroundColor: " pink" }}
                >
                  Show Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Results;
