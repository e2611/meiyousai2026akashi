'use strict';
let Presentdate=new Date();
let tuki=Presentdate.getMonth();
let hi=Presentdate.getDate();
let youbi=Presentdate.getDay();
let tukidevice=tuki+1;
console.log(tukidevice+'月'+hi+'日'+youbi);
document.querySelector('#month-device').textContent=`${tukidevice}月`;
