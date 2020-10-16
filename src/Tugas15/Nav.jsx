import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import { ThemeContext } from './ThemeContext'

const Nav = () => {
    const { isDark, setIsDark } = useContext(ThemeContext)
    const handleChange = (e) => {
        setIsDark(e.target.checked)
    }
    return (
        <nav className={isDark && "isDark"}>
            <ul>
                <li>
                    <Link to="/tugas9">Tugas 9</Link>
                </li>
                <li>
                    <Link to="/tugas10">Tugas 10</Link>
                </li>
                <li>
                    <Link to="/tugas11">Tugas 11</Link>
                </li>
                <li>
                    <Link to="/tugas12">Tugas 12</Link>
                </li>
                <li>
                    <Link to="/tugas13">Tugas 13</Link>
                </li>
                <li>
                    <Link to="/tugas14">Tugas 14</Link>
                </li>
                <li>
                    <Link to="/">Tugas 15</Link>
                </li>
            </ul>
            <label className="switch">
                <input type="checkbox" onChange={handleChange} />
                <span className="slider round" ></span>
            </label>
        </nav>
    )
}

export default Nav
