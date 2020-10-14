import React, { Component } from 'react';
import { connect } from 'react-redux';

import PreviewCollection from '../../components/preview-collection/preview-collection';
import { getShopRequest } from '../../redux/shop/shop.actions'


class ShopPage extends Component {
  
    componentDidMount() {
        this.props.getShopRequest();
    };

    render() {
        const list = this.props.collections;
        console.log("shop page list", list);
        
        let itemsToRender;

        if(list) {
            itemsToRender = list.map(({id, ...otherCollectionProps}) => (
                <PreviewCollection  key={id} {...otherCollectionProps}/>
            ))

        };
        
        return (
            <div className = "shop-page">{itemsToRender}</div>
        )
        
    }


}


const mapStateToProps = ({shop: {collections} }) => ({
    collections
});

export default connect(mapStateToProps, {getShopRequest})(ShopPage);