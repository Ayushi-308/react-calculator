import { Link } from "react-router-dom";

function Header() {
  return (
    <header >
       <nav className=' absolute ml-50 mt-3'>
            <Link to="/" className=" px-3 py-2 rounded  ">Home</Link> 
            <Link to="/calculator" className=" px-3 py-2 rounded  ">Calculator</Link> 
            <Link to="/pictask" className="px-3 py-2 rounded  ">Image Slider </Link> 
            <Link to="/bmi" className=" px-3 py-2 rounded ">BMI Calculator</Link>
            <Link to="/userdata" className=" px-3 py-2 rounded ">User Data</Link>
        </nav>
    </header>
  );
}

export default Header;