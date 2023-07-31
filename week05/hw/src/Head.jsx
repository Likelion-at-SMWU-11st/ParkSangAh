import React from 'react';
import styled from "styled-components";

const StyledLogo = styled.p`
    text-align:center;
    padding: 5px;
    background-color: skyblue;
    color: white;
    font-weight: bold;
    font-size: 35px;
`

const Head = () => {
    return (
        <StyledLogo>📖 My Diary ✍</StyledLogo>
    );
};

export default Head;