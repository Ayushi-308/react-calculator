import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link , useNavigate} from "react-router-dom";
function Login(){
    const [username,setusername]=useState("");
    const [userPassword,setuserPassword]=useState("");
    const {  } = useParams();
    const navigate = useNavigate();
    const login = () => {
        fetch('https://dummyjson.com/auth/login',{
            method:'POST',
            headers:{'Content-Type' : 'application/json'},
            body:JSON.stringify({
                username:username,
                password:userPassword,
                expiresInMins: 30,
            }),
            credentials: 'include'
        })
        .then(res => res.json())
        .then((data) => {console.log(data);
            if(data.accessToken){
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            navigate("/userdata/login/profile"); 
            }
            else{
                alert(data.message);
            }
        });
        
    }
   
    return(
        <div>
            <div className="min-h-screen bg-gray-100 flex justify-center items-center">
               <div className="bg-white w-[400px] p-8 rounded-xl shadow-xl">
                   <h1 className="text-3xl font-bold text-center mb-8">Login</h1>

                   <div className="mb-5">
                       <label className="block mb-2 font-semibold">Username</label>
                       <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setusername(e.target.value)} className="w-full border rounded-lg p-3 outline-none focus:border-blue-500"/>
                   </div>

                   <div className="mb-6">
                       <label className="block mb-2 font-semibold">Password</label>
                       <input type="password" placeholder="Enter Password" value={userPassword} onChange={(e) => setuserPassword(e.target.value)} className="w-full border rounded-lg p-3 outline-none focus:border-blue-500"/>
                   </div>
                   <div className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 text-center">
                   <Link to="/userdata/login/profile" onClick={(e)=>{e.preventDefault();login()}}  >Login</Link>
                   </div>
                    <p className="text-center mt-6">Don't have an account?{" "}<span className="text-blue-600 cursor-pointer hover:underline">Sign Up</span></p>

                </div>
           </div>
       </div>
    );
}
export default Login ;