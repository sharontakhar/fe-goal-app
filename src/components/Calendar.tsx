import React, { useEffect, useState } from "react";
import { Calendar } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import DailyFocus from "./DailyFocus";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import axios from "axios";

const ViewCalendar = () => {
  const [govEvents, setGovEvents] = useState([]);
  const [customEvents, setCustomEvents] = useState<(GoalEvent | GovEvent)[]>();
  const events = [{ id: "1234", title: "Dad's birthday", start: "2023-01-07" }];

  type GoalEvent = {
    id?: string;
    title: string;
    start?: string;
  };

  type GovEvent = {
    id?: string;
    title: string;
    date?: string;
    notes: string;
    bunting: boolean;
  };

  useEffect(() => {
    axios
      .get("https://www.gov.uk/bank-holidays.json")
      .then((response) => {
        const endpoint = response.data["england-and-wales"].events;
        setGovEvents(endpoint);
        const allHolidays = endpoint.concat(events);
        setGovEvents(allHolidays);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8008/goals")
      .then((response) => response.json())
      .then(({ goals }) => {
        const personalEvent = [...goals];
        setCustomEvents([...goals, ...govEvents]);
      });
  }, [govEvents]);

  return (
    <>
      <DailyFocus />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        events={customEvents}
      />
      <div className="div_container"></div>
    </>
  );
};
export default ViewCalendar;
