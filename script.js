'use strict';
let Presentdate=new Date();
let tuki=Presentdate.getMonth();
let hi=Presentdate.getDate();
let youbi=Presentdate.getDay();
let tukidevice=tuki+1;
console.log(tukidevice+'月'+hi+'日'+youbi);
document.getElementById('month-display').textContent = `${tukidevice}月`;
let youbidevice;
if(youbi==1){
  youbidevice="月曜日";
  document.getElementById('monday').textContent=`${hi}(月)`;
  hi.setDate(Presentdate.getDate()+1);
  document.getElementById('tuesday').textContent=`${hi}(火)`;
}
if(youbi==2){
  youbidevice="火曜日";
  document.getElementById('tuesday').textContent=`${hi}(火)`;
}
if(youbi==3){
  youbidevice="水曜日";
  document.getElementById('wednesday').textContent=`${hi}(水)`;
  hi.setDate(Presentdate.getDate()+1);
  document.getElementById('tuesday').textContent=`${hi}(火)`;
}
if(youbi==4){
  youbidevice="木曜日";
  document.getElementById('thursday').textContent=`${hi}(木)`;
}
if(youbi==5){
  youbidevice="金曜日";
  document.getElementById('friday').textContent=`${hi}(金)`;
}
if(youbi==6){
  youbidevice="土曜日";
}
if(youbi==0){
  youbidevice="日曜日";
}
console.log(tukidevice+'月'+hi+'日'+youbidevice);
