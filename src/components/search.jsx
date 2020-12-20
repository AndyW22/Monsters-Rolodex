import React from 'react';
import CardList from './card-list/card-list';
import '../App.css';

export default () => {
  const [text, setText] = React.useState([]);
  const [searchField, setsearchField] = React.useState('');

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setText(users));
  });

  const filteredmonsters = text.filter((monster) =>
    monster.name.toLowerCase().includes(searchField));

  return (
    <div>
      <input
        type="search"
        placeholder="search"
        onChange={(e) => {
          setsearchField(e.target.value.toLowerCase());
        }}
      />
      <CardList monsters={filteredmonsters} />
    </div>
  );
};
