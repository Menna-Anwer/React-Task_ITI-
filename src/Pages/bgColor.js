
import { useDispatch, useSelector } from 'react-redux';
import {changeThem} from "./Store/Action/BgAction"

const ChangbgColor = ()=> {
    const changeBG = useSelector((state)=> state.bgColor.color)
    const dispatch = useDispatch()

    const handleBgColor =()=>{
        dispatch(changeThem(changeBG === "dark"?"light":"dark"))
    }
    return(
        <>
        <button style={{width :"24px",height: "24px", border: "0",borderRadius: "50%"}} className={changeBG === "light"? "bg-dark":"bg-light"}  onClick={()=>handleBgColor()}>

        </button> <span>Them</span>
        </>
        
    )
    // width: 24px;
    // height: 23px;
    // /* border: 0; 
    // border-radius: 50%;
}

export default ChangbgColor