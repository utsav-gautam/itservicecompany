import React from 'react';
import '../Card/Card.css';
import CardItem from '../Card/CardItems';

function Services() {
  return(
      <div className='cards'>
      <h1>Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='Images/ServiceImages/automation.jpg'
              text="Automation and AI "
              path='/contact'
            />
            <CardItem
              src='Images/ServiceImages/insights.png'
              text='Analytics and Insights'
              path='/contact'
            />
            <CardItem
              src='Images/ServiceImages/cognitive.jpg'
              text='Cognitive Businees Operation'
              path='/contact'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='Images/ServiceImages/cyber.jpg'
              text="Cyber Security"
              path='/services'
            />
            <CardItem
              src='Images/ServiceImages/consulting.jpg'
              text='Consulting'
              path='/contact'
            />
            <CardItem
              src='Images/ServiceImages/enterprise.jpg'
              text='Enterprise Application'
              path='/contact'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='Images/ServiceImages/iot.jpg'
              text="IOT & Digital Engineering"
              path='/contact'
            />
            <CardItem
              src='Images/ServiceImages/quality.jpg'
              text='Quality Engineering'
              path='/contact'
            />
            <CardItem
              src='Images/ServiceImages/sustainable.jpg'
              text='Sustainable Services'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;