import React from "react";
import './App.css'; // Assuming you create a corresponding CSS file

const App = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Kashmiri Cuisine</h1>
      </header>

      <nav>
        <a href="#">Home</a> &nbsp; &nbsp;
        <a href="#">About</a> &nbsp; &nbsp;
        <a href="#">Recipes</a> &nbsp; &nbsp;
        <a href="#">Contact</a>
      </nav>

      <main>
        <div className="column side">
          <h2>Explore</h2>
          <ul>
            <li><a href="#">Traditional Dishes</a></li>
            <li><a href="#">Street Food</a></li>
            <li><a href="#">Specialties</a></li>
          </ul>
        </div>

        <div className="column center">
          <h2>About Kashmiri Wazwan</h2>
          <p>Kashmiri Wazwan is a traditional multi-course meal from Kashmir, prepared and served with great care and pride. It is typically served at weddings, festivals, and other special occasions, and is known for its elaborate preparation and rich flavors. Wazwan consists of a variety of dishes, each with its own unique taste and texture, showcasing the culinary heritage of Kashmir.</p>
          <img src="wazwan.jpg" alt="Kashmiri Wazwan" height="500" width="860" />
          
          <h2>Famous Dishes in Wazwan</h2>
          <div className="box">
            <p><b>Rogan Josh</b><br/><br/>A flavorful lamb curry cooked in aromatic spices.</p>
            <img src="rogan.jpg" alt="Rogan Josh" height="500" width="800" />
          </div>
          <div className="box">
            <p><b>Gushtaba</b><br/><br/>Soft meatballs made from minced mutton cooked in yogurt gravy.</p>
            <img src="gushtaba.jpg" alt="Gushtaba" height="500" width="800" />
          </div>
          <div className="box">
            <p><b>Tabak Maaz</b><br/><br/>Crispy fried lamb ribs marinated in spices.</p>
            <img src="tabak.jpg" alt="Tabak Maaz" height="500" width="800" />
          </div>
        </div>

        <div className="column side">
          <h2>Follow Us</h2>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </main>

      <footer>
        <p><i>&copy; Kashmiri Foods. All rights reserved</i></p>
      </footer>
    </div>
  );
};

export default App;
