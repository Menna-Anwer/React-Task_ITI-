

const INTIAL_VALUE ={

 color:"light"
}

export default function bgReducer (state=INTIAL_VALUE,action){
     switch (action.type) { 
        case "BACKGROUND":
            return{
            ...state,
            color:action.payload
            }     
        default:
          return state;
     }
}
