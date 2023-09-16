import Cookie from "js-cookie";
import styles from "./Score.module.css";
import { useEffect, useState } from "react";

const Score = () => {
  const userId = Cookie.get("user_id");

  const [score, setScore] = useState("");

  async function fetchScore() {
    const response = await fetch(
      `https://quiz-quimica-deploy.vercel.app/users/score?userId=${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userId}`,
        },
      }
    );

    const responseData = await response.json();
    setScore(responseData.score);
  }

  useEffect(() => {
    fetchScore();
  }, []);

  return (
    <div className={styles["score-container"]}>
      {score && <h1>{score} pts</h1>}
    </div>
  );
};

export default Score;
