import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        const htmlArray = this.props.galleryItems.map((item, index) => {
            return <GalleryItem key={index} item={item} />
        });

        return(
            <div>
                {htmlArray}
            </div>
        )
    }
}

export default GalleryList;