import "./styles/LocationCard.css"
const LocationCard = ({ location }) => {
    return (
       <article className="location">
        <h2 className="title">{location?.name}</h2>
        <ul className="list">
            <li className="list__item"><span className="list__value">Type:</span><span className="list__value__2">{location?.type}</span></li>
            <li className="list__item"><span className="list__value">Dimension</span><span className="list__value__2">{location?.dimension}</span></li >
            <li className="list__item"><span className="list__value">Popualtion</span><span className="list__value__2">{location?.residents.length}</span></li>
        </ul>
       </article>
    )
}

export default LocationCard