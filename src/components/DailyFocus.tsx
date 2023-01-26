import { useState, useRef } from "react";
import axios from "axios";
import { apiPostComments } from "../utils/api";

const DailyFocus = (customEvents) => {
  const [comments, setComments] = useState([{}]);
  const [newComment, setNewComment] = useState("");

  const addComment = (newComment) => {
    apiPostComments(newComment).then((data) => {
      console.log(newComment, "new comment");
      setComments([...comments, newComment]);
    });
  };

  const handleChange = () => {
    addComment(newComment);
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
          <input type="title" onChange={(e) => setNewComment(e.target.value)} />
        </label>
        <input type="submit" value="Submit" onSubmit={handleChange} />
      </form>
    </div>
  );
};
export default DailyFocus;
