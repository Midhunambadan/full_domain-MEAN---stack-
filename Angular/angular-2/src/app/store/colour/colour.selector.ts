import { createFeatureSelector, createSelector } from "@ngrx/store";
import { colourState } from "../state";


export const selectColourState=createFeatureSelector<colourState>('textColour')

export const selectColour=createSelector(
    selectColourState,
    (state)=>state.colour
)