import React, { Component } from 'react';
import './Exclusive.scss';
import '../../../styles/App.scss';

class Exclusive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgArray: [
                require('../../../img/exclusive/product1.png'),
                require('../../../img/exclusive/product2.png'),
                require('../../../img/exclusive/product3.png'),
                require('../../../img/exclusive/product4.png'),
                require('../../../img/exclusive/product1.png'),
                require('../../../img/exclusive/product2.png'),
            ]
        };
    }

    render () {
        let imgArray = this.state.imgArray;
        const images = imgArray.map((url, index) => {
            return (
                <img className='item' src={url} key={index} alt='product' />
            )}
        )

        return (
            <div className='items_wrapper'>
                {images}
            </div>
        );
    }
}

export default Exclusive;