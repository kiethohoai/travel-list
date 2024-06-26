import { useState } from "react";
// import FlashCards from "./FlashCards";
// import Counter from "./Counter";

// #TRAVEL LIST
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Chager", quantity: 1, packed: false },
];

// App
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

// Logo
function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

// Form
function Form({ handleAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    handleAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

// PackingList
function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items &&
          items.length > 0 &&
          items.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
      </ul>
    </div>
  );
}

// Item
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

// Stats
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

// FLASHCARD
// export default function App() {
//   return (
//     <div>
//       <FlashCards />
//     </div>
//   );
// }

// COUNTER
// export default function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }
