import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./store/AppState";

function List() {
  const people = useSelector((state: AppState) => state.people);
  return (
    <>
      {people?.map((item) => {
        return (
          <article key={item.id} className="person">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default List;
