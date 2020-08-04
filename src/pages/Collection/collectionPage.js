import React from 'react';
import './collectionPage.scss';
import {connect} from 'react-redux';
import ItemCollection from '../../components/collection/item-collection/item-collection';
import {selectCollection} from '../../redux/shop/shop.selectors';

const Collection = ({collection}) => {
    const {title, items} = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => (
                        <ItemCollection key={item.id} item={item} />
                        )
                    )
                }
            </div>
        </div>
    );
};

// state is the overall reducer state, ownProps is the props of the component we are wrapping with our connect.
// we pass the props to the selector method, selectCollection, since it needs a part of the state
// dependant on the URL param
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);