const passcode = "0301";
const pages = ["hal1","hal2","profil","ucapan","maaf","galeri","journal"];

function show(id){
    pages.forEach(p=>document.getElementById(p).classList.remove("show"));
    document.getElementById(id).classList.add("show");
}

function cekPass(btn){
    sparkle(btn);
    const input = document.getElementById("pass");
    if(input.value === passcode){
        show("hal2");
        document.getElementById("bgmusic").play();
        confetti();
    }else{
        input.classList.add("shake");
        document.getElementById("clueText").innerText="Clue: 0**1 (tgl lahirmu) 💕";
        setTimeout(()=>input.classList.remove("shake"),400);
    }
}

function go(page,btn){
    sparkle(btn);
    show(page);
}

function back(btn){
    sparkle(btn);
    show("hal2");
}

/* ✨ Sparkle Effect */
function sparkle(btn){
    for(let i=0;i<6;i++){
        const s=document.createElement("span");
        s.innerHTML="✨";
        s.style.position="absolute";
        s.style.left=Math.random()*100+"%";
        s.style.top=Math.random()*100+"%";
        btn.appendChild(s);
        setTimeout(()=>s.remove(),600);
    }
}

/* 🎉 Confetti */
function confetti(){
    for(let i=0;i<40;i++){
        const c=document.createElement("div");
        c.innerHTML="💖";
        c.style.position="fixed";
        c.style.left=Math.random()*100+"vw";
        c.style.top="-10px";
        c.style.fontSize="20px";
        c.style.animation="float 3s linear";
        document.body.appendChild(c);
        setTimeout(()=>c.remove(),3000);
    }
}

/* 💕 Floating Love & Star */
const floating=document.querySelector(".floating");
setInterval(()=>{
    const s=document.createElement("span");
    s.innerHTML=Math.random()>0.5?"💗":"✨";
    s.style.left=Math.random()*100+"vw";
    s.style.fontSize=(12+Math.random()*20)+"px";
    floating.appendChild(s);
    setTimeout(()=>s.remove(),8000);
},600);

/* Bubble Generator */
const bubbleContainer = document.querySelector(".bubble-container");

function createBubble(){
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  const size = Math.random() * 40 + 10;
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";

  bubble.style.left = Math.random() * 100 + "vw";
  bubble.style.animationDuration = Math.random() * 6 + 4 + "s";

  bubbleContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 10000);
}

/* Interval bubble */
setInterval(createBubble, 500);
