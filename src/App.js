import { useState } from "react";
import "./index.css";

const gamesData = [
  {
    id: "g1",
    title: "Catan",
    players: "3-4",
    price: 45,
    photo: `${process.env.PUBLIC_URL}/images/Catan.png`,
    playtime: 90,
    soldOut: false,
  },
  {
    id: "g2",
    title: "Ticket to Ride",
    players: "2-5",
    price: 40,
    photo: `${process.env.PUBLIC_URL}/images/ticket_to_ride.png`,
    playtime: 60,
    soldOut: false,
  },
  {
    id: "g3",
    title: "Gloomhaven",
    players: "1-4",
    price: 120,
    photo: `${process.env.PUBLIC_URL}/images/Gloomhaven.png`,
    playtime: 120,
    soldOut: true,
  },
  {
    id: "g4",
    title: "Carcassonne",
    players: "2-5",
    price: 35,
    photo: `${process.env.PUBLIC_URL}/images/Carcassonne.png`,
    playtime: 45,
    soldOut: false,
  },
  {
    id: "g5",
    title: "Pandemic",
    players: "2-4",
    price: 50,
    photo: `${process.env.PUBLIC_URL}/images/Pandemic.png`,
    playtime: 60,
    soldOut: false,
  },
  {
    id: "g6",
    title: "Azul",
    players: "2-4",
    price: 40,
    photo: `${process.env.PUBLIC_URL}/images/Azul.png`,
    playtime: 30,
    soldOut: false,
  },
  {
    id: "g7",
    title: "Root",
    players: "2-4",
    price: 70,
    photo: `${process.env.PUBLIC_URL}/images/Root.png`,
    playtime: 90,
    soldOut: true,
  },
  {
    id: "g8",
    title: "Wingspan",
    players: "1-5",
    price: 65,
    photo: `${process.env.PUBLIC_URL}/images/Wingspan.png`,
    playtime: 60,
    soldOut: false,
  },
];

const foodData = [
  {
    id: "f1",
    name: "Vegan Sandwich",
    portion: "1 serving",
    price: 10,
    photo: `${process.env.PUBLIC_URL}/images/veganSandwich.png`,
    description:
      "A fresh sandwich with hummus and spinach on whole grain bread.",
  },
  {
    id: "f2",
    name: "Chicken Salad",
    portion: "1 serving",
    price: 12,
    photo: `${process.env.PUBLIC_URL}/images/chickenSalad.png`,
    description:
      "Grilled chicken breast served on a bed of mixed greens, cherry tomatoes, cucumbers, and a light vinaigrette.",
  },
  {
    id: "f3",
    name: "Cheese Pizza",
    portion: "1 medium",
    price: 15,
    photo: `${process.env.PUBLIC_URL}/images/cheesePizza.png`,
    description:
      "Classic pizza with mozzarella cheese, tomato sauce, and fresh oregano on a thin crust.",
  },
  {
    id: "f4",
    name: "Fruit Platter",
    portion: "1 serving",
    price: 8,
    photo: `${process.env.PUBLIC_URL}/images/fruitPlatter.png`,
    description:
      "A colorful mix of seasonal fruits including strawberries, melon, pineapple, and grapes.",
  },
  {
    id: "f5",
    name: "Burger Combo",
    portion: "1 combo",
    price: 14,
    photo: `${process.env.PUBLIC_URL}/images/burgerCombo.png`,
    description:
      "Juicy beef burger with lettuce, tomato, cheese, pickles, and a side of fries.",
  },
  {
    id: "f6",
    name: "Pasta Primavera",
    portion: "1 serving",
    price: 13,
    photo: `${process.env.PUBLIC_URL}/images/pastaPrimavera.png`,
    description:
      "Penne pasta tossed with fresh seasonal vegetables, olive oil, garlic, and parmesan cheese.",
  },
  {
    id: "f7",
    name: "Sushi Platter",
    portion: "8 pieces",
    price: 18,
    photo: `${process.env.PUBLIC_URL}/images/sushiPlatter.png`,
    description:
      "Assorted sushi with salmon, tuna, avocado, cucumber, and served with soy sauce and wasabi.",
  },
  {
    id: "f8",
    name: "Chocolate Cake",
    portion: "1 slice",
    price: 6,
    photo: `${process.env.PUBLIC_URL}/images/chocolateCake.png`,
    description:
      "Rich chocolate cake with layers of dark chocolate ganache and a light cocoa frosting.",
  },
  {
    id: "f9",
    name: "Smoothie Bowl",
    portion: "1 bowl",
    price: 9,
    photo: `${process.env.PUBLIC_URL}/images/smoothieBowl.png`,
    description:
      "A blend of berries and bananas topped with granola, coconut flakes, and chia seeds.",
  },
];

