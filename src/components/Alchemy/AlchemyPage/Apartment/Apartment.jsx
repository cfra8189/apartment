import './Apartment.css'
import Navbar from './ApartmentNavbar/ApartmentNavbar.jsx'
import { Outlet } from 'react-router-dom'

function Apartment() {
  return (
    <div className="apartment-container">
      <h2>Apartment Component</h2>
      <p>This is the Apartment component.</p>
      <footer className="apartment-navbar" aria-label="Apartment navigation">
        <Navbar />
      </footer>
      <section className="apartment-children">
        <Outlet />
      </section>
    </div>
  )
}

export default Apartment;