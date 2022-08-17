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
    render={data => {
      data.allCalendarCsv.nodes.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
      return <IndexPage shows={data.allCalendarCsv.nodes} />
    }}
  />
)

const IndexPage = ({ shows }) => (
  <div>
    <h1>FV</h1>
    <a href="mailto: familyvisiontheband@gmail.com">familyvisiontheband@gmail.com</a>
    <ul>
      {shows.length > 0 &&
        shows.map((show, i) => {
          let date = new Date(show.date);
          let year = date.getFullYear();
          return <div key={i}>
            {(i == 0 || year !== new Date(shows[i - 1].date).getFullYear()) &&
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
