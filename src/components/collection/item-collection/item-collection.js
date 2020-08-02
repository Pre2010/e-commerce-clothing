import React from 'react';
import './item-collection.scss';
import CustomButton from '../../custom-button/custom-button';
import {connect} from 'react-redux';
import {addCartItem} from '../../../redux/cart/cart.actions';

const ItemCollection = ({item, addCartItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <div className='item-collection'>
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
            <CustomButton onClick={() => addCartItem(item)} inverted>
            Add to cart 
            </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(ItemCollection);