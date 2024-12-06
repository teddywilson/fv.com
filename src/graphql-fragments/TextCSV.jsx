import { graphql } from "gatsby"
export const TextCsvFragment = graphql`
  fragment TextCsvFragment on TextCsv {
    text,
    link
  }
`
