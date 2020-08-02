import React from 'react';
import './preview-collection.scss';
import ItemCollection from '../item-collection/item-collection';


const PreviewCollection = ({title, items}) => {
    return (
        <div className='preview-collection'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                    .filter((item, index) => index < 4)
                    .map((item) => (
                        <ItemCollection key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection;