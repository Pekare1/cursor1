// const boxElem = document.getElementById('box1')
// const pointerElem = document.getElementById('pointer1')

const cursorM = document.querySelector(".smth");
let widt = 200;
let heig = 200;

window.addEventListener("mousemove", (e) => {
    cursorM.style.height = heig + "px";
    cursorM.style.width = widt + "px";

    cursorM.classList.add("moveEl");
    cursorM.style.top = e.clientY - heig / 2 + "px"
    cursorM.style.left = e.clientX - widt / 2 + "px"
})
