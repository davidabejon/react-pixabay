import React, { Component } from 'react'

class Imagen extends Component {
    render() {

        const {largeImageURL, previewURL, likes, views} = this.props.imagen;

        return (
            <div className='col-12 col-sd-6 col-md-4 col-lg-3 mb-4'>
                <div className='card'>
                    <img className='card-img-top' src={previewURL} style={{'maxHeight': '200px'}} />
                    <div className='card-body text-center d-grid'>
                        <p className='card-text'>Likes: {likes}</p>
                        <p className='card-text'>Views: {views}</p>
                        <a className='btn btn-outline-primary' href={largeImageURL} target='_blank'>Ver imagen</a>
                    </div>
                </div>
            </div>
        );
    }
} 

export default Imagen;