import React from 'react';
import './collectionItem.css'
const CollectionItem = ({ id, name, price, available, placeOrder,  imageUrl }) => {
    const [quantity, updateQuantity]= React.useState(1);
    const [disable, setDisable]= React.useState(available);
    const handleChange= e=>{
        if(available ===1 )
            updateQuantity(e.target.value);
    }

    return(   
    <div className= {`collection-item ${available===1?'':'disabled'}`}>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className={`oos ${available===1?'hidden':''}`} >
            Out of Stock!
        </div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <div className="button-container">
        <input type="number" className="quantity" value={quantity} onChange={handleChange} />
        <div className={`custom-button ${available===1?'':'disabled'}`} onClick= {()=>placeOrder(id, name, quantity, price)} >
            Buy Now
        </div>
      </div>
      
    </div>
)};
export default CollectionItem;
