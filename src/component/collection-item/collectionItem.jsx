import React from 'react';
import './collectionItem.css'
const CollectionItem = ({ id, name, price, imageUrl }) => {
    const [quantity, updateQuantity]= React.useState(1);
   
    return(
    
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <div className="button-container">
        <input type="number" className="quantity" value={quantity} onChange={e=>updateQuantity(e.target.value)} />
        <div className="custom-button" >
            Add to cart
        </div>
      </div>
      
    </div>
)};
export default CollectionItem;
