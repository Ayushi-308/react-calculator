import { useState } from "react";
function BmiCalculator (){
    const results =[ {category:"Result", color : "bg-green-600"},
        {category: "Underweight" , color:"bg-blue-600" },
        {category: "Normal weight", color: "bg-green-600" },
        {category: "Overweight" , color: "bg-yellow-600" },
        {category: "obese" , color: "bg-red-600" },
        {category:"Error" , color:"bg-red-800"}
                    
    ];
    const [age,setage]=useState("");
    const [height,setheight]=useState("");
    const [weight,setweight]=useState("");
    const [index, setindex] = useState(0);
    const [gender,setgender] = useState();
    const calculation =() =>
        {
            let h=0;
            let w=0;
            let bmi=0;
            let a=Number(age);
            
            h = Number(height);
            h =  h/100;
            w = Number(weight);
            bmi = w/(h*h);
            if((!h || !w || !a || !gender) || a>100 ){
                setindex(5)
            }
            else if (bmi<18.5)
            {
               setindex(1);
                
             }  
            else if ((18.5 <= bmi)&&(bmi <= 24.9)){
                setindex(2);
            }       
            else if ((25<=bmi)&&(bmi<=29.9)){
                setindex(3);
            }
            else if (bmi>=30){
                setindex(4);
            }
            else{
                setindex(5);
            }
            
        }
        const clearall = () => {
            setage("");
            setheight("");
            setweight("");
            setgender("");
            setindex(0);
        }

    return(
        <div>
            <div className="flex items-center justify-center min-h-screen bg-slate-200">
                <div className="w-80 h-128 bg-gray-400 p-5 rounded-2xl shadow-2xl">
                    <div className="h-13 w-full text-center mb-4 py-3 px-4 rounded-lg bg-indigo-800 text-white text-lg "> BMI Calculator </div>
                    <div className="flex gap-5">
                        <div className="h-13 py-3 px-4 rounded-lg bg-orange-500 text-white text-lg "> AGE </div>
                        <input type="text" value={age} onChange={(e) => setage(e.target.value)} inputMode="numeric" className="w-full h-13 text-left text-xl px-4 mb-4 rounded bg-white hover:bg-gray-200 shadow-md"></input>                       
                    </div>
                    <div className="flex gap-5">
                        <div className="h-13 py-3 px-4 rounded-lg bg-orange-500 text-white text-xl">GENDER</div>
                        <div className="w-full h-16 text-left text-lg px-4 mb-4 rounded bg-white">
                           <label><input type="radio" value="male" checked={gender === "male"} onChange={(e) => setgender(e.target.value)}></input>Male</label>
                           <br></br>
                           <label><input type="radio" value="female" checked={gender === "female"} onChange={(e) => setgender(e.target.value)}></input>Female</label>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="h-13 py-3 px-4 rounded-lg bg-orange-500 text-white text-xl "> HEIGHT </div>
                        <input type="text" inputMode="numeric" value={height} onChange={(e) => setheight(e.target.value)} placeholder="in cm" className="w-full h-13 text-left text-xl px-4 mb-4 rounded bg-white hover:bg-gray-200 shadow-md"></input>                       
                    </div>
                    <div className="flex gap-5">
                        <div className="h-13 py-3 px-4 rounded-lg bg-orange-500 text-white text-xl "> WEIGHT </div>
                        <input type="text" inputMode="numeric" value={weight} onChange={(e) => setweight(e.target.value)} placeholder="in Kg" className="w-full h-13 text-left text-xl px-4 mb-4 rounded bg-white hover:bg-gray-200 shagow-lg"></input>                    
                    </div>
                    <div className="flex gap-5 justify-center mb-4" >
                        <button className="h-13 py-3 px-4 rounded-lg bg-green-600 hover:bg-green-800 text-white text-xl " onClick={calculation}> CALCULATE </button>
                        <button className="h-13 py-3 px-4 rounded-lg bg-gray-600 hover:bg-gray-800 text-white text-xl " onClick={clearall}> CLEAR </button>
                    </div>
                    <div className={` h-13 w-full text-center mb-4 py-3 px-4 rounded-lg text-white text-2xl ${results[index].color} `}> {results[index].category}  </div>
                </div> 
            </div>
        </div>
    );
}
export default BmiCalculator;