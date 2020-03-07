import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Animals from './components/Animals/Animals';
import { Route } from 'react-router-dom';
import Cities from './components/Cities/Cities';
import Nature from './components/Nature/Nature';
import Cars from './components/Cars/Cars';
import Girls from './components/Cars/Girls/Girls';





const App =(props)=>{
  return(
    <div className="slider">
      
<Menu/>

<Route path='/animals' render={()=><Animals photosColection={props.photosColection}/>}/>
<Route path='/cities' render={()=><Cities photosColection={props.photosColection}/>}/>
<Route path ='/nature' render ={()=><Nature photosColection={props.photosColection}/>}/>
<Route path= '/cars' render ={()=><Cars photosColection={props.photosColection}/>}/>
<Route path= '/girls' render ={()=><Girls photosColection={props.photosColection}/>}/>

   
    </div>
  )
}

export default App;
