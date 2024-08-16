import React from "react";
import { useSelector } from "react-redux";
export default function Todos(){
    const toDos=useSelector(state=>state.toDo.value)
    const tasks=toDos.map(toDo=>{
        return(
        <li className="flex flex-row justify-between"><p className=" my-auto flex flex-row gap-5 w-1/2"><input type="checkbox" checked={toDo.isCompleted}/>{toDo.description}</p><button className="rounded-full bg-gray-200 py-3 px-5"><i className="fa-solid fa-trash text-lg text-red-600"></i></button></li>
    )
    })
    return (
        <ul className="w-1/2 px-1 flex flex-col gap-3">
            {tasks}
        </ul>
    )
}