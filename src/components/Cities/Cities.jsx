import React, {useState} from 'react'


const Cities =(props)=>{


const [count, setCount]=useState(0)

const setNextPhoto=()=>{
    setCount(count+1)
}

const setPrewPhoto=()=>{
    setCount(count-1)
}

    return(
        <div>
         <img src={props.photosColection.cities [count]} /> 
         <div>
         <button onClick={setPrewPhoto} disabled={count==0} >&#8656;</button>
         </div>
         <div>
         <button onClick={setNextPhoto} disabled={count==props.photosColection.cities.length -2}>&#8658;</button>
         </div>
         <center>
        
    </center>
        </div>
    )
}

export default  Cities