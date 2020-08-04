import React from 'react';
import './directory.scss';
import MenuItem from '../menu-item/menu-item';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectoryCategories} from '../../redux/directory/directory.selectors';

const Directory = ({categories}) => {
    return (
        <div className='directory-menu'>
            {
                categories.map(({id, ...categoriesProps}) => {
                    return <MenuItem key={id} {...categoriesProps}/>
                })
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    categories: selectDirectoryCategories
})

export default connect(mapStateToProps)(Directory);