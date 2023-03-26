import {Routes, Route, } from 'react-router-dom';
import About from './About.js';
import BookingPage from './BookingPage.js';
import HomePage from './HomePage';
import OnlineMenu from './OnlineMenu.js';
export default function Main() {
    return (
        <div className="container main-css">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant,<br></br> focused on traditional recipes<br></br> served with a modern twist.</p>
            <img src="https://i.insider.com/5b33c37a1ae6621d008b499c?width=1136&format=jpeg" alt="food" width="200" height=" 200"></img>
            <div>
                <a href="/booking">
                <button  className='button'>Reserve a table</button>
                </a>
            </div>

            <Routes>
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/homePage" element={<HomePage />} />
              <Route path="/menu" element={<OnlineMenu />} />
              <Route path="/about" element={<About />} />
            </Routes>
        </div>
        )
}