const tripData = [
  {
    id: "t1",
    title: "New York City Adventure",
    participants: "1-6",
    price: 300,
    photo: `${process.env.PUBLIC_URL}/images/newYorkCity.png`,
    duration: "3 days",
    description:
      "Explore the Big Apple! Visit Times Square, Central Park, the Statue of Liberty, and enjoy iconic New York cuisine.",
  },
  {
    id: "t2",
    title: "Paris Getaway",
    participants: "1-4",
    price: 450,
    photo: `${process.env.PUBLIC_URL}/images/paris.png`,
    duration: "4 days",
    description:
      "Romantic escape to Paris. Tour the Eiffel Tower, Louvre Museum, stroll along the Seine, and savor French pastries.",
  },
  {
    id: "t3",
    title: "Tokyo Experience",
    participants: "1-5",
    price: 600,
    photo: `${process.env.PUBLIC_URL}/images/tokyo.png`,
    duration: "5 days",
    description:
      "Dive into Tokyo's vibrant culture. Visit temples, neon-lit streets, sushi markets, and experience traditional tea ceremonies.",
  },
  {
    id: "t4",
    title: "Grand Canyon Tour",
    participants: "2-8",
    price: 250,
    photo: `${process.env.PUBLIC_URL}/images/grandCanyon.png`,
    duration: "2 days",
    description:
      "Adventure at the Grand Canyon. Hike scenic trails, enjoy breathtaking views, and experience the beauty of the American Southwest.",
  },
];

function App() {
  const [allergies, setAllergies] = useState([]);
  const [trips, setTrips] = useState([]);
  const [foods, setFoods] = useState([]);
  const [games, setGames] = useState([]);
  return (
    <div className="App">
      <Header />
      <TripList />
      <GameList />
      <FoodList />
      <AllergyForm />
      <AllergyList allergies={allergies} />
      <Summary
        allergies={allergies}
        trips={trips}
        foods={foods}
        games={games}
      />
    </div>
  );
}

function Header() {
  return (
    <header aria-labelledby="headerH1">
      <h1 id="headerH1">
        welcome to{" "}
        <span className="name" aria-label="Gamel">
          Gamel!!!
        </span>{" "}
        paradise
      </h1>
      <h2>
        a place where we combine games and travel.<br></br> So we
        <span className="name"> Gamel!!!</span>
      </h2>
      <p>Here is how it works:</p>
      <ol className="header_list list" aria-label="How it works">
        <li>Select your trip</li>
        <li>Select your game</li>
        <li>Select your food of choice</li>
        <li>Let us know about allergies</li>
        <li>
          You are all set to <span>gamel</span>
        </li>
      </ol>
    </header>
  );
}

function TripList() {
  return (
    <div className="container">
      <h2 id="tripListTitle">our trips</h2>
      <p>Please choose your travel destination.</p>
      <ul aria-labelledby="tripListTitle">
        {tripData.map((trip) => (
          <Trip key={trip.id} tripObj={trip} />
        ))}
      </ul>
    </div>
  );
}

function Trip({ tripObj }) {
  return (
    <li>
      <img src={tripObj.photo} alt={tripObj.title} />
      <div className="details">
        <h3>{tripObj.title}</h3>
        <p>
          <strong>Participants:</strong> {tripObj.participants}
        </p>
        <p>
          <strong>Trip duration:</strong> {tripObj.duration}
        </p>
        <p>
          <strong>What you will do:</strong> {tripObj.description}
        </p>
        <p className="price">
          <strong>Price:</strong> ${tripObj.price}
        </p>
      </div>
    </li>
  );
}

