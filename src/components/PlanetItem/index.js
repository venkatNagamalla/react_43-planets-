// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planet} = props
  const {name, imageUrl, description} = planet
  return (
    <div className="card">
      <img className="planet-img" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-desc">{description}</p>
    </div>
  )
}

export default PlanetItem
