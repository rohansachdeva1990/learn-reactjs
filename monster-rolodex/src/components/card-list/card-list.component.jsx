import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => {
  // We are trying to access JS object, thats why we use the curly braces
  return (
    <div className='card-list'>
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster}></Card>
      ))}
    </div>
  );
};
