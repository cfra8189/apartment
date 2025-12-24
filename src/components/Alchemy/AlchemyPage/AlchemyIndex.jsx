import { Link } from 'react-router-dom'
import './Alchemy.css'

export default function AlchemyIndex() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, paddingTop: '2rem' }}>
      <h1 style={{ fontSize: 'clamp(3rem, 5vw, 8rem)', marginBottom: '2rem' }}>Alchemy Component</h1>
      <h3 className="project-titles" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 3rem)', marginBottom: '1.5rem' }}>Projects</h3>
      <ul className="project-list" style={{ fontSize: 'clamp(1.25rem, 2vw, 2.5rem)' }}>
        <li className="project-item">
          <Link to="apartment">Ne0 - Concept Housing</Link>
        </li>
      </ul>
    </div>
  )
}
