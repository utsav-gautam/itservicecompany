import React from 'react';
import '../Card/Card.css';
import CardItem from '../Card/CardItems';

function Products() {
  return(
      <div className='cards'>
      <h1>Products</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='Images/ProductImages/lab.png'
              text="DR Labz : Let you leverage the online tech "
              path='/contact'
            />
            <CardItem
              src='Images/ProductImages/store.png'
              text="DR Store : India's own E-Commerse"
              path='/contact'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='Images/ProductImages/collab.webp'
              text="DR Share : Collab with team in real time"
              path='/contact'
            />
            <CardItem
              src='Images/ProductImages/expert.jfif'
              text='DR Career : Learn new tech from tech experts'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;