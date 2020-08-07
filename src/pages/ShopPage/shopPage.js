import React, { Component } from 'react';
import OverviewCollection from '../../components/collection/overview-collection/overview-collection';
import {Route} from 'react-router-dom';
import CollectionPage from '../Collection/collectionPage';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends Component {

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        // reference to our 'collections' collection in Firestore
        const collectionRef = firestore.collection('collections');
        
        // whenever the collectionRef changes or when this is ran for the first time,
        // we will get a snapshot of the code of our collections object array at the time 
        // this code renders.
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
        });
    }

    render() {
        const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={OverviewCollection} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => 
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);