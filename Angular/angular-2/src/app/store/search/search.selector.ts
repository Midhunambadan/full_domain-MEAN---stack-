import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SearchTextState } from "../state";


export const selectSearchState=createFeatureSelector<SearchTextState>('searchText')

export const selectSearchText=createSelector(
    selectSearchState,
    (state)=>state.text
)