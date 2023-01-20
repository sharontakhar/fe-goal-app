import { useState } from "react";
import axios from "axios";
import { apiPostComments } from "../utils/api";

const DailyFocus = (customEvents) => {
  const [newComments, setNewComment] = useState([]);
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    apiPostComments(newComment.title).then((data) => {
      setComments([...comments]);
    });
  };

  return (
    <div
      className="div_daily"
      style={{
        width: "300px",
      }}
    >
      <p>DAILY FOCUS</p>

      <form>
        <label>
          task:
          <input type="title" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default DailyFocus;
