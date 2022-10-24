import {combineReducers} from "redux"
import bgReducer from './BgReducer';
import langReducer from './LangReduce';
import movieReducer from './MovieReducer';
import favMovieReducer from './FavReducer';


export default combineReducers ({
    bgColor : bgReducer,
    movie:movieReducer, 
    favList:favMovieReducer,
    language : langReducer
})