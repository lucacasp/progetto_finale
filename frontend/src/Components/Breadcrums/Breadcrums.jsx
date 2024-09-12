import React from 'react';
import './Breadcrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';
import { Link } from 'react-router-dom';

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className='breadcrums'>
      <Link to="/">Home</Link> <img src={arrow_icon} alt="arrow" /> 
      <Link to={`/${product.category}`}>{product.category}</Link> <img src={arrow_icon} alt="arrow" /> 
      {product.name}
    </div>
  );
};

export default Breadcrums;
