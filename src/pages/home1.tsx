function Home1(){
    return(
   <div >
       <div className=' ml-16 mt-20 '>
          <div className="flex">
              <div >
                 <p className='text-base text-orange-400 font-semibold'>QUALITY / PROCESS</p>
                 <div className=' w-150'>
                     <h1 className='text-4xl font-bold tracking-tight '> FROM SOURCE TO SHIPMENT - <span className="text-orange-500">EXCELLENCE</span> AT EVERY STEP.</h1>
                 </div>
                 <div className=' w-110 mt-5'>
                     <p className="text-xs text-gray-600">SolPeptide is committed to delivering research-grade peptides with uncompromising quality. True-quality peptides and world-class service, from sourcing to delivery.</p>
                 </div>
               </div>
               <img className="absolute h-70 w-130 ml-220 mb-20 " src="public\image 7.png"></img>
           </div>
       </div>
       <div className="relative mx-16 mt-30 flex gap-8 ">
           <div className="bg-gradient-to-b from-orange-200 h-80 w-80 rounded-lg">
              <img className="absolute ml-10 mt-10 h-20" src="public\home_icon1.svg"></img>
              <img className="absolute w-80 " src="public\group 1.svg"></img>
              <div className="mt-35 ml-10 w-50">
                  <p className="font-bold text-lg">Carefully Sourced</p>
                  <p className="text-xs text-gray-500 mt-1">Peptides are sourced from trusted local / global partners and raw material vendors. </p>
               </div>
               <div className="h-1 bg-orange-500 rounded-full mx-10 mt-15"></div>
           </div>
           <div className="bg-gradient-to-b from-purple-200 h-80 w-80 rounded-lg">
               <img className="absolute ml-10 mt-10" src="public\Group 2 icon.svg"></img>
               <img className="absolute ml-50 " src="public\Group 2.svg"></img>
               <div className="mt-35 ml-10 w-53">
                  <p className="font-bold text-lg">Rigorous Testing</p>
                  <p className="text-xs text-gray-500 mt-1">Synthesized in dedicated, state of-the-art facilities. Advanced purification ensures superior analytical purity.  </p>
               </div>
               <div className="h-1 bg-purple-500 rounded-full mx-10 mt-15"></div>
           </div>
           <div className="bg-gradient-to-b from-blue-200 h-80 w-80 rounded-lg">
               <img className="absolute ml-10 mt-10 " src="public\group 3 icon.svg"></img>
               <img className="absolute ml-53 " src="public\group 3.svg"></img>
               <div className="mt-35 ml-10 w-50">
                  <p className="font-bold text-lg">COAs Provided</p>
                  <p className="text-xs text-gray-500 mt-1">Certificated of Analysis available with every batch for full trasparency </p>
               </div>
               <div className="h-1 bg-blue-500 rounded-full mx-10 mt-19"></div>
           </div>
           <div className="bg-gradient-to-b from-orange-200 h-80 w-80 rounded-lg">
               <img className="absolute ml-10 mt-10" src="public\group 4 icon.svg"></img>
               <img className="absolute ml-56 " src="public\group 4.svg"></img>
               <div className="mt-35 ml-10 w-52">
                  <p className="font-bold text-lg leading-none">Fast Fulfillment to Your Facility</p>
                  <p className="text-xs text-gray-500 mt-1">Orders are safely dispatched directly to your research facility</p>
               </div>
               <div className="h-1 bg-orange-500 rounded-full mx-10 mt-16"></div>
           </div>


       </div>
   </div>  
  );
}

export default Home1;