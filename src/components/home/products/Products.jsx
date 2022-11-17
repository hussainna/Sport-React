import React from 'react'
import { companyData, productData } from '../../data/Data'
import './products.css'
function Products() {
  return (
    <div className='products'>
        <h3>Bestsellers Products</h3>
        <div className="company C-flex">
            {companyData.map((item,idx)=>(
                <label key={idx} style={item.background==='orange'?{backgroundColor:'#ff6f61',color:'#fff',border:'none'}:{backgroundColor:'white'}}>{item.text}</label>
            ))}
        </div>
        <div className="productsItems gird-4">
          {productData.map((item,idx)=>(
            <div className="box" key={idx}>
              <img src={item.image} alt="" />
              {/* <span style={item.new==='new'?{display:'none'}:{color:'#fff'}}>New</span> */}
              <p>{item.text}</p>
              <h4>{item.name}</h4>
              <span>${item.price}</span>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Products
