import { useState, useEffect } from "react";

function CodingGame() {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);

  const getNextQuestion = async () => {
    try {
      const response = await fetch("/api/v1/questions");
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.questions.length);
      const randomQuestion = data.questions[randomIndex];
      setQuestion(randomQuestion);
      setIsCorrectAnswer(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNextQuestion();
    setLoading(false);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedAnswer === question.correctAnswer) {
      setIsCorrectAnswer(true);
      getNextQuestion();
    } else {
      setIsCorrectAnswer(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {question && (
        <form onSubmit={handleSubmit}>
          <h2>{question.question}</h2>
          {question.answers.map((answer, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`answer-${index}`}
                name="answer"
                value={answer}
                checked={selectedAnswer === answer}
                onChange={(event) => setSelectedAnswer(event.target.value)}
              />
              <label htmlFor={`answer-${index}`}>{answer}</label>
            </div>
          ))}
          <button type="submit">Submit</button>
          {isCorrectAnswer === false && <p>Incorrect answer. Please try again.</p>}
        </form>
      )}
    </div>
  );
}

export default CodingGame;
