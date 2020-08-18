import React from 'react';
import {DirectoryMenuContainer} from './directory.styles.js';
import MenuItem from '../menu-item/menu-item';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectoryCategories} from '../../redux/directory/directory.selectors';

const Directory = ({categories}) => {
    return (
        <DirectoryMenuContainer>
            {
                categories.map(({id, ...categoriesProps}) => {
                    return <MenuItem key={id} {...categoriesProps}/>
                })
            }
        </DirectoryMenuContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    categories: selectDirectoryCategories
})

export default connect(mapStateToProps)(Directory);