import React, { useEffect, useState, Fragment } from "react";
import Papa from "papaparse";

const URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRO4CR0Z9OLYQYTdIP-lxbWXFPex26Iaelm0cElTBLQidovERlAeXfdzbjWrom5DEr3Do5Z7ZOwKjKH/pub?output=csv";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Papa.parse(URL, {
      download: true,
      header: true,
      complete: (results) => {
        console.log('results.data: ', results.data);
        setData(results.data);
      },
    });
  }, [])

  return (
    <>
      <h1>FV</h1>
      <ul>
        {data.map((item, i) => {
          let date = new Date(item.date);
          let year = date.getFullYear();
          return <div key={i}>
            {(i == 0 || year !== new Date(data[i - 1].date).getFullYear()) && <h2>{year}</h2>}
            <h3>{date.toLocaleDateString("en", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            })} {item.venue} {item.location} {item.bands}</h3>
          </div>
        })}
      </ul>
    </>
  );
}