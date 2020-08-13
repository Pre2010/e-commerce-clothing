import React, { Component } from 'react';
import OverviewCollectionContainer from '../../components/collection/overview-collection/overview-collection.container';
import {Route} from 'react-router-dom';
import CollectionPageContainer from '../Collection/collectionPage.container';
import {connect} from 'react-redux';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';

class ShopPage extends Component {

    componentDidMount() {
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
    }

    render() {
        const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={OverviewCollectionContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);