import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import {Routes,Route} from 'react-router-dom'

import Adddd from './components/Adddd';
import Vieww from './components/Vieww';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/><br/>
      <Routes>
      <Route path="/add" element={<Adddd data={{ename:"",eage:"",eposition:"",esalary:""}} method="post"/>}/>
      <Route path='/v' element={<Vieww/>}/>
      </Routes>



    </div>
  );
}

export default App;
