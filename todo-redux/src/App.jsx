import React from "react";
import Input from "./components/Input";
import Todos from "./components/Todos";
export default function App(){
  return (<div className="flex flex-col items-center gap-10 my-20">
    <p className="text-8xl font-semibold text-gray-700 opacity-50 text-center">todos</p>
    <Input />
    <Todos />
     </div>
  )
}