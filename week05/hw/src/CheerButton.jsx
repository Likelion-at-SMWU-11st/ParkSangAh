import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
    text-align:center;
    padding: 5px;
    background-color: white;
    color: black;
    font-size: 15px;
`
const CheerButton = () => {
    return (
        <div>
            <StyledButton>💪 응원해요</StyledButton>
        </div>
    );
};

export default CheerButton;