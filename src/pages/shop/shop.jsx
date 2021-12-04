import React,{useState} from 'react';
import shopData from './shop.data.js'
import CollectionPreview from '../../component/collection-preview/collection-preview.jsx';
const Shop = () => {
    const collection = shopData;
    const [category, setCategory] = useState('Mens');
    let categories = ['All', 'HATS', 'SNEAKERS', 'JACKETS','WOMENS', 'MENS']
    function check(title){
        {console.log(title)}
    }
    return (
        <div className="shop-page">
            {collection.filter(({id, title, ...otherCollectionProps})=> title=== category || category==='All').map(({id, title, ...otherCollectionProps})=>(
                 <CollectionPreview key = {id} title={title}  {...otherCollectionProps} />
            ))}
        </div>
    );
}

export default Shop;
