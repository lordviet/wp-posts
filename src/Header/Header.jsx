import React from 'react'; 
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="header">
            <h2 className="logo"><Link to="/">WP Posts</Link></h2>
        </nav>
    );
}