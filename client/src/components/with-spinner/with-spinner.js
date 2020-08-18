import React from 'react';
import { SpinnerOverlayContainer, SpinnerContainer } from './with-spinner.styles';

const WithSpinner = WrappedComponent => {
    const Spinner = ({isLoading, ...otherProps}) => {
    return isLoading ? (
            <SpinnerOverlayContainer>
                <SpinnerContainer />
            </SpinnerOverlayContainer>
        )
        : (
            <WrappedComponent {...otherProps} />
        )
    }
    return Spinner;
};

export default WithSpinner;