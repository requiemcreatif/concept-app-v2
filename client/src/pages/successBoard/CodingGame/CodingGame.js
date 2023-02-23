import { useState, useEffect } from "react";
import "../../../styles/codingGame/codingGame.css";
import CodeBlockAi from "../../advancedSearch/codeBlockAi";

import styled from "styled-components";
import { motion } from "framer-motion";

const LifeBarContainer = styled(motion.div)`
  display: flex;
  width: 50%;
  height: 2rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 2.5rem;
  overflow: hidden;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
`;

const LifeBar = styled(motion.div)`
  height: 100%;
  background-color: #9a1750;
`;

const AnswerButton = styled.button`
  margin: 0.5em;
  font-size: 1.2em;
`;

function CodingGame() {
  const [score, setScore] = useState(100);
  const [showModal, setShowModal] = useState(false);
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [life, setLife] = useState(100);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showMessage, setShowMessage] = useState(false);

  const getNextQuestion = async () => {
    try {
      let url = "/api/v1/questions";
      if (selectedCategory !== "all") {
        url += `?category=${selectedCategory}`;
      }
      const response = await fetch(url);
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
  }, [selectedCategory]);

  const handleRestart = () => {
    setLife(100);
    getNextQuestion();
  };

  const handleReset = () => {
    setScore(100);
    setLife(100);
    getNextQuestion();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedAnswer === question.correctAnswer) {
      setIsCorrectAnswer(true);
      if (life < 100) {
        setLife(life + 10);
        setScore(score + 10);
      } else {
        setScore(100);
      }
      setShowModal(true);
      setTimeout(() => {
        getNextQuestion();
        setShowModal(false);
      }, 2000);
    } else {
      setIsCorrectAnswer(false);
      setLife(life - 10);
      setScore(score - 10);
      setShowModal(true);
      setTimeout(() => {
        getNextQuestion();
        setShowModal(false);
      }, 2000);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  if (life <= 0) {
    return (
      <div className="restart">
        <h3>You lose!</h3>
        <button onClick={handleRestart}>Restart</button>
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="coding-game-container">
      <p>
        The "Coding Arena" is a fun and educational game in Concept that tests your knowledge of
        programming concepts. In this game, you will be presented with a series of multiple-choice
        questions about various programming topics, such as JavaScript, HTML, CSS, React, Node, and
        MongoDB. To make things more interesting, the game also includes different categories, which
        you can select using the language buttons. You can choose to focus on a specific programming
        language or try your hand at questions from all categories.
      </p>
      <div className="coding-game">
        <div className="language-select">
          <label htmlFor="language-select"></label>
          <div className="language-buttons">
            <button onClick={() => setSelectedCategory("all")}>All</button>
            <button onClick={() => setSelectedCategory("JavaScript")}>JavaScript</button>
            <button onClick={() => setSelectedCategory("HTML")}>HTML</button>
            <button onClick={() => setSelectedCategory("CSS")}>CSS</button>
            <button onClick={() => setSelectedCategory("React")}>React</button>
            <button onClick={() => setSelectedCategory("Node")}>Node</button>
            <button onClick={() => setSelectedCategory("Express")}>Express</button>
            <button onClick={() => setSelectedCategory("MongoDB")}>MongoDB</button>
          </div>
        </div>

        <LifeBarContainer>
          <LifeBar
            className="life-bar"
            animate={{ width: `${life}%` }}
            transition={{ duration: 0.2 }}
          />
        </LifeBarContainer>
        {question && (
          <form onSubmit={handleSubmit}>
            <div className="coding-game-content">
              <div className="question">
                <CodeBlockAi>{question.question}</CodeBlockAi>
              </div>
              {question.answers.map((answer, index) => (
                <div className="answers" key={index}>
                  <AnswerButton
                    key={index}
                    onClick={() => setSelectedAnswer(answer)}
                    disabled={showModal}
                    style={{
                      backgroundColor: selectedAnswer === answer ? "#4285f4" : "",
                      color: selectedAnswer === answer ? "white" : "",
                    }}>
                    {answer}
                  </AnswerButton>
                </div>
              ))}
            </div>
            <div className="form-btns">
              <button type="submit" disabled={showModal}>
                Submit
              </button>
              <button className="reset" type="button" onClick={handleReset}>
                Reset
              </button>
            </div>

            {isCorrectAnswer === false && showModal && (
              <div className="modal">
                <p>Incorrect answer. Please try again.</p>
              </div>
            )}
            {isCorrectAnswer === true && showModal && (
              <div className="modal">
                <div className="modal-container">
                  <p>Well done!</p>
                  <p>You have answered the question correctly.</p>
                  <motion.div
                    className="explosion"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.5 }}
                  />
                </div>
              </div>
            )}
          </form>
        )}

        {score <= 0 && (
          <div className="restart">
            <h3>You lose!</h3>
            <button onClick={handleRestart}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CodingGame;
