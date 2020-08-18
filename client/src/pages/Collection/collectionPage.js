import React from 'react';
import {CollectionPageContainer, TitleContainer, ItemsContainer, ItemCollectionContainer} from './collectionPage.styles';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';

const Collection = ({collection}) => {
    const {title, items} = collection;
    return (
        <CollectionPageContainer>
            <TitleContainer>{title}</TitleContainer>
            <ItemsContainer>
                {
                    items.map(item => (
                        <ItemCollectionContainer key={item.id} item={item} />
                        )
                    )
                }
            </ItemsContainer>
        </CollectionPageContainer>
    );
};

// state is the overall reducer state, ownProps is the props of the component we are wrapping with our connect.
// we pass the props to the selector method, selectCollection, since it needs a part of the state
// dependant on the URL param
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);