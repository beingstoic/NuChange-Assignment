import React from 'react'
import CollectionItem from '../collection-item/collectionItem'
import './collection-preview.css'
const CollectionPreview = ({title, items}) => {
    
    const placeOrder = (id, name, quantity, price) =>{
        const orderDetails={};
        orderDetails["OrderId"]= id;
        orderDetails["Name"]= name;
        orderDetails["Quantity"] = quantity;
        orderDetails["TotalPrice"]= price*quantity;
        alert(JSON.stringify(orderDetails));
    }
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item, idx)=>idx<4)
                       .map(({id, ...otherItemProps})=>(
                           <CollectionItem key={id} placeOrder ={placeOrder} {...otherItemProps} />
                ))}
            </div>
        </div>
    )
}
export default CollectionPreview;