import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            numOfLikes: null,
        }
    }

    clickForDescription = (event) => {
        this.setState({
            show: !this.state.show,
        })
    }

    clickLike = (event) => {
        this.setState({
            numOfLikes: this.state.numOfLikes + 1
        })
    }

    render() {
        let showClass;

        if (this.state.show) {
            showClass = 'isShowing';
        } else if (!this.state.show) {
            showClass = 'isHidden';
        }

        return(
            <div>
                <div className='container'>
                    <img alt='Photo of a goat.' src={this.props.item.path} onClick={this.clickForDescription} />
                    <p className={showClass}>{this.props.item.description}</p><br></br>
                </div>
                    <button onClick={this.clickLike}>Like</button>
                    <div>Likes: {this.state.numOfLikes}</div>     
            </div>
        )
    }
}

export default GalleryItem; 