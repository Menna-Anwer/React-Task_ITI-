
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { FavAction } from './Store/Action/FavAction';

function FavoritMovies() {
    const favMovies = useSelector((state)=> state.favList.favMovie)
    console.log(favMovies);
   
    return(
        <div className="container">
        <div className="row">
          {favMovies.map((item) => (
            <div className="col-4">
                <div key={item.id} className="card cardMovie "
                style={{ width: "250px" }} >
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-text">{item.title} </h5>
                </div>
                <Link to={`/movie_details/${item.id}`}>
                  <button className="btn my-3" style={{ backgroundColor: " pink" }}>
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
export default FavoritMovies 