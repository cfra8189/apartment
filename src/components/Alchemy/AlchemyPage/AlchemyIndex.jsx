import { Link } from 'react-router-dom'
import './Alchemy.css'

export default function AlchemyIndex() {
  return (
    <div>
      <h1>Alchemy Component</h1>
      <h3 className="project-titles">Projects</h3>
      <ul className="project-list">
        <li className="project-item">
          <Link to="apartment">Ne0 - Concept Housing</Link>
        </li>
      </ul>
    </div>
  )
}
