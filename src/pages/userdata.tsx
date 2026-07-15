import { useEffect, useState } from "react";
function UserData (){
    const [users,setusers] = useState([]);
    const [data,setdata ] = useState("https://dummyjson.com/users");
    const [dataId,setdataId]=useState();
    useEffect( () => {          
        fetch(data)
         .then(res => res.json())
         .then((data)=>{setusers(data.users)});
    },
    [] );
   function userdata (userid){
      fetch(`https://dummyjson.com/users/${userid}`)
      .then(res => res.json())
      .then((data)=>{setdataId(data)});
   }
     console.log(dataId , "userdata updated");   
    return(
        <div>
            <div className="pt-20" >
               <table className="border-collapse border-solid-black border-1 ml-20 " >
                   <tr >
                     <th className="border-1 border-solid p-2" >ID</th>
                     <th className="border-1 border-solid p-2">NAME</th>
                     <th className="border-1 border-solid p-2">AGE</th>
                     <th className="border-1 border-solid p-2">GENDER</th>
                     <th className="border-1 border-solid p-2">EMAIL</th>
                     <th className="border-1 border-solid p-2">PHONE NO.</th>
                     <th className="border-1 border-solid p-2">COUNTRY</th>
                     <th className="border-1 border-solid p-2">COMPANY NAME</th>
                     <th className="border-1 border-solid p-2">COMPANY DEPARTMENT</th>
                   </tr>
                   
                   
                    {users.map((item) => (
                    <tr >
                      <td className="border-1 border-solid px-2">{item?.id}</td>
                      <td className="border-1 border-solid px-2">
                          <button onClick={()=> userdata(item.id)}> {item.lastName}</button>
                      </td>
                      
                      <td className="border-1 border-solid px-2">{item.age}</td>
                      <td className="border-1 border-solid px-2">{item.gender}</td>
                      <td className="border-1 border-solid px-2">{item.email}</td>
                      <td className="border-1 border-solid px-2">{item.phone}</td>
                      <td className="border-1 border-solid px-2">{item.address.country}</td>
                      <td className="border-1 border-solid px-2">{item.company.name}</td>
                      <td className="border-1 border-solid px-2">{item.company.department}</td>
                                            
                    </tr>
                   )
                    )}
               </table>
            </div>
        </div>
    );
}
export default UserData;