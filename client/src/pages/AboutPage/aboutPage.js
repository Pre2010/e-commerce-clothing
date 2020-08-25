import React from 'react';
import {AboutContainer, AboutTextContentContainer} from './aboutPage.styles';

const AboutPage = () => {
    return (
        <AboutContainer>
            <AboutTextContentContainer>
                This application is an example of how to create an e-commerce site and how it would look using React with Stripe API.
            </AboutTextContentContainer>
        </AboutContainer>
    )
};

export default AboutPage;