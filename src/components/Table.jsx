import parks from "../data/parks"

export default function Table(){
    const parksDisplay = parks.map(park  => <tr key={park.id}>
        <td>{park.name}</td>
        <td>{park.location}</td>
        <td>{park.founded_year}</td>
        <td>{park.area_acres}</td>
        <td>{park.visitors_2022}</td>
    </tr>)

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Founded</th>
                <th>Acres</th>
                <th>Visitors in 2022</th>
            </tr>
            </thead>
            <tbody>
                {parksDisplay}
            </tbody>
        </table>
    )
}