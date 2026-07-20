import { useEffect, useState } from "react";
import { data } from "react-router-dom"; 
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [loading,setloading]=useState(false);  
    const [editTodo,seteditTodo]=useState("");
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/todos`)
        .then((res) => res.json())
        .then((data) => {
          setTodos(data.todos);
        });
    },[]);
    
    const addTodo = () => {
        if(newTodo!==""){
        setloading(true);
        fetch("https://dummyjson.com/todos/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                todo: newTodo,
                completed: false,
                userId:1,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            setTodos((prevTodos) => [data, ...prevTodos]);
            setNewTodo("");      
        })
        .catch((err) => console.log(err))
        .finally(()=>{
             setloading(false);
        });
      }
      else{
        alert("Not Valid");
      }
      
    };
    
    const completeTodo = (id, completed) => {
        const check = !completed;
        fetch(`https://dummyjson.com/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            completed: check,
        }),
        })
        .then((res) => res.json())
        .then((updatedTodo) => {
            setTodos((prevTodos) =>
                prevTodos.map((todo) => 
                    todo.id === id ? { ...todo, completed: updatedTodo.completed } : todo 
                )
            )
        })
        .catch((err) => console.log(err));
    };

    const deleteTodo = (id) => {
        fetch(`https://dummyjson.com/todos/${id}`, {
            method: "DELETE",
        })
       .then((res) => res.json())
       .then((data) => {
          if(data.isDeleted){
           setTodos(todos.filter((data) => data.id !== id));
         }
         else{
            alert(data.message);
         }
        });
    };

    const Edit = (id)=>{
        fetch(`https://dummyjson.com/todos/${id}`,{
            method: 'PUT',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                todo : editTodo,
            })           
        })
        .then(res=>res.json())
        .then((data)=>{
            const editedData = todos.map(upd=>
                upd.id==id ? {...upd , todo: data.todo} : upd 
            );
            setTodos(editedData);
            seteditTodo("");
            setEditId(null);
        });
    };

    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex justify-center items-center p-15">

                <div className="bg-white w-full max-w-2xl rounded-xl shadow-xl p-6">

                    <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Todo List</h1>
                     

                    <div className="flex gap-3 mb-6">
                        <input type="text" placeholder="Enter Todo..."  value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className="flex-1 border rounded-lg px-4 py-3 outline-none focus:border-blue-500" />
                       <button onClick={addTodo} disabled={loading} className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700"> Add</button>
                    </div>

                    <div className="space-y-3 max-h-[500px] overflow-auto">
                        {todos.map((item) => (
                             
                        <div key={item.id} className="flex justify-between items-center border rounded-lg p-4 hover:bg-gray-50">
                            
                            <div>
                                {(editId === item.id && item.completed!== true ) ? (
                                <input className="w-90" type="text" value={editTodo} onChange={(e) => seteditTodo(e.target.value)} onBlur={() => Edit(item.id)} />) : (
                                <p onClick={() => { setEditId(item.id); seteditTodo(item.todo);}} className={`text-lg  ${ item.completed==true ? "line-through text-gray-500" : "text-black"}`}>{item.todo}</p>
                                )}
                           </div>
                            
                           <div className="flex gap-2">
                                <button onClick={() => completeTodo(item.id, item.completed ) } className={`px-4 py-2 rounded text-white ${ item.completed==true ? "bg-yellow-500" : "bg-green-600" }`}> {item.completed ? "Undo" : "Done"}  </button>
                                <button onClick={() => deleteTodo(item.id)} className="bg-red-600 text-white px-4 py-2 rounded">Delete</button>
                            </div>
                       </div>
                        ))}
                   </div>

                </div>

            </div>

        </div>
    )
}
export default TodoList;

// ${ item.status ? "bg-yellow-500" : "bg-green-600" }
// {item.completed ? "Undo" : "Done"}

