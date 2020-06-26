import React from 'react';
import { connect } from 'react-redux';

import PreviewCollection from '../../components/preview-collection/preview-collection';

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

const mapStateToProps = ({shop: {collections}}) => ({
    collections
});

export default connect(mapStateToProps)(ShopPage);