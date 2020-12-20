import React from 'react';
import './card.component.css';

export default (props) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h1>{props.monster.name}</h1>
  </div>
);
