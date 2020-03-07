import React,{useState} from 'react'



const Cars =(props)=>{


    const [count, setCount]=useState(0)
    
    const setNextPhoto=()=>{
        setCount(count+1)
    }
    
    const setPrewPhoto=()=>{
        setCount(count-1)
    }
    
        return(
            <div>
             <img src={props.photosColection.cars [count]} /> 
             <div>
             <button onClick={setPrewPhoto} disabled={count==0} >&#8656;</button>
             </div>
             <div>
             <button onClick={setNextPhoto} disabled={count==props.photosColection.cars.length -2}>&#8658;</button>
             </div>
             <center>
            
        </center>
            </div>
        )
    }
    
    export default  Cars