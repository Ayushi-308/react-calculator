import './App.css'
import Allhome from './pages/allhome';
import Calculator from './pages/calculator';
import Pictask from './pages/pictask';
import BmiCalculator from './pages/bmicalculator';
import { Routes, Route } from "react-router-dom";
import MainLayout from './pages/mainlayout';
import UserData from './pages/userdata';
import ParticularUser from './pages/particularuser';
import Login from './pages/userlogin';
import Profile from './pages/profilepage';
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<Allhome />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/pictask" element={<Pictask />} />
        <Route path="/bmi" element={<BmiCalculator />} />
        <Route path="/userdata" element={<UserData/>} />
        <Route path="/userdata/:id" element={<ParticularUser/>} />
        <Route path="/userdata/login" element={<Login/>} />
        <Route path="/userdata/login/profile" element={<Profile/>} />
        </Route>
     </Routes>
     
    
  );
}

export default App;
