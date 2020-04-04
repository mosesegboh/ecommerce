import React from 'react';
// import { render } from '@testing-library/react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

//this will be a class because we want to store the state value of those components we created in the menu
class Directory extends React.Component {
    constructor(){
        super();
// the state of this section is an object that contains a title and an image url that points somewhere else
        this.state = {
             sections : [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
            ]
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {/* we map through our sections */}
                {/* the synta below is thesame thing as mapping,its just the short form instaed of typing section everytime */}
                {/* check video 68,instead of doing mapping with names of linke over and over again,we used a short cut below */}
                {/* we spread out the other section props using the shorthand below othersectionpros but the id remains thesame */}
                {this.state.sections.map(({id, ...otherSectionProps})=> (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
            </div>
        );
    }
}

export default Directory;