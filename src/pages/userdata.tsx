import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function UserData (){
    const [users,setusers] = useState([]);
    const [data,setdata ] = useState(0);
    const [page,setpage]=useState(1);
    const [total, setTotal] = useState(0);
    const [search,setsearch]=useState("");
    const [showForm, setShowForm] = useState(false);
    const [updateForm, setupdateForm] = useState(false);
    const [updatedData , setupdatedData] = useState({id:"", firstName: "",lastName: "",age: "",gender: "",email: "",phone: "",country: "",company: "",department: "" });
    const [newUser, setNewUser] = useState({ firstName: "",lastName: "",age: "",gender: "",email: "",phone: "",country: "",company: "",department: "" });
   
    useEffect( () => { 
        const url = search=="" ? `https://dummyjson.com/users?limit=10&skip=${data}` : `https://dummyjson.com/users/search?q=${search}&sortBy=firstName&order=asc` 
        fetch(url)
         .then(res => res.json())
         .then((data)=>{setusers(data.users); setTotal(data.total);});
    },[data , search] );
    
    const add = ()=>{
        fetch('https://dummyjson.com/users/add',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName : newUser.firstName ,
                lastName : newUser.lastName ,
                age : newUser.age ,
                gender : newUser.gender ,
                email : newUser.email ,
                phone: newUser.phone ,
                address : { country : newUser.country },
                company : { name : newUser.company, department : newUser.department}
            })
        })
        .then(res => res.json())
        .then((data)=> {
            if(data.id){ 
              setusers([data, ...users]);
              setShowForm(false);
              setNewUser({
                firstName: "",
                lastName: "",
                age: "",
                gender: "",
                email: "",
                phone: "",
                country: "",
                company: "",
                department: ""
              });
            }
            else{
                alert(data.message);
            }
        });       
    }
    const deleteUser = (userid) =>{
        fetch(`https://dummyjson.com/users/${userid}`,{
        method : 'DELETE'})
        .then(res => res.json())
        .then((data) => {
            if(data.isDeleted){
              const updatedUsers = users.filter(user => user.id !== userid);
              setusers(updatedUsers);
            }
            else {
                alert(data.message);
            }
        });
    }
     console.log("all data");
    const updated =()=>{
        fetch(`https://dummyjson.com/users/${updatedData.id}`,{
            method : 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName : updatedData.firstName ,
                lastName : updatedData.lastName ,
                age : updatedData.age ,
                gender : updatedData.gender ,
                email : updatedData.email ,
                phone: updatedData.phone ,
                address : { country : updatedData.country },
                company : { name : updatedData.company, department : updatedData.department}
            })
        }
        )
        .then(res=>res.json())
        .then( (data) =>{
          if(data.id){
            const updatedUser=users.map(user=>{
                if(user.id === data.id){
                    return data ;
                }
                return user;
            });
            setusers(updatedUser);
            setupdateForm(false);
            setupdatedData({
                id:"",
                firstName: "",
                lastName: "",
                age: "",
                gender: "",
                email: "",
                phone: "",
                country: "",
                company: "",
                department: ""
            });
          } 
          else{
            alert(data.message);
          }
        })
    }
    
    return(
        <div>
            <div className="pt-20 " >
                <div className="flex justify-end mr-20">
                   <Link to={`/userdata/login`} className=" bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700">Login</Link>
                </div>
                <div className=" flex justify-between items-center pr-20 mt-3">
                   <input type="text" value={search} onChange={(e) => setsearch(e.target.value)} placeholder="search..." className="w-60 py-2 px-3 ml-20 text-black  rounded-lg border-solid-black border-2"></input>
                   <button onClick={() => setShowForm(true)} className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
                      + Add User
                   </button>
                </div>
                {showForm && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-start pt-10">
                   <div className="bg-white w-[500px] rounded-lg shadow-lg p-6">
                        <div className="flex justify-between mb-5">
                           <h2 className="text-2xl font-bold">Add New User</h2>
                            <button onClick={() => setShowForm(false)} className="text-red-600 text-2xl" >✕</button>
                       </div>
                       <div className="space-y-3">
                           <input className="border p-2 w-full rounded" placeholder="First Name" value={newUser.firstName}              onChange={(e)=>setNewUser({...newUser,firstName:e.target.value})} />

                           <input className="border p-2 w-full rounded" placeholder="Last Name" value={newUser.lastName} onChange={(e)=>setNewUser({...newUser,lastName:e.target.value}) } />

                          <input className="border p-2 w-full rounded" placeholder="Age" value={newUser.age} onChange={(e)=>setNewUser({...newUser,age:e.target.value}) } />

                           <select className="border p-2 w-full rounded" value={newUser.gender} onChange={(e)=>setNewUser({...newUser,gender:e.target.value}) }>
                               <option value="">Select Gender</option>
                               <option>male</option>
                               <option>female</option>
                           </select>

                           <input className="border p-2 w-full rounded" placeholder="Email" value={newUser.email} onChange={(e)=>setNewUser({...newUser,email:e.target.value}) } />

                            <input className="border p-2 w-full rounded" placeholder="Phone" value={newUser.phone} onChange={(e)=>setNewUser({...newUser,phone:e.target.value}) }/>

                           <input className="border p-2 w-full rounded" placeholder="Country" value={newUser.country} onChange={(e)=>setNewUser({...newUser,country:e.target.value})}/>

                           <input className="border p-2 w-full rounded" placeholder="Company Name" value={newUser.company} onChange={(e)=>setNewUser({...newUser,company:e.target.value}) }/>

                           <input className="border p-2 w-full rounded" placeholder="Department" value={newUser.department} onChange={(e)=>setNewUser({...newUser,department:e.target.value})}/>

                           <div className="flex justify-end gap-3 mt-5">
                                <button onClick={() => setShowForm(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                                <button onClick={()=>add()} className="bg-green-600 text-white px-4 py-2 rounded"> Save</button>
                           </div>

                        </div>

                    </div>
               </div>
                )}
               {updateForm && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-start pt-10">
                   <div className="bg-white w-[500px] rounded-lg shadow-lg p-6">
                        <div className="flex justify-between mb-5">
                           <h2 className="text-2xl font-bold">Update User</h2>
                            <button onClick={() => setupdateForm(false)} className="text-red-600 text-2xl" >✕</button>
                       </div>
                       <div className="space-y-3">
                           <input className="border p-2 w-full rounded" placeholder="First Name" value={updatedData.firstName}              onChange={(e)=>setupdatedData({...updatedData,firstName:e.target.value})} />

                           <input className="border p-2 w-full rounded" placeholder="Last Name" value={updatedData.lastName} onChange={(e)=>setupdatedData({...updatedData,lastName:e.target.value}) } />

                          <input className="border p-2 w-full rounded" placeholder="Age" value={updatedData.age} onChange={(e)=>setupdatedData({...updatedData,age:e.target.value}) } />

                           <select className="border p-2 w-full rounded" value={updatedData.gender} onChange={(e)=>setupdatedData({...updatedData,gender:e.target.value}) }>
                               <option value="">Select Gender</option>
                               <option>male</option>
                               <option>female</option>
                           </select>

                           <input className="border p-2 w-full rounded" placeholder="Email" value={updatedData.email} onChange={(e)=>setupdatedData({...updatedData,email:e.target.value}) } />

                            <input className="border p-2 w-full rounded" placeholder="Phone" value={updatedData.phone} onChange={(e)=>setupdatedData({...updatedData,phone:e.target.value}) }/>

                           <input className="border p-2 w-full rounded" placeholder="Country" value={updatedData.country} onChange={(e)=>setupdatedData({...updatedData,country:e.target.value})}/>

                           <input className="border p-2 w-full rounded" placeholder="Company Name" value={updatedData.company} onChange={(e)=>setupdatedData({...updatedData,company:e.target.value}) }/>

                           <input className="border p-2 w-full rounded" placeholder="Department" value={updatedData.department} onChange={(e)=>setupdatedData({...updatedData,department:e.target.value})}/>

                           <div className="flex justify-end gap-3 mt-5">
                                <button onClick={() => setupdateForm(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                                <button onClick={()=>updated()} className="bg-green-600 text-white px-4 py-2 rounded"> Update</button>
                           </div>

                        </div>

                    </div>
               </div>
                )}
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
                     <th className="border-1 border-solid p-2">DELETE</th>
                     <th className="border-1 border-solid p-2">UPDATE</th>
                   </tr>
                   
                   
                    {users.map((item) => (
                    <tr key={item.id} >
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

                      <td className="border-1 border-solid px-2 py-1 text-center"><button className="bg-red-400 rounded-lg px-2 hover:bg-red-500 text-white" onClick={() => deleteUser(item.id) }>X</button></td>

                      <td className="border-1 border-solid px-2 py-1 text-center"><button className="bg-green-600 rounded-lg px-2 hover:bg-green-700 text-white" onClick={()=>{setupdateForm(true); setupdatedData( { id:item.id ,firstName:item.firstName,lastName: item.lastName ,age:item.age ,gender:item.gender ,email:item.email,phone: item.phone,country:item.address.country,company:item.company.name ,department:item.company.department }); } }>Update</button></td>
                                            
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