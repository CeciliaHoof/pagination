import { useState } from "react"
import parks0 from "../data/parks0"

export default function Table(){
    const [start, setStart] = useState(0)
    const [sortBy, setSortBy] = useState("name")

    const maxPages = Math.floor(parks0.length/10)
    console.log(maxPages * 10 - 1)

    const parksDisplay = parks0.slice(start, start + 10)
    .map(park  => <tr key={park.id}>
        <td>{park.name}</td>
        <td>{park.location}</td>
        <td>{park.founded_year}</td>
        <td>{park.area_acres}</td>
        <td>{park.visitors_2022}</td>
    </tr>)


    return (
        <>
        <table id="table">
            <thead>
            <tr>
                <th>Name <span name="name" onClick={() => setSortBy("name")}>{sortBy === "name" ? "🔼" : "🔽"}</span></th>
                <th>Location <span value="location" onClick={() => setSortBy("location")}>{sortBy === "location" ? "🔼" : "🔽"}</span></th>
                <th>Founded <span name="founded" onClick={() => setSortBy("founded")}>{sortBy === "founded" ? "🔼" : "🔽"}</span></th>
                <th>Acres <span name="acres" onClick={() => setSortBy("acres")}>{sortBy === "acres" ? "🔼" : "🔽"}</span></th>
                <th>Visitors in 2022 <span name="visitors" onClick={() => setSortBy("visitors")}>{sortBy === "visitors" ? "🔼" : "🔽"}</span></th>
            </tr>
            </thead>
            <tbody>
                {parksDisplay}
            </tbody>
        </table>

        <div>
            <button disabled={start === 0} onClick={() => setStart(0)}>First</button>
            <button disabled={start === 0} onClick={() => setStart(start - 10)}>Previous</button>
            <button onClick={() => setStart(start + 10)}>Next</button>
            <button >Last</button>
        </div>
        </>
    )
}