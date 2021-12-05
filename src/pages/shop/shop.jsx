import React,{useState} from 'react';
import shopData from './shop.data.js'
import CollectionPreview from '../../component/collection-preview/collection-preview.jsx';
const Shop = () => {
    const collection = shopData;
    const [category, setCategory] = useState('All');
    let categories = ['All', 'Hats', 'Sneakers', 'Jackets','Womens', 'Mens']
    return (
        <div className="shop-page">
            <div className="category-bar">
                <h1>Select Category</h1>
                <select  value={category} onChange={(e)=> setCategory(e.target.value)}>
                    <option value="All" selected>All</option>
                    <option value="Hats">Hats</option>
                    <option value="Sneakers">Sneakers</option>
                    <option value="Jackets">Jackets</option>
                    <option value="Womens">Womens</option>
                    <option value="Mens">Mens</option>
                </select>
            </div>
            {collection.filter(({id, title, ...otherCollectionProps})=> title=== category || category==='All').map(({id, title, ...otherCollectionProps})=>(
                 <CollectionPreview key = {id} title={title}  {...otherCollectionProps} />
            ))}
        </div>
    );
}

export default Shop;
