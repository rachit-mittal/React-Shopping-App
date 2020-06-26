import React from 'react';
import { connect } from 'react-redux';

import PreviewCollection from '../../components/preview-collection/preview-collection';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

const ShopPage = ({collections}) =>  {
 
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

const mapStateToProps = state => ({
    collections: selectShopCollections(state)
});

export default connect(mapStateToProps)(ShopPage);