import { Outlet } from 'react-router-dom'
import './Alchemy.css'

export default function Alchemy() {
    return (
        <div style={{ minHeight: 'calc(100vh - var(--header-height))', display: 'flex', flexDirection: 'column' }}>
            <Outlet />
        </div>
    )
}