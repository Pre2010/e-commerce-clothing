import React from 'react';
import {OverViewCollectionContainer} from './overview-collection.styles.js';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../../redux/shop/shop.selectors';
import PreviewCollection from '../preview-collection/preview-collection';

const OverviewCollection = ({collections}) => {
    return (
        <OverViewCollectionContainer>
        {    
            collections.map(({id, ...collectionProps}) => (
                <PreviewCollection key={id} {...collectionProps} />
            ))
        }
        </OverViewCollectionContainer>
    )
};


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(OverviewCollection);