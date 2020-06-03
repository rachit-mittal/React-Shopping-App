import React, { Component } from 'react';

import shopData from './shop.data.js';
import PreviewCollection from '../../components/preview-collection/preview-collection'



class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: shopData
        }
    }

    render() {

        const {collections} = this.state;
        return (
            <div className = "shop-page">
            {
                collections.map (({id, ...otherCollectionProps}) => (
                    <PreviewCollection  key={id} {...otherCollectionProps}/>
                ))
            }
            </div>

        )
    }


}

export default ShopPage;