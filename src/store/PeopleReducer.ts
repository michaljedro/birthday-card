import { PeopleData } from "../data";
export const PEOPLE_DATA = "PEOPLE_DATA";
export type PeopleDataProps = {
  id: number;
  name: string;
  age: number;
  image: string;
};

export type PeopleAction = {
  type: string;
  payload: PeopleDataProps[] | null;
};

export const PeopleReducer = (
  state: PeopleDataProps[] | null = PeopleData,
  action: PeopleAction
) => {
  switch (action.type) {
    case PEOPLE_DATA:
      return action.payload;
    default:
      return state;
  }
};
