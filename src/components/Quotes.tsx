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
      {
        (data.map((quote) => {
          console.log(quote.text);
          return <div>`${quote}`</div>;
        }),
        [])
      }
    </>
  );
};

export default Quotes;
