

const INTIAL_VALUE ={

    list:[]
   }
   
   export default function movieReducer (state=INTIAL_VALUE,action){
        switch (action.type) { 
           case "GET_MOVIES":
               return{
               ...state,
               list:action.payload
               }     
           default:
             return state;
        }
   }