import React, { useState } from 'react';
import './TinderCards.css';
//import Ines from "../../img/ines.jpg";
//import Khaled from "../../img/khaled.jpeg";
import TinderCard from 'react-tinder-card';

function TinderCards() {
  const [people, setPeople] = useState([
    {
        name:'ines cherif',
        // url:<img className='header_logo' src={Ines} alt="Ines" />
        url:"https://cdn.britannica.com/98/236598-050-9F0C5A8D/Mark-Zuckerberg-2019.jpg"
    },
    {
        name:'khaled cherif',
        // url:<img className='header_logo' src={Khaled} alt="Kahled" />
        url:"https://cdn.britannica.com/98/236598-050-9F0C5A8D/Mark-Zuckerberg-2019.jpg"
    },
    {
      name:'ines cherif',
      // url:<img className='header_logo' src={Ines} alt="Ines" />
      url:"https://cdn.britannica.com/98/236598-050-9F0C5A8D/Mark-Zuckerberg-2019.jpg"
  },
  ]);
  return (
    <div>
      <h1>tinder cards</h1>
      <div className='tinderCards_cardContainer'>
      {
        people.map((person) =>(
        <TinderCard className="swipe" key={person.name} preventSwipe={["up", "down"]}> 
            <div 
            style={{backgroundImage : `url(${person.url})`}}
            className='card'>
                <h3>{person.name}</h3>
            </div>
        </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;















