

const INTIAL_VALUE ={
    lang:"en",
   }
   
   export default function langReducer (state=INTIAL_VALUE,action){
        switch (action.type) {
           case "CHANGE-LUNG":
              return{
               ...state,
               lang:action.payload
              } 
             
           default:
             return state;
        }
   }