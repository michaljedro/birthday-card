import List from "./List";
import { PeopleData } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./store/AppState";
import { PEOPLE_CLEAR } from "./store/PeopleReducer";

function App() {
  const people = useSelector((state: AppState) => state.people);
  const dispatch = useDispatch();
  return (
    <main>
      <section className="container">
        <h3> {people?.length} birthday today</h3>
        <List />
        <button onClick={() => dispatch({ type: PEOPLE_CLEAR })}>
          Clear all
        </button>
      </section>
    </main>
  );
}

export default App;
