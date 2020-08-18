import React from 'react';
import {
    GroupContainer,
    FormInputContainer,
    FormInputLabelContainer
} from './form-input.styles.js';

const FormInput = ({handleOnChange, label, ...otherProps}) => {
    return (
        <GroupContainer>
            <FormInputContainer onChange={handleOnChange} {...otherProps} />
            {
                label ? 
                (<FormInputLabelContainer className={otherProps.value.length ? 'shrink' : ''}>
                    {label}
                </FormInputLabelContainer>)
                : null
            }
        </GroupContainer>
    )
}

export default FormInput;