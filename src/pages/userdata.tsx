import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function UserData (){
    const [users,setusers] = useState([]);
    const [data,setdata ] = useState(0);
    const [page,setpage]=useState(1);
    const [total, setTotal] = useState(0);
    const [search,setsearch]=useState("");
   
    useEffect( () => { 
        const url = search=="" ? `https://dummyjson.com/users?limit=10&skip=${data}` : `https://dummyjson.com/users/search?q=${search}&sortBy=firstName&order=asc` 
        fetch(url)
         .then(res => res.json())
         .then((data)=>{setusers(data.users); setTotal(data.total);});
    },[data , search] );
    
   
     console.log("all data");
    return(
        <div>
            <div className="pt-20" >
                <input type="text" value={search} onChange={(e) => setsearch(e.target.value)} placeholder="search..." className="w-60 py-2 px-3 ml-20 text-black  rounded-lg border-solid-black border-2"></input>
               <table className="border-collapse border-solid-black border-1 ml-20 mt-10" >
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
                           <Link to={`/userdata/${item.id}`}  >{item.firstName} {item.lastName}</Link>
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
               <div className=" flex ml-20 gap-3 mt-5">
                    <button className="py-2 px-3 ml-20 rounded-lg bg-orange-500 text-white text-xl hover:bg-orange-700" onClick={() => {setpage(page-1);  setdata(data-10);}} disabled={page<=1} >BACK</button>
                    <div className="py-2 px-4 ml-20  rounded-lg bg-yellow-500  text-xl ">{page}</div>
                    <button className="py-2 px-3 ml-20 rounded-lg bg-blue-500 text-white text-xl hover:bg-blue-700"  onClick={()=>{ setpage(page+1); setdata(data+10)}} disabled={data + 10 >= total}>NEXT</button>
               </div>
            </div>
        </div>
    );
}
export default UserData;