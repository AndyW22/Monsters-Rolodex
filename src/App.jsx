import React from 'react';
import CardList from './components/card-list/card-list';
import './App.css';
import Search from "./components/search";
function App() {
  const [text, setText] = React.useState([]);
  const [searchField, setsearchField] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setText(users));
    setLoading(false);
  });

  const filteredmonsters = text.filter((monster) =>
    monster.name.toLowerCase().includes(searchField));
  return (
    <div className="App">
      <input
        type="search"
        placeholder="search"
        onChange={(e) => {
          setsearchField(e.target.value.toLowerCase());
        }}
      />
      {loading && <h2>Loading...</h2>}
      <CardList monsters={filteredmonsters} />
    </div>
  );
}
export default App;
