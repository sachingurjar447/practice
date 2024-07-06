
import './App.css';
import Home from './component/homecomponent/home';
import Nav from './component/naavcomponent/naav';
import { Route ,Routes } from 'react-router-dom';
import Register from './component/registercomponent/register';
import Apk from './component/apkcomponent/apk'
function App() {
  return (
   <>
    
   <Nav/>
   <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/register' element={<Register/>}></Route>
   
   </Routes>
   <Apk/>
   </>
  );
}

export default App;
