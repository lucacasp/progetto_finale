import React from 'react';
import './Item.css'; 
import { Link } from 'react-router-dom';
import { backend_url, currency } from '../../App';

const Item = (props) => {
  return (
    <div className='item-card'>
      <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
        <div className='item-image-wrapper'>
          <img 
            src={`${backend_url}${props.image}`} 
            alt={props.name} 
            className='item-image' 
          />
        </div>
      </Link>
      <div className='item-content'>
        <h3 className='item-name'>{props.name}</h3>
        <div className='item-prices'>
          <div className='item-price-new'>
            {currency}{props.new_price}
          </div>
          {props.old_price && (
            <div className='item-price-old'>
              {currency}{props.old_price}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
