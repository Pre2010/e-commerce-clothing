import styled, {css} from 'styled-components';
import ItemCollection from '../../components/collection/item-collection/item-collection';

const ItemStyles = css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
`;

export const CollectionPageContainer = styled.div` 
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        align-items: center;
    }
`;

export const TitleContainer = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;

`;

export const ItemsContainer = styled.div`
    ${ItemStyles};

    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
    }
`;

export const ItemCollectionContainer = styled(ItemCollection)`
    ${ItemStyles};
    margin-bottom: 30px;
`;
