import React from 'react';
import styled from "styled-components";

const StyledTitle = styled.h3`
    text-align:center;
    padding: 5px;
    background-color: white;
    color: black;
    font-size: 25px;
`

const Title = () => {
    return (
        <div>
            <StyledTitle>
            7월의 회고록! 
            </StyledTitle>
        </div>
    );
};

export default Title;