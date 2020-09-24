"use strict"


let omikuzi = document.getElementById("omikuzi");
let omikuzi_p;
let janken_button = document.getElementsByClassName("janken_button");
let janken_log = document.getElementById("janken_log");
let virus_button = document.getElementById("virus_button");
let nekoneko = document.getElementById("nekoneko");


for(let i=0; i<3; i++){
  janken_button[i].addEventListener("click", function(){janken(i)}, false);
}


let game_data = {
  janken_hand:{
    GU: "グー",
    CH: "チョキ",
    PA: "パー",
  },
  janken_count_list:{
    JANKEN_COUNT: 0,
    WIN_COUNT: 0,
    WIN_HIT: 0
  },
  omikuzi_text:{
    DAI: "(^o^)大吉(^o^)",
    KIT: "吉",
    TYU: "中吉",
    SHO: "小吉",
    SUE: "末吉",
    KYO: "凶",
    DAIKYOU: "大凶💦"
  },
};

function janken(hum_hand){
  if(omikuzi.firstElementChild){
    omikuzi.removeChild(omikuzi.firstElementChild);
  }
  let omikuzi_num = Math.floor(Math.random()*100);
  if(omikuzi_num <= 3){
    omikuzi_p = `<p style="width:200px; text-align:center; font-size:200%;">${game_data.omikuzi_text.DAI}</p>`;
    omikuzi.insertAdjacentHTML("beforeend", omikuzi_p);
  }else if(omikuzi_num <= 12){
    omikuzi_p = `<p style="width:200px; text-align:center; font-size:200%;">${game_data.omikuzi_text.KIT}</p>`;
    omikuzi.insertAdjacentHTML("beforeend", omikuzi_p);
  }else if(omikuzi_num <= 38){
    omikuzi_p = `<p style="width:200px; text-align:center; font-size:200%;">${game_data.omikuzi_text.TYU}</p>`;
    omikuzi.insertAdjacentHTML("beforeend", omikuzi_p);
  }else if(omikuzi_num <= 66){
    omikuzi_p = `<p style="width:200px; text-align:center; font-size:200%;">${game_data.omikuzi_text.SHO}</p>`;
    omikuzi.insertAdjacentHTML("beforeend", omikuzi_p);
  }else if(omikuzi_num <= 92){
    omikuzi_p = `<p style="width:200px; text-align:center; font-size:200%;">${game_data.omikuzi_text.SUE}</p>`;
    omikuzi.insertAdjacentHTML("beforeend", omikuzi_p);
  }else if(omikuzi_num <= 99){
    omikuzi_p = `<p style="width:200px; text-align:center; font-size:200%;">${game_data.omikuzi_text.KYO}</p>`;
    omikuzi.insertAdjacentHTML("beforeend", omikuzi_p);
  }else{
    omikuzi_p = `<p style="width:200px; text-align:center; font-size:200%;">${game_data.omikuzi_text.DAIKYOU}</p>`;
    omikuzi.insertAdjacentHTML("beforeend", omikuzi_p);
  }
  
  try{
    if(game_data.janken_count_list.WIN_HIT < 5){
      let cpu_hand = Math.floor(Math.random()*3);
      if(cpu_hand === hum_hand){
        janken_log.value = `あいこ 連勝記録:${game_data.janken_count_list.WIN_HIT} 勝率:${(game_data.janken_count_list.WIN_COUNT/game_data.janken_count_list.JANKEN_COUNT).toFixed(2)} 試行回数:${(game_data.janken_count_list.JANKEN_COUNT)+1}\n` + janken_log.value;
        console.log(`勝ち数:${game_data.janken_count_list.WIN_COUNT}`, `カウント:${game_data.janken_count_list.JANKEN_COUNT}`);
      }else if((cpu_hand===0 && hum_hand===2) || (cpu_hand===1 && hum_hand===0) || (cpu_hand===2 && hum_hand===1)){
        game_data.janken_count_list.JANKEN_COUNT++;
        game_data.janken_count_list.WIN_COUNT++;
        game_data.janken_count_list.WIN_HIT++;
        switch(game_data.janken_count_list.WIN_HIT){
          case 1: nekoneko.style.opacity = "0.02"; break;
          case 2: nekoneko.style.opacity = "0.04"; break;
          case 3: nekoneko.style.opacity = "0.08"; break;
          case 4: nekoneko.style.opacity = "0.09"; break;
          case 5: nekoneko.style.opacity = "0.1"; break;
          default: nekoneko.style.opacity = "1";
        }
        console.log(`勝ち数:${game_data.janken_count_list.WIN_COUNT}`, `カウント:${game_data.janken_count_list.JANKEN_COUNT}`);
        janken_log.value = `勝ち！ 連勝記録:${game_data.janken_count_list.WIN_HIT} 勝率:${(game_data.janken_count_list.WIN_COUNT/game_data.janken_count_list.JANKEN_COUNT).toFixed(2)} 試行回数:${game_data.janken_count_list.JANKEN_COUNT}\n` + janken_log.value;
      }else{
        game_data.janken_count_list.JANKEN_COUNT++;
        game_data.janken_count_list.WIN_HIT = 0;
        console.log(`勝ち数:${game_data.janken_count_list.WIN_COUNT}`, `カウント:${game_data.janken_count_list.JANKEN_COUNT}`);
        janken_log.value = `負け！ 連勝記録:${game_data.janken_count_list.WIN_HIT} 勝率:${(game_data.janken_count_list.WIN_COUNT/game_data.janken_count_list.JANKEN_COUNT).toFixed(2)} 試行回数:${game_data.janken_count_list.JANKEN_COUNT}\n` + janken_log.value;
      }
    }else{
      throw new Error("５連勝達成！！！　すごい！！！");
    }
  }catch(error){
    window.alert(error);
    nekoneko.style.opacity = "1";
    let title = document.getElementsByClassName("title");
    title[0].textContent = ` >virusCommando();`;
    title[1].textContent = ` >関数の引数に適切な値を入力すると・・・？`
    janken_log.value = `virus function argument is Omen.\n` + janken_log.value;
    // omikuzi.firstElementChild.style.fontSize = "500%";
    omikuzi.firstElementChild.style.width = "360px"
    // omikuzi.firstElementChild.style.textAlign = "center";
    anime({
      targets: nekoneko,
      rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
      },
      scale: {
        value: 2,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
      },
      delay: 250 // All properties except 'scale' inherit 250ms delay
    });
    anime({
      targets: janken_log,
      scale: 1,
      rotate: '1turn',
      duration: 30000,
      loop: true
    });
    anime({
      targets: omikuzi.firstElementChild,
      scale: [
        {value: .01, easing: 'easeOutSine', duration: 100},
        {value: 2.6, easing: 'easeInOutQuad', duration: 6666}
      ],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
    });
  }
}
let current_url = location.href;
let noroi_url = current_url.replace("index.html", "");
// console.log(noroi_url);
virus_button.addEventListener("click", function(){
var win = window.open(noroi_url + '呪呪呪/666.html', 'newtab');  // 新しいタブで開く
win = window.open(noroi_url + '呪呪呪/666.html', 'newwindow', 'width=1920,height=1080');  // 新しいウィンドウがポップアップ
console.log(win); // ウィンドウオブジェクト
}, false);

