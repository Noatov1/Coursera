import './App.css';

function App() {
  return (
    <head>
     <MetaTags>
       <meta name="description" content="Little Lemon is a restaurant that spsecializes in the Mediterranean cousine" />
       <meta name="og:title" content="Little Lemon" />
       <meta name="og:image" content="http://jordanbr.pythonanywhere.com/static/restaurant/img/logo.png" />
       <meta name="og:description" content="Little Lemon is a restaurant that spsecializes in the Mediterranean cousine"/>
      </MetaTags>
    </head>>
  
    <React.Fragment> className="App"
      <header>
        {/* logo */}
        <img src="http://jordanbr.pythonanywhere.com/static/restaurant/img/logo.png" alt="Little Lemon Logo" width="468" height="168"></img>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order online">Order Online</a></li>
            <li><a href="#Login">Login</a></li>
          </ul>
        </nav>
      </header>
      <main>

      </main>
      <footer>
        <p>Links To Other Pages</p>
        <p>Contact</p>
        <p>Links To Social Media</p>
      </footer>
    </React.Fragment>
    
  );
}

export default App;
