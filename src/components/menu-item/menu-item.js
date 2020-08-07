import React from 'react';
import {withRouter} from 'react-router-dom';
import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitleContainer
} from './menu-item.styles.js';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <MenuItemContainer 
            size={size} 
            onClick={() => history.push(`${match.url}${linkUrl}`)}>
            
            <BackgroundImageContainer
            className='background-image'
            imageUrl={imageUrl} />

            <ContentContainer>
                <ContentTitleContainer>{title.toUpperCase()}</ContentTitleContainer>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem);