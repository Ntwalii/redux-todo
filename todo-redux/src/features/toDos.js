import { createSlice, nanoid } from "@reduxjs/toolkit";
export const toDoslice=createSlice({
    name:"Todos",
    initialState:{
        value:[{
            description:"Hello",
            id:nanoid(),
            isCompleted:false
        }
        ,{
            description:"Bye",
            id:nanoid(),
            isCompleted:false
        }]
    },
    reducers:{
        add:(state,action)=>{
            state.value.push(action.payload)
        },
        complete:(state,action)=>{
            state.value
        }
    }
})
export const {add} =toDoslice.actions
export default toDoslice.reducer;