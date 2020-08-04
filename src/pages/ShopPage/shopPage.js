import React from 'react';
import OverviewCollection from '../../components/collection/overview-collection/overview-collection';
import {Route} from 'react-router-dom';
import CollectionPage from '../Collection/collectionPage';

const ShopPage = ({match}) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={OverviewCollection} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}


export default ShopPage;