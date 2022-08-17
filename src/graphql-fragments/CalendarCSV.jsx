import { graphql } from "gatsby"
export const CalendarCsvFragment = graphql`
  fragment CalendarCsvFragment on CalendarCsv {
    date,
    venue,
    location,
    bands
  }
`
