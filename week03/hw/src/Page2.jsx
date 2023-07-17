import React from 'react';

const Page2 = () => {
    const food1 = "빙수";
    const food2 = "삼계탕";

    return(
        <>
            <h3> - 음식편 -</h3>
            <>
                <p>여름에 {food1}는 필수! 같이 빙수 먹으러 가욥...</p>
                <p>더위는 뜨거운 음식으로 이겨낸다 이열치열 {food2}!!! 생각만 해도 덥긴 하네요.</p>
            </>
        </>
    );
};

export default Page2;