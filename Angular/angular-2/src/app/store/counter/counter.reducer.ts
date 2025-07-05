import { createReducer, on } from "@ngrx/store";
import { initialState } from "../state";
import { decrement, increment, reset } from "./counter.action";


export const counterReducer=createReducer(
    initialState,
    on(increment,(state)=>({count:state.count+1})),
     on(decrement,(state)=>({count:state.count-1})),
      on(reset,(state)=>initialState)
)