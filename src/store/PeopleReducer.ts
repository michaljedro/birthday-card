import { PeopleData } from "../data";
export const PEOPLE_DATA = "PEOPLE_DATA";
export const PEOPLE_CLEAR = "PEOPLE_CLEAR";
export type PeopleDataProps = {
  id: number;
  name: string;
  age: number;
  image: string;
};

export type PeopleAction = {
  type: string;
  payload: PeopleDataProps[] | [];
};

export const PeopleReducer = (
  state: PeopleDataProps[] | [] = PeopleData,
  action: PeopleAction
) => {
  switch (action.type) {
    case PEOPLE_DATA:
      return action.payload;
    case PEOPLE_CLEAR:
      return [];
    default:
      return state;
  }
};
