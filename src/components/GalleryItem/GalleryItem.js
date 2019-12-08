import React, { Component } from 'react';

class GalleryItem extends Component {
    render() {
        const htmlArray = this.props.items.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item}</td>
                </tr>
            )
        });

        return(
            <div>
                {/* <img alt="goat pic" src="images/goat_small.jpg"/> */}
                {htmlArray}
            </div>
        )
    }
}

export default GalleryItem; 