import { useState } from "react";

function Calculator(){
    const [calc,setcalc] = useState("");

    const clearall =() => {
        setcalc("");
    };

    const calculate = () => {
      let sum=0;
      let num= "" ;
      let operator="+";
      for(let i=0; i<=calc.length; i++){
        let ch = (i === calc.length) ? "" : calc[i]; 
        if(ch=="+" || ch=="-" || ch=="*" || ch=="/" || i == calc.length ){
          num = Number(num);
            if (operator == "+") {
                sum = sum + num;
            }
            else if (operator == "-") {
                sum = sum - num;
            }
            else if (operator == "*") {
                sum = sum * num;
            }
            else if (operator == "/") {
                sum = sum / num;
            }
            else if (operator="%"){
              sum = sum + 0;
            }            
          operator=ch;
          num="";
        }
        else if (ch=="%"){
           num = Number(num);

          if (operator == "+") {
            sum = sum + (sum * num / 100);
          }
          else if (operator == "-") {
            sum = sum - (sum * num / 100);
          }
          else if (operator == "*") {
            sum = sum * ( num / 100);
          }
          else if (operator == "/") {
            sum = sum / ( num / 100);
          }
          operator=ch;
          num="";
        }
        else{
           num = num + ch ;
        }       
      }      
     setcalc(sum.toString());
    };

    const deletelast = () => {
        setcalc(calc.slice(0,-1))
    };

    const changes = (symbol) => {
          if("+-*/%".includes(calc[calc.length - 1])){
           setcalc(calc.slice(0,-1)+symbol);
          } 
          else{
            setcalc(calc+symbol);
          }
      }
     
    
   

    return(
        <div>
            <div className="flex items-center justify-center min-h-screen bg-slate-200">
         <div className="w-80 bg-gray-900 p-5 rounded-2xl shadow-2xl">

        <input
          type="text"
          
         value={calc}
          readOnly
          className="w-full h-16 text-right text-3xl px-4 mb-4 rounded bg-white"
        />

        <div className="grid grid-cols-4 gap-3">

          <button className="h-14 rounded-lg bg-orange-500 text-white text-xl hover:bg-orange-600" onClick={clearall}>
            AC
          </button>

          <button className="h-14 rounded-lg bg-orange-500 text-white text-xl hover:bg-orange-600" onClick={deletelast} >
            DEL
          </button>

          <button className="h-14 rounded-lg bg-orange-500 text-white text-xl hover:bg-orange-600" onClick={() => changes("%")}>
            %
          </button>

          <button className="h-14 rounded-lg bg-orange-500 text-white text-xl hover:bg-orange-600" onClick={() => changes("/")}>
            ÷
          </button>

          <button className="h-14 rounded-lg bg-gray-700 text-white text-xl hover:bg-gray-600" onClick={()=>setcalc(calc+"7")}>
            7
          </button>

          <button className="h-14 rounded-lg bg-gray-700 text-white text-xl hover:bg-gray-600" onClick={()=>setcalc(calc+"8")}>
            8
          </button>

          <button className="h-14 rounded-lg bg-gray-700 text-white text-xl hover:bg-gray-600" onClick={()=>setcalc(calc+"9")}>
            9
          </button>

          <button className="h-14 rounded-lg bg-orange-500 text-white text-xl hover:bg-orange-600"  onClick={() => changes("*")}>
            x
          </button>

          <button className="h-14 rounded-lg bg-gray-700 text-white text-xl hover:bg-gray-600" onClick={()=>setcalc(calc+"4")}>
            4
          </button>

          <button className="h-14 rounded-lg bg-gray-700 text-white text-xl hover:bg-gray-600" onClick={()=>setcalc(calc+"5")}>
            5
          </button>

          <button className="h-14 rounded-lg bg-gray-700 text-white text-xl hover:bg-gray-600" onClick={()=>setcalc(calc+"6")}>
            6
          </button>

          <button className="h-14 rounded-lg bg-orange-500 text-white text-xl hover:bg-orange-600" onClick={() => changes("-")}>
            -
          </button>

          <button className="h-14 rounded-lg bg-gray-700 text-white text-xl hover:bg-gray-600" onClick={()=>setcalc(calc+"1")}>
            1
          </button>

          <button className="h-14 rounded-lg bg-gray-700 text-white text-xl hover:bg-gray-600" onClick={()=>setcalc(calc+"2")}>
            2
          </button>

          <button className="h-14 rounded-lg bg-gray-700 text-white text-xl hover:bg-gray-600" onClick={()=>setcalc(calc+"3")}>
            3
          </button>

          <button className="h-14 rounded-lg bg-orange-500 text-white text-xl hover:bg-orange-600"  onClick={() => changes("+")}>
            +
          </button>

          <button className="col-span-2 h-14 rounded-lg bg-gray-700 text-white text-xl hover:bg-gray-600" onClick={()=>setcalc(calc+"0")}>
            0
          </button>

          <button className="h-14 rounded-lg bg-gray-700 text-white text-xl hover:bg-gray-600" onClick={()=>setcalc(calc+".")}>
            .
          </button>

          <button className="h-14 rounded-lg bg-green-500 text-white text-xl hover:bg-green-600" onClick={calculate}>
            =
          </button>

        </div>
      </div>
    </div> 
        </div>
  
    );
}
export default Calculator;