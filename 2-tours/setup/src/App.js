import React from "react";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  return (
    <main>
      <Tours url={url} />
    </main>
  );
}

export default App;
