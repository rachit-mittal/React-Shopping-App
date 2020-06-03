import React from 'react';

import './preview-collection.scss';
import CollectionItem from '../collection-item/collection-item'


const PreviewCollection = ({...collectionData}) => (
    <div className="collection-preview">
        <h2 className="title">{collectionData.title}</h2>
        <div className="preview">
            {collectionData.items
                .filter((item, indx) => indx < 4)
                .map(item => (
                    <CollectionItem key={item.id} item = {item} />
                ))}
        </div>


    </div>

)

export default PreviewCollection;