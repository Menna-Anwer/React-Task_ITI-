// import axios from "axios";
import {  useHistory } from "react-router-dom";
import {  useState } from "react";


function Search() {
    const [search,setSearch] = useState("")
     const history =  useHistory()
    
    
   const getSearch =(e)=>{
    e.preventDefault();
    history.push(`/search?q=${search}`)
    setSearch("")
   }
   const handleChange =(e)=>{
     setSearch(e.target.value)
    console.log(e.target.value);
    }
   return(
      <div>
          <form className="d-flex" onSubmit={(e)=>getSearch(e)}>
            <input className="form-control me-2"onChange={(e)=>handleChange(e)} type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        
      </div>
   );
}

export default Search;