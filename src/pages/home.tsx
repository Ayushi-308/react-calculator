import { useState } from "react";
function Home() {
  const data=[
    {name:"xyz",image:"public/image1.png", description:"product",varients:["10mg","20mg"],price:10,comapare_price:15,borderhover:"border-orange-500"},
    {name:"abc", image:"public/image2.png", description:" for good health",varients:["10mg","20mg"],price:20,comapare_price:35 , borderhover:"border-blue-500"},
    {name:"xyz",image:"public/image3.png", description:"support tissue repair",varients:["10mg","20mg"],price:10,comapare_price:15 , borderhover:"border-purple-500"},
    {name:"abc", image:"public/image4.png", description:" for good health",varients:["10mg","20mg"],price:20,comapare_price:35 , borderhover:"border-purple-500"},
    {name:"xyz",image:"public/image5.png", description:"product",varients:["10mg","20mg"],price:10,comapare_price:15 , border_hover:"border-orange-500"},
    {name:"abc",image:"public/image6.png", description:"support tissue repair",varients:["10mg","20mg"],price:20,comapare_price:35 , borderhover:"border-blue-500"}
]
 
  const [count,setcount] = useState(0);

  return (
     <div >
       <div className=" mt-19 mx-16 " >
          <p className="text-orange-400 text-sm font-bold" >OUR PEPTIES</p>
          <h1 className="text-3xl font-bold">PREMIUM PEPTIDES FOR ADVANCED <span className="text-indigo-600">RESEARCH</span></h1>
           <div className="box-content w-120 mt-5">
               <p className="text-xs text-gray-600">High-quality, rigorously tested peptides for laboratory research and analytical use. Backed by science. Delivered with confidence.</p>
           </div>
           <div className='mt-5 flex justify-start gap-1'>
              <div className='rounded-full bg-orange-400 px-4 py-1.5 text-center'>
                 <p className='text-white text-base'>All Products</p>
               </div>
               <div className='border-1 border-gray-300 rounded-full px-4 py-1.5'>
                  <p className='text-base'>Other</p>
               </div>
          </div>      
       </div>
       <div className=" relative w-350 ml-16 mt-20 mb-16 grid grid-cols-3 gap-5 " >
          {data.map((item)=>(
            
              <div className='border-1 border-gray-400 hover:border-orange-500 rounded-lg flex justify-start'>
                <img className='w-50 h-50 rounded-l-lg' src={item.image}></img> 
                <div className=' h-40 w-40 ml-10 mt-7'>
                 <b>{item.name}</b>
                 <p className='text-xs text-gray-400 mt-1'>{item.description}</p>
                 <div className='border-1  border-gray-400 h-5 w-25 rounded-md mt-3 flex justify-center gap-1 '>
                   <img className='h-3 mt-1' src="public\Icon 1.svg" ></img>
                    <p className='text-purple-600 text-xs font-semibold'>{item.varients[0]} | {item.varients[1]}</p>
                 </div>
                 <p className='mt-1'><b>{item.price}</b><sub className='line-through text-gray-400'>{item.comapare_price}</sub></p>
                 
                  
                 <div className='mt-2 p-2 rounded-lg test-xs text-blue-600 hover:text-white hover:bg-black font-bold flex'>
                   <button   onClick={() => setcount(count + 1)} >add  </button>
                   <button  onClick={() => setcount(count - 2)} disabled={count<=1} >subtract  </button>
                   <p className="ml-2"> = {count} </p>
                 </div>


                  
               </div>         
             </div>
           
          )

          )}
       </div>
     </div>
  );

}
export default Home;