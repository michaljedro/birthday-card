import React, { useState } from "react";
import List from "./List";
import { PeopleData } from "./data";

function App() {
  const [data, setData] = useState(PeopleData);
  return (
    <main>
      <section className="container">
        <h3>{data.length} birthday today</h3>
        <List />
        <button onClick={() => setData([])}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
