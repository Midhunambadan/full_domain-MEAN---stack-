import { createReducer, on } from "@ngrx/store";
import { initialColour } from "../state";
import { changeColour } from "./colour.action";

export const colourReducer=createReducer(
    initialColour,
    on(changeColour,(state)=>({colour:state.colour=='red'?'green':'red'}))
)