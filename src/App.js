
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import { useEffect, useState } from 'react';
import ImageExpanded from './Image/ImageExpanded';
import { ScrollProvider } from './components/ScrollProvider';

function App() {

  const[homeState,setHomeState]=useState(true);

 useEffect(()=>{
    const timer= setTimeout(()=>{
    setHomeState(false)

    return ()=>clearTimeout(timer)

  },3000)
 },[])

  return (
    <div className="App">
    <ScrollProvider> <Routes>
      <Route path='/' element={homeState?<ImageExpanded/>:<Home/>}/>
     </Routes></ScrollProvider>
    </div>
  );
}

export default App;
