import React from "react";

import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query AllCalendar {
        allCalendarCsv {
          nodes {
            ...CalendarCsvFragment
          }
        }
      }
    `}
    render={data => <IndexPage data={data} />}
  />
)

const IndexPage = ({ data }) => (
  <div>
    <h1>FV</h1>
    <a href="mailto: familyvisiontheband@gmail.com">familyvisiontheband@gmail.com</a>
    <ul>
      {data.allCalendarCsv.nodes.length > 0 &&
        data.allCalendarCsv.nodes.map((show, i) => {
          let date = new Date(show.date);
          let year = date.getFullYear();
          return <div key={i}>
            {(i == 0 || year !== new Date(data.allCalendarCsv.nodes[i - 1].date).getFullYear()) &&
              (<h2>{year}</h2>)}
            <div className="show-container">
              <div className="show-date">
                {date.toLocaleDateString("en", {
                  month: "2-digit",
                  day: "2-digit"
                })}</div>
              <div className="show-content">{show.venue}; <u>{show.location}</u> – <em>{show.bands}</em></div>
            </div>
          </div>
        })}
    </ul>
  </div>
)
