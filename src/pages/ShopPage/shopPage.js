import React, { Component } from 'react';
import SHOP_DATA from './shopPage.data';
import PreviewCollection from '../../components/collection/preview-collection/preview-collection';

class ShopPage extends Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
            {
                collections.map(({id, ...collectionProps}) => (
                    <PreviewCollection key={id} {...collectionProps} />
                ))
            }
            </div>
        )
    }
}

export default ShopPage;