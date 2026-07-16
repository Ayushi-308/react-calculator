import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ParticularUser(){
    const { id } = useParams();
     const [dataId,setdataId]=useState(null);
     useEffect ( () => {
      fetch(`https://dummyjson.com/users/${id}`)
      .then(res => res.json())
      .then((data)=>{setdataId(data)});     
   },[id]);

   console.log(id, "particular data");
   if (!dataId) {
        return <h1>Loading...</h1>;
    }

    return(
        <div className="p-10">
           <h1 className="text-3xl font-bold mb-5">User Details</h1>
           <img src={dataId.image}></img>
           <p><b>ID:</b> {dataId.id}</p>
           <p><b>Name:</b> {dataId.firstName} {dataId.lastName}</p>
           <p><b>Age:</b> {dataId.age}</p>
           <p><b>Gender:</b> {dataId.gender}</p>
           <p><b>Email:</b> {dataId.email}</p>
           <p><b>Phone:</b> {dataId.phone}</p>
           <p><b>Country:</b> {dataId.address.country}</p>
           <p><b>Company:</b> {dataId.company.name}</p>
           <p><b>Department:</b> {dataId.company.department}</p>

       </div>
    );
}
export default ParticularUser;