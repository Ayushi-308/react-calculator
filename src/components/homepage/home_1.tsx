
function Home_1(){
     const boxes=[
        {pics:"public/home_icon1.svg" ,heading:"Research-Grade", content:"For laboratory research and analytical use only" },
        {pics:"public/icon2.2.svg" ,heading:"Premium Quality", content:"Strict quality protocols with ≤1% QC" },
        {pics:"public/home_icon3.svg" ,heading:"Rigorously Tested", content:"Third-party & in-house lab testing in every batch" },
        {pics:"public/home_icon4.svg" ,heading:"Secure & Reliable", content:"Secure packaging. Secure checkout." },
        {pics:"public/home_icon5.svg" ,heading:"Expert Support", content:"Dedicated guidance when you need it" }
    ]
    return(
        <div className="bg-[url('img_pg01.png')] bg-cover  bg-no-repeat pt-[37px]" >
           
                
            <img className="absolute pl-[32px]" src="public\SolPeptide logo.svg"></img>
           
            <div className="h-15 w-70 bg-white ml-223 flex justify-end rounded-3xl">               
                <input className=" text-gray-500 text-sm w-50   " placeholder="Enter Your Product Name......."></input>
                <img src="public\search icon.svg"></img>
                

            </div>
            <div className="absolute">
            <div className="  mt-32 ml-16 " >
                <p className="text-orange-400 text-sm font-semibold" >NEXT-GENERATION Science. Real-world Impact.</p>
                <h1 className="text-6xl font-bold w-135 mt-2 tracking-tighter">SMART <span className="text-orange-500">PEPTIDE</span> SOLUTIONS. BACKED BY <span className="text-indigo-600">SCIENCE</span></h1>
                <div className="box-content w-105 mt-5">
                   <p className="text-xs text-gray-600">Delivering research-grade peptides with exceptional purity, transparent sourcing, and trusted quality standards. Supporting scientific breakthroughs with precision and confidence.</p>
               </div>
           </div>      
           <div className=' mt-5 ml-10 flex justify-start gap-1'>
               <div className='rounded-full bg-orange-400 px-4 py-1.5 text-center'>
                  <p className='text-white text-xs'>VIEW CATALOG</p>
               </div>
               <div className='border-1  rounded-full px-4 py-1.5'>
                   <p className='text-xs'>VIEW COA's</p>
               </div>     
           </div>
           </div>
           <div className="absolute bg-white  h-18 w-38 mt-40 ml-170 flex gap-1 rounded-lg px-3">
                <img className="h-14 w-18 mt-3 " src=""></img>
                <div className="text-xs h-20 w-33 mt-8">
                    <p className="font-bold"></p>
                    <p></p>
                </div>
            </div>
            <div className="absolute bg-white  h-18 w-38 mt-40 ml-320 flex gap-1 rounded-lg px-3">
                <img className="h-14 w-18 mt-3 " src=""></img>
                <div className="text-xs h-20 w-33 mt-8">
                    <p className="font-bold"></p>
                    <p></p>
                </div>
            </div>
           <div className=" flex bg-transparent mt-168 ml-25 gap-3 ">
              {boxes.map((item)=>(
                  <div className="bg-white h-28 w-62 flex gap-1 rounded-lg px-3">
                       <img className="h-18 w-18 mt-5 " src={item.pics}></img>
                       <div className="text-xs h-20 w-33 mt-8">
                         <p className="font-bold">{item.heading}</p>
                         <p>{item.content}</p>
                       </div>
                   </div>
                 )
                )}
           </div>
                
            

        </div>
    );
}
export default Home_1;