import styled from 'styled-components';

export const PreviewCollectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const TitleContainer = styled.h1`
    font-size: 28px;
    margin: 0 auto 25px;
    cursor: pointer;

    &:hover {
        color: gray;
    }
`;

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;