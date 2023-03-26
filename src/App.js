import './App.css';
import Header from './Header';
import Main from './Main';
import Highlights from './Highlights';
import Nav from './Nav';
import Footer from './Footer';
// import '/index.html';

function App() {
  return (
  <div className="container">
    <Header />
    <div className='nav-css'><Nav /></div>
    <Main />
    <Highlights />
    <Footer />
  </div>

  );
}

export default App;
