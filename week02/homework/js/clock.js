const clock=document.querySelector("h2#clock");

function getClock() {
    const date=new Date();
    const years=date.getFullYear();
    const months=date.getMonth()+1;
    const dates=date.getDate();
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    console.log(`${minutes}`)
    clock.innerHTML= `현재 시각은 ${years}년 ${months}월 ${dates}일 ${hours}시 ${minutes}분 ${seconds}초입니다.`;
}

getClock();
setInterval(getClock,1000);
