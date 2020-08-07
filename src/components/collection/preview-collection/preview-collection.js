import React from 'react';
import {
    PreviewCollectionContainer, 
    TitleContainer, 
    PreviewContainer
} from './preview-collection.styles.js';
import ItemCollection from '../item-collection/item-collection';


const PreviewCollection = ({title, items}) => {
    return (
        <PreviewCollectionContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <PreviewContainer>
                {
                    items
                    .filter((item, index) => index < 4)
                    .map((item) => (
                        <ItemCollection key={item.id} item={item} />
                    ))
                }
            </PreviewContainer>
        </PreviewCollectionContainer>
    )
}

export default PreviewCollection;