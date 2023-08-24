import './App.css';

function App() {
  return (
    <div>
    <header id="header">
    <img src="" id="header-img" alt="website-logo" />   
    <nav id="nav-bar">
      <a href="#features" class="nav-link">Features</a>
      <a href="#new-arrivals" class="nav-link">New Arrivals</a>
      <a href="#popular" class="nav-link">Popular</a>
    </nav>
  </header>

  <form id="form" action="https://www.freecodecamp.com/email-submit">
    <h2>Export quality items</h2>
      <input type="email" name="email" id="email" placeholder="Enter your email" /><br />
      <input type="submit" name="submit" id="submit" value="Get Started" />
  </form>

  <section id="hero">
    <h1>This is the hero section</h1>
  </section>

  <section id="features">

    <div id="box">
    <div id="icon"><img src="" alt="icon" /></div>
    <div id="description">description here</div>
    </div>

    <div id="box">
    <div id="icon"><img src="" alt="icon" /></div>
    <div id="description">description here</div>
    </div>

    <div id="box">
    <div id="icon"><img src="" alt="icon" /></div>
    <div id="description">description here</div>
    </div>
  </section>

  <iframe id="video" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" title='1'></iframe>
  <iframe id="video" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" title='2'></iframe>
  <iframe id="video" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" title='3'></iframe>

  <section id="new-arrivals">
    <h2>New Arrivals</h2>
    <div class="container">
    <div class="item">
      <h3>Item 1</h3>
      <button>Select</button>
    </div>
    <div class="item">
      <h3>Item 2</h3>
      <button>Select</button>
    </div><div class="item">
      <h3>Item 3</h3>
      <button>Select</button>
    </div><div class="item">
      <h3>Item 4</h3>
      <button>Select</button>
    </div><div class="item">
      <h3>Item 5</h3>
      <button>Select</button>
    </div><div class="item">
      <h3>Item 6</h3>
      <button>Select</button>
    </div>
    </div>
  </section>

  <section id="popular">
    <h2>Popular</h2>
    <div class="container">
   <div class="item">
      <h3>Item 1</h3>
      <button>Select</button>
    </div>
    <div class="item">
      <h3>Item 2</h3>
      <button>Select</button>
    </div><div class="item">
      <h3>Item 3</h3>
      <button>Select</button>
    </div><div class="item">
      <h3>Item 4</h3>
      <button>Select</button>
    </div><div class="item">
      <h3>Item 5</h3>
      <button>Select</button>
    </div><div class="item">
      <h3>Item 6</h3>
      <button>Select</button>
    </div>
    </div>
  </section>

  <footer>@copyright</footer>
  </div>
  );
}

export default App;
