import { createReducer, on } from "@ngrx/store";
import { initialSearchText } from "../state";
import { searchText } from "./search.action";

export const searchTextReducer=createReducer(
    initialSearchText,
    on(searchText,(state,{search})=>({...state,text:search}))
)