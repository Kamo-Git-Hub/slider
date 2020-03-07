import React, {useState} from 'react'
import  "./animals.module.css"

const Animals =(props)=>{


const [count, setCount]=useState(0)

const [timer, setTimer] =useState(0)



const setNextPhoto=()=>{
    setCount(count+1)
}




const setPrewPhoto=()=>{
    setCount(count-1)
}





    return(
        <div>
         <img src={props.photosColection.animals [count]} /> 
         <div>
         <button  onClick={setPrewPhoto} disabled={count==0 } >&#8656;</button>
         </div>
         <div>
         <button  onClick={setNextPhoto} disabled={count==props.photosColection.animals.length -2}>&#8658;</button>
         </div>
       
        </div>
    )
}

export default  Animals