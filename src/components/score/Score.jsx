import Cookie from "js-cookie";
import styles from "./Score.module.css";
import { useEffect, useState } from "react";

const Score = () => {
  const userId = Cookie.get("user_id");
  const userName = Cookie.get("user_name");

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
      <span className={styles["player"]}>{userName}</span>
      {score && <span className={styles["score"]}>{score} pts</span>}
    </div>
  );
};

export default Score;
