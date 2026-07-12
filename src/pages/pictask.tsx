import { useState } from "react";
function Pictask() {
    const pics =["public/landscape1.jpeg" , "public/landscape2.jpeg" , "public/landscape3.jpeg" , "public/landscape4.jpeg" , "public/landscape5.jpeg"];
    const [counts , setcounts ] =useState(1);
    const show = () => {
        let countnum = counts;
        let potrait ="";
        if(countnum == 1){
          potrait = pics[0] ;
        }
        else if (countnum ==2){
          potrait = pics[1];
        }
        else if (countnum ==3){
          potrait = pics[2];
        }
        else if (countnum ==4){
          potrait = pics[3];
        }
        else if (countnum==5){
          potrait = pics[4];
        }
        else{
            potrait = "error";
        }
        return potrait;
    };
    return(
        <div>
            <div className="flex items-center justify-center min-h-screen bg-slate-200">
                <img className="w-200 h-150" src={show()}></img>
                <button className="py-2 px-3 ml-20 rounded-lg bg-orange-500 text-white text-xl hover:bg-green-600" onClick={() => setcounts(counts-1) } disabled={counts<=1} >Previous Image </button>
                <button className="py-2ss px-3 ml-20 rounded-lg bg-blue-500 text-white text-xl hover:bg-green-600" onClick={() => setcounts(counts+1) } disabled={counts>=5}>Next image </button>
            </div>
        </div>
    );
}
export default Pictask;