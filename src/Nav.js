import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
export default function Nav(){
    return(
        <div className="container nav-css">
            <Link to="/homePage">Home Page</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/about">About</Link> &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/menu">Online Menu</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/booking">Reservations</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#order online"> Order Online </a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#Login"> Login</a>
        </div>
    );
}