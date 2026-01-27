import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import TestComp from './components/TestComp/TestComp.jsx'
import floorPlanImage from './assets/ne0_floorplan.png'
import Navigation from './components/Navigation/Navigation.jsx'
import Alchemy from './components/Alchemy/AlchemyPage/Alchemy.jsx'
import AlchemyIndex from './components/Alchemy/AlchemyPage/AlchemyIndex.jsx'
import Apartment from './components/Alchemy/AlchemyPage/Apartment/Apartment.jsx'
import FloorPlan from './components/Alchemy/AlchemyPage/Apartment/FloorPlan/FloorPlan.jsx'
import Amenities from './components/Alchemy/AlchemyPage/Apartment/Amenities/Amenities.jsx'
import Integrated from './components/Alchemy/AlchemyPage/Apartment/Integrated/Integrated.jsx'
import Overview from './components/Alchemy/AlchemyPage/Apartment/AlchemyOverview/Overview.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import ThankYou from './components/Contact/ThankYou.jsx'

function App() {
  useEffect(() => {
    const img = new Image()
    img.src = floorPlanImage
  }, [])

  return (

    <>
      <Navigation />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />

          <Route path="/alchemy" element={<Alchemy />}>
            <Route index element={<AlchemyIndex />} />
            <Route path="apartment" element={<Apartment />}>
              <Route index element={<Overview />} />
              <Route path="floorplan" element={<FloorPlan />} />
              <Route path="amenities" element={<Amenities />} />
              <Route path="integrated" element={<Integrated />} />
            </Route>
            
          </Route>


          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
    </>

  )
}

export default App
