
const INTIAL_VALUE ={
  favMovie:[]
}
  let newFav ;
export default function favMovieReducer (state=INTIAL_VALUE,action){
 console.log("55",action.payload);
    if (action.payload !== undefined){
    if(state.favMovie.includes(action.payload)){ 
        newFav = state.favMovie.filter(el => el.id !== action.payload.id)
        console.log(newFav);
    }else {
        newFav = [...state.favMovie]
        newFav.push(action.payload)
        console.log(newFav);
    }
 }
    switch (action.type) { 
        case "FAV_MOVIE":
            return{
            ...state,
            favMovie:newFav
            }     
        default:
            return state;
    }
}