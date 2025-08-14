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
  return (
    <div className="App">
      <Header />
      <TripList />
      <GameList />
      <AllergyForm />
      <Summary />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>
        welcome to <span aria-label="Gamel">gamel</span> paradise
      </h1>
      <h2>a place where we combine games and travel</h2>
      <p>Here is how it works:</p>
      <ol aria-label="How it works">
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
    <ul>
      {tripData.map((trip) => (
        <Trip tripObj={trip} />
      ))}
    </ul>
  );
}

function Trip({ tripObj }) {
  return (
    <li>
      <img src={tripObj.photo} alt={tripObj.title}></img>
      <div>
        <h3>{tripObj.title}</h3>
        <p>{tripObj.participants}</p>
        <p>{tripObj.duration}</p>
        <p>{tripObj.description}</p>
        <span>${tripObj.price}</span>
      </div>
    </li>
  );
}

function GameList() {
  return (
    <ul>
      {gamesData.map((game) => (
        <Trip gameObj={game} />
      ))}
    </ul>
  );
}

function Game({ gameObj }) {
  return (
    <li>
      <img src={gameObj.photo} alt={gameObj.title}></img>
      <div>
        <h3>{gameObj.title}</h3>
        <p>{gameObj.players}</p>
        <p>{gameObj.playtime}</p>
      </div>
    </li>
  );
}

function FoodList() {}

function Food() {}

function AllergyForm() {}

function Summary() {}

export default App;
