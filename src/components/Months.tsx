import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

const Months = () => {
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[]}
      />
      <div className="div_container">
        <div className="quarter">
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
        </div>
      </div>
    </>
  );
};
export default Months;
