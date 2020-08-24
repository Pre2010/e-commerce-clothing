import styled from 'styled-components';

export const SignInSignUpContainer = styled.div`
    width: 850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    padding: 0 10px 10px 10px;
    background-color: white;

    @media screen and (max-width: 800px) {
        display: grid;
        width: 100vw;
        align-items: center;
        padding: 0px 0px;
    }
`;