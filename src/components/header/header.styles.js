import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import img from '../../assets/geo-flower.png';

export const OptionContainerStyles = css`
        padding: 10px 15px;
        cursor: pointer;
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    ${'' /* background-color: white; */}
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    margin-top: 5px;
    background-image: url(${img});
    background-repeat: no-repeat;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`;