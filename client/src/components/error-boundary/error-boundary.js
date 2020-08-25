import React, { Component } from 'react';
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageTextContainer} from './error-boundary.styles';

class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        }
    }
    static getDerivedStateFromError(error) {
        // process the error
        return {hasErrored: true}
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/Q2BAOd2.png' />
                    <ErrorImageTextContainer>
                        This page is not on the Page or is broken.
                    </ErrorImageTextContainer>
                </ErrorImageOverlay>
            )
        } 
        return this.props.children;
    }
}

export default ErrorBoundary;