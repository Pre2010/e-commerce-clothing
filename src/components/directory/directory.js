import React, { Component } from 'react';
import './directory.scss';

import CATEGORIES_DATA from './directory.data';
import MenuItem from '../menu-item/menu-item';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            categories: CATEGORIES_DATA
        }
    }
    
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.categories.map(({id, ...categoriesProps}) => {
                        return <MenuItem key={id} {...categoriesProps}/>
                    })
                }
            </div>
        );
    }
}

export default Directory;