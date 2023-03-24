import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Highlights from './Highlights';
import Nav from './Nav';
// import '/index.html';


function App() {
  return (
  <div className="container">
    <div className="header-css">
      <Header />
    </div>
    <div className="nav-css">
       <Nav />
    </div>
    <div className="main-css">
       <Main />
    </div>
    <div className="highlights-css">
       <Highlights />
    </div>
    <div className="footer-css">
       <Footer />
   </div>
  </div>
  );
}

export default App;