function GameList() {
  return (
    <div className="container">
      <h2 id="gameListTitle">our games</h2>
      <p>Please choose what games you want to include on your trip.</p>
      <ul aria-labelledby="gameListTitle">
        {gamesData.map((game) => (
          <Game key={game.id} gameObj={game} />
        ))}
      </ul>
    </div>
  );
}

function Game({ gameObj }) {
  return (
    <li>
      <img src={gameObj.photo} alt={gameObj.title} />
      <div className="details">
        <h3>{gameObj.title}</h3>
        <p>
          <strong>Players:</strong> {gameObj.players}
        </p>
        <p>
          <strong>Estimated playtime:</strong> {gameObj.playtime} minutes
        </p>
      </div>
    </li>
  );
}

function FoodList() {
  return (
    <div className="container">
      <h2 id="foodListTitle">our food list</h2>
      <p>Please choose what you want to eat during your trip.</p>
      <ul aria-labelledby="foodListTitle">
        {foodData.map((food) => (
          <Food key={food.id} foodObj={food} />
        ))}
      </ul>
    </div>
  );
}

function Food({ foodObj }) {
  return (
    <li>
      <img src={foodObj.photo} alt={foodObj.name} />
      <div className="details">
        <h3>{foodObj.name}</h3>
        <p>
          <strong>Portion:</strong> {foodObj.portion}
        </p>
        <p>
          <strong>Ingredients:</strong> {foodObj.description}
        </p>
        <p className="price">
          <strong>Price:</strong> ${foodObj.price}
        </p>
      </div>
    </li>
  );
}

function AllergyForm() {
  return (
    <div className="container">
      <h2>Your Allergies</h2>
      <p>
        Please list all of your allergies. If you don't have any, just skip this
        section.
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="allergyInput">My allergies:</label>
        <div className="input_btn">
          <input
            id="allergyInput"
            type="text"
            placeholder="e.g., peanuts, shellfish"
          />
          <button type="submit">Add to list</button>
        </div>
      </form>
    </div>
  );
}

function AllergyList({ allergies }) {
  return (
    <div className="allergy_container">
      <ul aria-label="allergy-list" className="allergy_list container">
        {allergies.map((allergy) => (
          <li key={allergy.id}>
            <button>❌</button>
            {allergy.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Summary({ allergies }) {
  return (
    <footer className="footer">
      <h2>Your Trip Summary</h2>
      <div className="footer_summary">
        <div className="trip_summary">
          <h3>Trip Summary</h3>
          <ul aria-label="trip-summary">
            <li>
              New York City <span>1X</span>
            </li>
          </ul>
        </div>

        <div className="list_summary">
          <h3>Game Summary</h3>
          <ul aria-label="food-summary">
            <li>
              <button>❌</button>
              Chicken Salad <span>3X</span>
            </li>
            <li>
              <button>❌</button>
              Cheese Pizza <span>4X</span>
            </li>
            <li>
              <button>❌</button>
              Fruit Platter <span>3X</span>
            </li>
            <li>
              <button>❌</button>
              Vegan Sandwich <span>6X</span>
            </li>
          </ul>
        </div>
        <div className="list_summary">
          <h3>Food Summary</h3>
          <ul aria-label="food-summary">
            <li>
              <button>❌</button>
              Chicken Salad <span>3X</span>
            </li>
            <li>
              <button>❌</button>
              Cheese Pizza <span>4X</span>
            </li>
            <li>
              <button>❌</button>
              Fruit Platter <span>3X</span>
            </li>
            <li>
              <button>❌</button>
              Vegan Sandwich <span>6X</span>
            </li>
          </ul>
        </div>
        <div className="allergy_summary">
          <h3>Your Allergies</h3>
          <ul aria-label="summary-allergy-list">
            {allergies.map((allergy) => (
              <li key={allergy.id}>
                <button>❌</button>
                {allergy.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p>
        Please check if everything is correct. If yes, click on the{" "}
        <strong>"Book Now"</strong> button.
      </p>
      <button type="button" className="book_button">
        Book Now
      </button>
    </footer>
  );
}

export default App;
<li>
  <button>❌</button>
  Chicken Salad <span>3X</span>
</li>;
