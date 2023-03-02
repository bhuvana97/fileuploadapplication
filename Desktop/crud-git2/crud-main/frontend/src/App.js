import { useState } from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import {Routes,Route} from "react-router-dom"
import About from "./components/About";
import EditUser from "./components/EditUser";
import ViewbyId from "./components/ViewbyId";

const App = () => {

return (
  <div>
<NavbarComponent/>
<Routes>
<Route path="/view/:id" element={<ViewbyId/>} />

<Route path="/allstud" element={<Home/>} />
<Route path="/addstud" element={<AddUser />}/>
<Route path="/" element={<About />} />
<Route path="/edit/:id" element={<EditUser/>}/>
</Routes>
{/* <Home/>
<AddUser/> */}
  </div>
 
  );
};
export default App;