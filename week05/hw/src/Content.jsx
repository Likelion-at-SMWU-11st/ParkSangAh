import React from 'react';
import styled from "styled-components";

const StyledContent = styled.p`
    text-align:center;
    padding: 5px;
    border-color: skyblue;
    color: black;
    font-size: 15px;
    border-radius:15px;
    width: 700px;
    text-align: center;
`

const Content = () => {
    return (
        <div>
            <StyledContent>
            프론트엔드 파트 세미나도 시작해 보고, 2023 여기톤도 참가해 본 도전의 달이었다! 많은 것들을
        경험해 보고 배운 것들을 되돌아 볼 수 있는 의미있는 시간들이었다. 앞으로 배워나가는 것뿐만 아닌 배운 내용들을 스스로 정리해
        보고, 부족한 부분들을 추가적으로 학습하는 노력이 더 필요함을 절실히 느낌... 다음 한 달은 더
        파이팅하기!     
            </StyledContent>
        </div>
    );
};

export default Content;