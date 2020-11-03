import React, {useState} from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);

  const questionsComponents = questions.map((question) => {
    return <SingleQuestion key={question.id} {...question} />;
  });

  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">{questionsComponents}</section>
      </div>
    </main>
  );
}

export default App;
