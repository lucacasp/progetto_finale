import React, { useState, useEffect } from 'react';
import './RelatedProducts.css';
import Item from '../Item/Item';
import { backend_url } from '../../App';

const RelatedProducts = ({ category, id }) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetch(`${backend_url}/relatedproducts`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category: category }),
    })
      .then((res) => res.json())
      .then((data) => setRelated(data));
  }, [category]);

  const scrollLeft = () => {
    document.querySelector('.carousel-inner').scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    document.querySelector('.carousel-inner').scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relatedproducts">
      <h1>Prodotti correlati</h1>
      <hr />
      <div className="carousel-container">
        <button className="carousel-button left" onClick={scrollLeft}>‹</button>
        <div className="carousel-inner">
          {related.map((item, index) =>
            id !== item.id ? (
              <div key={index} className="carousel-item">
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  category={item.category}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </div>
            ) : null
          )}
        </div>
        <button className="carousel-button right" onClick={scrollRight}>›</button>
      </div>
    </div>
  );
};

export default RelatedProducts;