let virus_count = 0;
function virusCommando(oops){
  if(oops === 666){
    window.open(noroi_url + '/gameClear.html');
  }else{
    virus_count++;
    if(virus_count < 2){
      let h_c_container = document.getElementsByClassName("container");
      for(let i=0; i<h_c_container.length; i++){
        h_c_container[i].style.backgroundColor = "red";
        document.querySelector("body > header").style.backgroundColor = "red";
        document.querySelector("body > header").style.borderBottom = "red 6px solid";
        document.querySelector("body > footer").style.backgroundColor = "red";
      }
      document.body.style.backgroundColor = "red";
      window.alert("不正なコマンドです！！！");
      virus_button.style.display = "block";
      virus_button.style.zIndex = "666";
      virus_button.style.float = "right";
      console.log(`!!!!!!!!!!!!!!!!!\n!!!!!warning!!!!!\n!!!!不正なコマンド!!!\n!!!!!warning!!!!!\n!!!!!!!!!!!!!!!!!\nあなたが入力した値 -> ${oops}`);
    }else if(virus_count < 5){
      console.log(`不正なコマンドです！！！\nこのページをよく観察してください。何かが変化しています。\nそこから正しい引数を見つけてください。`)
    }else{
      console.log("ヒントは、テキストボックスです。")
    }
  }
}