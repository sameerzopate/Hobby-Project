import React from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom'

function Topbar() {
    return (
        <div className='Topbar'>
            <Link to='/' className='link'>
                <h2>Home</h2>
            </Link>
            <Link to='/Todos' className='link'>
                <h2>Add Project</h2>
            </Link>
            <Link to='/DisplayTodos' className='link'>
                <h2>Projects</h2>
            </Link>

        </div>
    )
}

export default Topbar
