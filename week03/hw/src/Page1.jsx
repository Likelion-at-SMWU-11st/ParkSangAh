import React from 'react';

const Page1 = () => {
    const place1 = "바다";
    const place2 = "해커톤";

    return(
        <div>
            <h3> - 장소편 -</h3>
            <>
                <p>여름에 {place1}는 꼬옥 가야지!</p>
                <p>멋사 중 가장 큰 행사! {place2}도 꼭 가서 유익한 경험들 많이 쌓기 ^.^</p>
            </>
        </div>
    );
};

export default Page1;