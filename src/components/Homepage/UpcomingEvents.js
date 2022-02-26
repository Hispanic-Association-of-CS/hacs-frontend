import React from "react";
import Fade from "react-reveal/Fade";

function UpcomingEvents(props) {
  return (
    <section className="upcoming-events flex">
      <div className="content-wrapper">
        <Fade bottom>
          <h3 className="section-title">Upcoming Events</h3>
        </Fade>
        <Fade>
          <div className="calendar-wrapper flex">
            <iframe
              src="https://enigmatic-shore-29691.herokuapp.com/calendar"
              style={{
                border: 0,
                height: "600px",
                background: "none",
                width: "100%",
              }}
              frameBorder="0"
              id="calendar"
              title="HACS Calendar"
            ></iframe>
            <iframe
              src="https://enigmatic-shore-29691.herokuapp.com/calendar?agenda=true"
              style={{
                border: 0,
                height: "400px",
                background: "none",
              }}
              frameBorder="0"
              id="calendar-mobile"
              title="HACS Calendar"
            ></iframe>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default UpcomingEvents;
