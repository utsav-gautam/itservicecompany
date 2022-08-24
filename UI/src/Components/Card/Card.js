import React from 'react';
import './Card.css';
import CardItem from './CardItems';

function Cards() {
  return (
    <div className='cards'>
      <h1>Changing the world through new technologies!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='Images/Cloud.jpg'
              text="Cloud Computing : Dont worry it these cloud wont leak."
              path='/services'
            />
            <CardItem
              src='Images/iot.jfif'
              text='IOT : Let the combo of hardware and software amaze you.'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='Images/MachineLearning.jpg'
              text="Machine Learning : Let the machine learn it automatically"
              path='/services'
            />
            <CardItem
              src='Images/Blockchain.jpg'
              text='Blockchain : Want to make your own digital currency?'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;