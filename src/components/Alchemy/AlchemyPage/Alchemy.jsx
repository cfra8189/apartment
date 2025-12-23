import { Outlet } from 'react-router-dom'
import './Alchemy.css'

export default function Alchemy() {
    return (
        <div>
            <h1>Alchemy</h1>
            <Outlet />
        </div>
    )
}