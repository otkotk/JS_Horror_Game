"use strict"

const omikuzi_result = {
    dai: "(^o^)大吉(^o^)",
    kiti: "！！！吉！！！",
    tyu: "中吉",
    sho: "小吉",
    sue: "末吉",
    kyo: "凶",
    daikyo: "(*´Д｀)大凶(*´Д｀)"
}
const humHand = document.getElementsByClassName("jankenHand");
let janken_log = document.getElementById("janken_log");
let janken_count = 0;
let janken_win = 0;
let omikuzi = document.getElementById("lucky_o");
let li;

for(let i=0; i<3; i++){
    humHand[i].addEventListener("click", function(){startPlayGame(i)}, false);
}

function startPlayGame(e){
    if(omikuzi.firstElementChild){
        omikuzi.removeChild(omikuzi.firstElementChild);
    }

    console.log(humHand[e]);
    let omikuzi_num = Math.floor(Math.random()*100);
    console.log(omikuzi_num);
    if(omikuzi_num <= 2){
        li = `<li style="font-size:125%">${omikuzi_result.dai}</li>`;
        omikuzi.insertAdjacentHTML("beforeend", li);
    }else if(omikuzi_num <= 8){
        li = `<li style="font-size:125%">${omikuzi_result.kiti}</li>`;
        omikuzi.insertAdjacentHTML("beforeend", li);
    }else if(omikuzi_num <= 35){
        li = `<li style="font-size:125%">${omikuzi_result.tyu}</li>`;
        omikuzi.insertAdjacentHTML("beforeend", li);
    }else if(omikuzi_num <= 62){
        li = `<li style="font-size:125%">${omikuzi_result.sho}</li>`;
        omikuzi.insertAdjacentHTML("beforeend", li);
    }else if(omikuzi_num <= 89){
        li = `<li style="font-size:125%">${omikuzi_result.sue}</li>`;
        omikuzi.insertAdjacentHTML("beforeend", li);
    }else if(omikuzi_num <= 99){
        li = `<li style="font-size:125%">${omikuzi_result.kyo}</li>`;
        omikuzi.insertAdjacentHTML("beforeend", li);
    }else{
        li = `<li style="font-size:125%">${omikuzi_result.daikyo}</li>`;
        omikuzi.insertAdjacentHTML("beforeend", li);
    }

    janken_count++;
    let cpuHand = Math.floor(Math.random()*3)+1;
    console.log(cpuHand);
    if(cpuHand === humHand[e]){
        janken_win = 
        janken_log.insertAdjacentHTML("beforeend", ``)
    }
}

let virusCommando = (e, f, g) =>{
    return window.alert("ウイルスが発生しました")
};