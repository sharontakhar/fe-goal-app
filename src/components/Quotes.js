import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Quotes = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(`https://type.fit/api/quotes`);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {data.map((quote) => (
          <div>{quote.text}</div>
        ))}
      </div>
    </>
  );
};

export default Quotes;
