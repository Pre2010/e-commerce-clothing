import React from 'react';
import {
    PreviewCollectionContainer, 
    TitleContainer, 
    PreviewContainer
} from './preview-collection.styles.js';
import ItemCollection from '../item-collection/item-collection';
import {withRouter} from 'react-router-dom';


const PreviewCollection = ({ title, items, history, match, routeName }) => {
    return (
        <PreviewCollectionContainer>
            <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>
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

export default withRouter(PreviewCollection);