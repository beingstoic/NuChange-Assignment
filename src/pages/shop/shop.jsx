import React,{useState} from 'react';
import shopData from './shop.data.js'
import CollectionPreview from '../../component/collection-preview/collection-preview.jsx';
const Shop = () => {
    const collection = shopData;
    return (
        <div className="shop-page">
            {collection.map(({id, ...otherCollectionProps})=>(
                <CollectionPreview key = {id} {...otherCollectionProps} />
            ))}
        </div>
    );
}

export default Shop;
