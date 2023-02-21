import React, { useState } from "react";
import axios from "axios";

const SkillTest = () => {
  const [challenge, setChallenge] = useState("");
  const [solution, setSolution] = useState("");
  const [result, setResult] = useState("");

  const handleGenerateChallenge = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post("/gpt/generateChallenge", {}, config);
      setChallenge(response.data.challenge);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log("Submitting solution:", solution);
      const response = await axios.post("/api/v1/codes", { code: solution }, config);
      setResult(response.data.result);
    } catch (error) {
      console.log(error.response.data);
      setResult(error.response.data.msg);
    }
  };

  return (
    <div>
      <h2>Skill Test</h2>
      <button onClick={handleGenerateChallenge}>Generate Challenge</button>
      {challenge && (
        <div>
          <h3>Challenge:</h3>
          <p>{challenge}</p>
          <form onSubmit={handleSubmit}>
            <h3>Your Solution:</h3>
            <textarea value={solution} onChange={(e) => setSolution(e.target.value)} rows={10} />
            <br />
            <button type="submit">Submit</button>
          </form>
          {result && (
            <div>
              <h3>Result:</h3>
              <p>{result}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SkillTest;
