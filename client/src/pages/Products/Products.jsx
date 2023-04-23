import React from 'react'
import "./Products.scss"
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { useState } from 'react'

const Products = () => {


const catId = parseInt(useParams().id)


const [selectedSubCats,setSelectedSubCats] = useState([]);

const {data}=useFetch(`/sub-categories?[filters][categories][id]=${catId}`)


const handleChange = (e)=>{
  const value = e.target.value;
  const isChecked = e.target.checked;

  setSelectedSubCats(
    isChecked 
    ? [...selectedSubCats,value]
    : selectedSubCats.filter((item)=>item !== value)
  );
};

  

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Our Products...</h2>
          {data?.map((item)=>(
          <div className="inputItem" key={item.id}>
            <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            
          </div>
          
          ))}
        </div>
      </div>
      <div className="right">
        <List catId={catId} subCats={selectedSubCats}  />
      </div>
    </div>
  )
}

export default Products