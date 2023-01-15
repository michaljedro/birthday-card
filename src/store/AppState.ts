import { combineReducers } from "redux";
import { PeopleReducer } from "./PeopleReducer";
export const rootReducer = combineReducers({
  people: PeopleReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
