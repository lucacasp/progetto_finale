import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero/Hero'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {


  const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = () => { 
    fetch('http://localhost:4000/newcollections') 
            .then((res) => res.json()) 
            .then((data) => setNewCollection(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])


  return (
    <div>
      <Hero/>
      <NewCollections data={newcollection}/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
