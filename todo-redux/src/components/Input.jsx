import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../features/toDos";
export default function Input(){
    const dispatch=useDispatch()
    const [newToDo,setNewToDo]=React.useState()
    function handleChange(e){
        e.preventDefault()
        setNewToDo(e.target.value)
    }
    console.log(newToDo)
    function addToDo(){
        dispatch(add(newToDo))
    }
    return (
        <form onSubmit={addToDo} className="w-1/2 relative">
        <input type="text" className="w-full border-gray-400 border px-5 py-2 rounded-3xl shadow-xl" onChange={handleChange} value={newToDo}/>
        <button className="bg-[#008B85] px-2 text-xl text-white font-bold rounded-2xl absolute top-2 right-4">+</button>
        </form >
     )
}