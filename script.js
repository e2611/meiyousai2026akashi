'use strict';
let Presentdate=new Date();
let tuki=Presentdate.getMonth();
let hi=Presentdate.getDate();
let youbi=Presentdate.getDay();
let tuki-device=tuki+1;
console.log(tuki+'月'+hi+'日'+youbi);
document.querySelector('#month-device').textContent=`${tuki-device}月`;
