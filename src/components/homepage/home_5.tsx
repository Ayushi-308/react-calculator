function Home_5(){
   const flexbox=[
        {stars:"★★★★★"},
        {stars:"★★★★★"},
        {stars:"★★★★★"}
    ]
    return(
       <div className='mx-20 mt-20 '>
           <div >
                 <p className='text-base text-orange-400 font-semibold'>Customer Reviews</p>
                 <div className=''>
                     <h1 className='text-3xl font-bold tracking-tighter '> TRUSTED BY <span className="text-orange-500">RESEARCHERS</span><span className="text-purple-600"> WORLDWIDE.</span></h1>
                 </div>
                 <div className=' w-105 mt-5'>
                     <p className="text-xs text-gray-600">See why scientists and innovators choose SolPeptide for purity, performance, and reliability.</p>
                 </div>
           </div>
           <div className="relative p-2 w-1521px h-450px mt-20 flex gap-2 bg-gray-100 ">
               {flexbox.map((items)=>(
                <div className="w-113 h-100 bg-white ">
                <div className="absolute mt-7 ml-5 text-orange-500 text-5xl">{items.stars}</div>
                <img className="absolute mt-9 ml-85" src="public\commas.svg"></img>
                <div className="w-80">
                    <p className="text-gray-700 mt-35 ml-7 ">"SolPeptide consistently delivers exceptional purity and reliability. Their peptides have become essential to our research."</p>
                </div>
                <div className=" bg-orange-500 h-1 mx-10 mt-10"></div>
                <div className="absolute mt-7 ml-7 flex ">
                  <img className="rounded-full h-20 w-20 " src="public\pic.png"></img>
                  <div className="mt-4 ml-3 w-60">
                     <p className="font-bold">Dr. Emily Carter</p>
                     <p className="text-gray-700">Stanford University, USA</p>                    
                  </div>
                </div>
                <img className="asolute ml-82 " src="public\pic icon.svg"></img>
             </div>
               )
             )}
           </div>
       </div> 
    );
}
export default Home_5;