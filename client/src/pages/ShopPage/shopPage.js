import React, { useEffect } from 'react';
import OverviewCollectionContainer from '../../components/collection/overview-collection/overview-collection.container';
import {Route} from 'react-router-dom';
import CollectionPageContainer from '../Collection/collectionPage.container';
import {connect} from 'react-redux';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';

const ShopPage = ({fetchCollectionsStart, match}) => {
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart]);

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={OverviewCollectionContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);