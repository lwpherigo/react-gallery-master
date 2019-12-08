import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        return(
            <div>
                <GalleryItem items={this.props.items} />
            </div>
        )
    }
}

export default GalleryList;