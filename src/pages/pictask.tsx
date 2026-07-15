import { useEffect, useState } from "react";

function Pictask() {
    const pics =["public/landscape1.jpeg" , "public/landscape2.jpeg" , "public/landscape3.jpeg" , "public/landscape4.jpeg" , "public/landscape5.jpeg"];
    const [counts , setcounts ] =useState(1);
    const[users,setusers]=useState();
    useEffect( () => {
        console.log("running");
       fetch('https://dummyjson.com/users')
         .then(res => res.json())
        .then((data)=>{setusers(data)});
        },
        [] );
    console.log(users,"userdata");
    return(
        <div className=" min-h-screen bg-slate-200 pt-20 pb-20">
           <div className="justify-self-center ">
                <img className="w-250 h-150" src={pics[counts-1]}></img>
                <div className="mt-5 flex ml-40">
                   <button className="py-2 px-3 ml-20 rounded-lg bg-orange-500 text-white text-xl hover:bg-green-600" onClick={() => setcounts(counts-1) } disabled={counts<=1} >Previous Image </button>
                   <div className="py-2 px-4 ml-20  rounded-lg bg-yellow-500  text-xl "> {counts} </div>
                   <button className="py-2 px-3 ml-20 rounded-lg bg-blue-500 text-white text-xl hover:bg-green-600" onClick={() => setcounts(counts+1) } disabled={counts>=pics.length}>Next image </button>
                </div>
           </div>
        </div>
    );
}
export default Pictask;