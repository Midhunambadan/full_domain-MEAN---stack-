import { createReducer, on } from "@ngrx/store";
import { initialCounter } from "../state";
import { decrement, increment, reset } from "./counter.action";

export const counterReducer=createReducer(
    initialCounter,
    on(increment,(state)=>({counter:state.counter+1})),
    on(decrement,(state)=>({counter:state.counter-1})),
    on(reset,()=>initialCounter)
)