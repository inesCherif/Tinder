import React, { useState,useEffect } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
// import database from './Firebase';

function TinderCards() {
  const [people, setPeople] = useState([
  // info just for test :

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


// get info from firebase :

// useEffect(() => {
//   const unsubscribe=database.collection("people").onSnapshot(snapshot=>
//       setPeople(snapshot.docs.map(doc=>doc.data()))
//       )  
//   return () => {
//       unsubscribe()
//   }
// }, [])
// Piece of code which runs based on a condition
  


// fetch info from an api:
  const fetchPhotos = () =>{
     fetch('https://jsonplaceholder.typicode.com/photos').then(response =>response.json()).then((json) => setPeople(json));
  }
  useEffect(() => {
    fetchPhotos();
  }, []);


  return (
    <div>
      {/* tinder cards*/}
      <div className='tinderCards_cardContainer'>
      {
        // mapping people so we get info one by one
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















