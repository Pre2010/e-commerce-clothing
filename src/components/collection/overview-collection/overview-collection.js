import React from 'react';
import './overview-collection.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../../redux/shop/shop.selectors';
import PreviewCollection from '../preview-collection/preview-collection';

const OverviewCollection = ({collections}) => {
    return (
        <div className='overview-collection'>
        {    
            collections.map(({id, ...collectionProps}) => (
                <PreviewCollection key={id} {...collectionProps} />
            ))
        }
        </div>
    )
};


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(OverviewCollection);