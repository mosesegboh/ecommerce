import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title,items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    //the filter and idx below is just to make sure only 4 items come in for now in each category
                    items.filter((item,idx) => idx < 4)
                    .map(({id, ...otheritemProps}) => (
                        <CollectionItem key={id}{...otheritemProps}/>
                    ))
                }
            </div>
    </div>
);

export default CollectionPreview;


