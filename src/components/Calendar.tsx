import React, { useEffect, useState } from "react";
import { Calendar } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import DailyFocus from "./DailyFocus";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import axios from "axios";
import { fontSize } from "@mui/system";

const ViewCalendar = () => {
  const [govEvents, setGovEvents] = useState([]);
  const [customEvents, setCustomEvents] = useState([]);
  const events = [{ id: "1234", title: "Dad's birthday", start: "2023-01-07" }];

  useEffect(() => {
    axios
      .get("https://www.gov.uk/bank-holidays.json")
      .then((response) => {
        const endpoint = response.data["england-and-wales"].events;
        setGovEvents(endpoint);
        // If adding another endpoint, we don't need this line, we  would setGovEvents to "endpoint"
        // Also would be setGovEvents, NOT setCurrentEvents
        const allHolidays = endpoint.concat(events);
        setGovEvents(allHolidays);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(
    (setGovEvents = {}) => {
      fetch("http://localhost:8008/goals")
        .then((response) => response.json())
        .then(({ goals }) => {
          console.log(goals, "DATA");
          const personalEvent = goals.concat(govEvents);
          console.log(personalEvent, "personalEvents");
          setCustomEvents(goals);
        });
    },
    [govEvents]
  );

  useEffect(() => {
    console.log(govEvents, "gov EVENTS");
  }, [govEvents]);

  const showEvent = (customEvents) => {
    return <p>{customEvents.start}</p>;
  };

  return (
    <>
      <DailyFocus onClick={showEvent} events={customEvents} />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        events={customEvents}
      />
      <div className="div_container">
        {/* <div className="quarter">
          <div className="month_jan">
            <p>JAN</p>
          </div>
          <div className="month_feb">
            <p>FEB</p>
          </div>
          <div className="month_march">
            <p>MARCH</p>
          </div>
        </div>

        <div className="quarter">
          <div className="month_apr">
            <p>APR</p>
          </div>
          <div className="month_may">
            <p>MAY</p>
          </div>
          <div className="month_jun">
            <p>JUN</p>
          </div>
        </div>

        <div className="quarter">
          <div className="month_jul">
            <p>JUL</p>
          </div>
          <div className="month_aug">
            <p>AUG</p>
          </div>
          <div className="month_sep">
            <p>SEP</p>
          </div>
        </div>

        <div className="quarter">
          <div className="month_oct">
            <p>OCT</p>
          </div>
          <div className="month_nov">
            <p>NOV</p>
          </div>
          <div className="month_dec">
            <p>DEC</p>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default ViewCalendar;
