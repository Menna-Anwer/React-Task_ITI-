
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch , Route} from "react-router-dom";

import Home from "./Pages/Home/Home"
import Nav from './Pages/NavBar';
import NotFound from './Pages/NotFound';
import Register from "./Pages/Register"
import MovieDetails from "./Pages/Movie/Movie_Details"
import { useSelector } from 'react-redux';
import  Results from "./Pages/sechResults";
import { Langcontext } from './Context/LangContext';
import { useState } from 'react';
import FavoritMovies from './Pages/FavMovies';


function App() {
  const changeBG = useSelector((state)=> state.bgColor.color)
   
  const [langContext,setLangcontext] = useState("en")

  console.log(changeBG);
  return (
    // className={changeBG === "dark"? "bg-dark":"bg-light"}
    <div  className={changeBG === "dark"? "dark":"light"} >
      <Langcontext.Provider value={{langContext , setLangcontext}}>
        <BrowserRouter>
          <Nav/>
            <Switch>
            <Route path={"/register"} exact component={Register}/>
            <Route path={"/"} exact component={Home}/>
              <Route path={"/home"} exact component={Home}/>
              <Route path={"/search"} exact component={Results}/>
              <Route path={"/favorit"} exact component={FavoritMovies}/> 
              <Route path={"/movie_details/:id"}exact component={MovieDetails}/>
              <Route path={"*"} component={NotFound}/>
            </Switch>
        </BrowserRouter>
      </Langcontext.Provider> 
    </div>
  );
}

export default App;
