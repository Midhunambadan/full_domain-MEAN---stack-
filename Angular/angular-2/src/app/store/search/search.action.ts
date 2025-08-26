import { createAction, props } from "@ngrx/store";

export const searchText=createAction('[Search] Text',props<{search:string}>())