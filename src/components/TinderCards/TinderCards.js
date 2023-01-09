import React, { useState,useEffect } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from "axios";

function TinderCards() {
  const [people, setPeople] = useState([
  //   {
  //       name:'ines cherif',
  //       url:"https://cdn.britannica.com/98/236598-050-9F0C5A8D/Mark-Zuckerberg-2019.jpg"
  //   },
  //   {
  //       name:'khaled cherif',
  //       url:"https://cdn.britannica.com/98/236598-050-9F0C5A8D/Mark-Zuckerberg-2019.jpg"
  //   },
  //   {
  //     name:'ines cherif',
  //     url:"https://cdn.britannica.com/98/236598-050-9F0C5A8D/Mark-Zuckerberg-2019.jpg"
  // },
  ]);

  const fetchPhotos = () =>{
     fetch('https://jsonplaceholder.typicode.com/photos').then(response =>response.json()).then((json) => setPeople(json));
  }
  useEffect(() => {
    fetchPhotos();
  }, []);


  return (
    <div>
      {/* <h1>tinder cards</h1> */}
      <div className='tinderCards_cardContainer'>
      {
        people.map((person) =>(
        <TinderCard className="swipe" key={person.id} preventSwipe={["up", "down"]}> 
            <div 
            style={{backgroundImage : `url(${person.url})`}}
            className='card'>
                <h3>{person.title}</h3>
            </div>
        </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;















