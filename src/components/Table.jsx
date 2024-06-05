import { useEffect, useState } from "react";
import parks from "../data/parks";

export default function Table() {
  const [start, setStart] = useState(0);
  const [sortBy, setSortBy] = useState("name");
  const [sortedParks, setSortedParks] = useState([]);
  const lastPageStart = Math.floor(parks.length / 10) * 10;

  const tempParks = parks.sort((a, b) => {
    const valA = a[sortBy];
    const valB = b[sortBy];
    if (valA < valB) {
      return -1;
    } else if (valA > valB) {
      return 1;
    } else return 0;
  });
//   setSortedParks(tempParks);

  const parksDisplay = tempParks.slice(start, start + 10).map((park) => (
    <tr key={park.id}>
      <td>{park.name}</td>
      <td>{park.location}</td>
      <td>{park.founded_year}</td>
      <td>{park.area_acres}</td>
      <td>{park.visitors_2022}</td>
    </tr>
  ));

  //   function sortParks(){

  //   }

  return (
    <>
      <table id="table">
        <thead>
          <tr>
            <th>
              Name{" "}
              <span name="name" onClick={() => setSortBy("name")}>
                {sortBy === "name" ? "▲" : "▼"}
              </span>
            </th>
            <th>
              Location{" "}
              <span value="location" onClick={() => setSortBy("location")}>
                {sortBy === "location" ? "▲" : "▼"}
              </span>
            </th>
            <th>
              Founded{" "}
              <span name="founded" onClick={() => setSortBy("founded_year")}>
                {sortBy === "founded_year" ? "▲" : "▼"}
              </span>
            </th>
            <th>
              Acres{" "}
              <span name="acres" onClick={() => setSortBy("area_acres")}>
                {sortBy === "area_acres" ? "▲" : "▼"}
              </span>
            </th>
            <th>
              2022 Visitors{" "}
              <span name="visitors" onClick={() => setSortBy("visitors_2022")}>
                {sortBy === "visitors_2022" ? "▲" : "▼"}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>{parksDisplay}</tbody>
      </table>

      <div>
        <button disabled={start === 0} onClick={() => setStart(0)}>
          First
        </button>
        <button disabled={start === 0} onClick={() => setStart(start - 10)}>
          Previous
        </button>
        <button
          disabled={start === lastPageStart}
          onClick={() => setStart(start + 10)}
        >
          Next
        </button>
        <button
          disabled={start === lastPageStart}
          onClick={() => setStart(lastPageStart)}
        >
          Last
        </button>
      </div>
    </>
  );
}
