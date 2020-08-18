import React from 'react';
import {
    ItemCollectionContainer,
    ImageContainer,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer,
    CustomButtonContainer
} from './item-collection.styles.js';
import {connect} from 'react-redux';
import {addCartItem} from '../../../redux/cart/cart.actions';

const ItemCollection = ({item, addCartItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <ItemCollectionContainer>
            <ImageContainer
                className='image'
                imageUrl={imageUrl}
            />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionFooterContainer>
            <CustomButtonContainer onClick={() => addCartItem(item)} inverted>
            Add to cart 
            </CustomButtonContainer>
        </ItemCollectionContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(ItemCollection);