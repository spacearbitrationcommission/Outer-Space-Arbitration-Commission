// TYPING EFFECT

let i = 0;
const str = '人类的征途是星辰大海，太空仲裁委员会（Outer Space Arbitration Commission）起源于人类大星际时代黎明期，伴随着太空意识的觉醒，为了渴求着太空探索的人们，2021年1月6日太空仲裁委员会被七名联合创始仲裁员在卫星上注册设立，在联合国《外太空条约》下，相聚在一起，为了实现拓展人类生存空间这个使命，贡献于人类社会。';
const speed = 100;

function Typing() {
  if (i < str.length) {
    document.getElementById('hero').innerHTML += str.charAt(i);
    i++;
    setTimeout(Typing, speed);
  }
}

/* ICON RAIN */

function CreateIcon() {
  const box = document.createElement('img');
  box.setAttribute('src', './icons/star.svg');
  box.style.position = 'absolute';
  box.style.left = Math.random() * 98 + '%';
  box.style.animationDuration = Math.random() * 2 + 3 + 's';
  document.getElementById('rainContainer').appendChild(box);

  setTimeout(() => {
    box.remove();
  }, 2000);
}
setInterval(CreateIcon, 70);

// NAV MENU

function OpenNav() {
  document.getElementById('myNav').style.width = '100%';
}

function CloseNav() {
  document.getElementById('myNav').style.width = '0%';
}
