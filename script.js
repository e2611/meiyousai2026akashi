'use strict';

//曜日決め
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
  let karidate=new Date();
  document.getElementById('monday').textContent=`${hi}(月)`;
  karidate.setDate(Presentdate.getDate()+1);
  hi=karidate.getDate()
  document.getElementById('tuesday').textContent=`${hi}(火)`;
  karidate.setDate(Presentdate.getDate()+2);
  hi=karidate.getDate()
  document.getElementById('wednesday').textContent=`${hi}(水)`;
  karidate.setDate(Presentdate.getDate()+3);
  hi=karidate.getDate()
  document.getElementById('thursday').textContent=`${hi}(木)`;
  karidate.setDate(Presentdate.getDate()+4);
  hi=karidate.getDate()
  document.getElementById('friday').textContent=`${hi}(金)`;
}
if(youbi==2){
  youbidevice="火曜日";
  let karidate=new Date();
  document.getElementById('tuesday').textContent=`${hi}(火)`;
  karidate.setDate(Presentdate.getDate()+1);
  hi=karidate.getDate()
  document.getElementById('wednesday').textContent=`${hi}(水)`;
  karidate.setDate(Presentdate.getDate()+2);
  hi=karidate.getDate()
  document.getElementById('thursday').textContent=`${hi}(木)`;
  karidate.setDate(Presentdate.getDate()+3);
  hi=karidate.getDate()
  document.getElementById('friday').textContent=`${hi}(金)`;
  karidate.setDate(Presentdate.getDate()-1);
  hi=karidate.getDate()
  document.getElementById('monday').textContent=`${hi}(月)`;
}
if(youbi==3){
  youbidevice="水曜日";
  let karidate=new Date();
  document.getElementById('wednesday').textContent=`${hi}(水)`;
  karidate.setDate(Presentdate.getDate()+1);
  hi=karidate.getDate()
  document.getElementById('thursday').textContent=`${hi}(木)`;
  karidate.setDate(Presentdate.getDate()+2);
  hi=karidate.getDate()
  document.getElementById('friday').textContent=`${hi}(金)`;
  karidate.setDate(Presentdate.getDate()-1);
  hi=karidate.getDate()
  document.getElementById('tuesday').textContent=`${hi}(火)`;
  karidate.setDate(Presentdate.getDate()-2);
  hi=karidate.getDate()
  document.getElementById('monday').textContent=`${hi}(月)`;
  
}
if(youbi==4){
  youbidevice="木曜日";
  let karidate=new Date();
  document.getElementById('thursday').textContent=`${hi}(木)`;
  karidate.setDate(Presentdate.getDate()+1);
  hi=karidate.getDate()
  document.getElementById('friday').textContent=`${hi}(金)`;
  karidate.setDate(Presentdate.getDate()-1);
  hi=karidate.getDate()
  document.getElementById('wednesday').textContent=`${hi}(水)`;
  karidate.setDate(Presentdate.getDate()-2);
  hi=karidate.getDate()
  document.getElementById('thursday').textContent=`${hi}(木)`;
  karidate.setDate(Presentdate.getDate()-3);
  hi=karidate.getDate()
  document.getElementById('monday').textContent=`${hi}(月)`;
}
if(youbi==5){
  youbidevice="金曜日";
  let karidate=new Date();
  document.getElementById('friday').textContent=`${hi}(金)`;
  karidate.setDate(Presentdate.getDate()-1);
  hi=karidate.getDate()
  document.getElementById('thursday').textContent=`${hi}(木)`;
  karidate.setDate(Presentdate.getDate()-2);
  hi=karidate.getDate()
  document.getElementById('wednesday').textContent=`${hi}(水)`;
  karidate.setDate(Presentdate.getDate()-3);
  hi=karidate.getDate()
  document.getElementById('tuesday').textContent=`${hi}(火)`;
  karidate.setDate(Presentdate.getDate()-4);
  hi=karidate.getDate()
  document.getElementById('monday').textContent=`${hi}(月)`;
}
if(youbi==6){
  youbidevice="土曜日";
  let karidate=new Date();
  karidate.setDate(Presentdate.getDate()+2);
  hi=karidate.getDate()
  document.getElementById('monday').textContent=`${hi}(月)`;
  karidate.setDate(Presentdate.getDate()+3);
  hi=karidate.getDate()
  document.getElementById('tuesday').textContent=`${hi}(火)`;
  karidate.setDate(Presentdate.getDate()+4);
  hi=karidate.getDate()
  document.getElementById('wednesday').textContent=`${hi}(水)`;
  karidate.setDate(Presentdate.getDate()+5);
  hi=karidate.getDate()
  document.getElementById('thursday').textContent=`${hi}(木)`;
  karidate.setDate(Presentdate.getDate()+6);
  hi=karidate.getDate()
  document.getElementById('friday').textContent=`${hi}(金)`;
}
if(youbi==0){
  youbidevice="日曜日";
  let karidate=new Date();
  karidate.setDate(Presentdate.getDate()+1);
  hi=karidate.getDate()
  document.getElementById('monday').textContent=`${hi}(月)`;
  karidate.setDate(Presentdate.getDate()+2);
  hi=karidate.getDate()
  document.getElementById('tuesday').textContent=`${hi}(火)`;
  karidate.setDate(Presentdate.getDate()+3);
  hi=karidate.getDate()
  document.getElementById('wednesday').textContent=`${hi}(水)`;
  karidate.setDate(Presentdate.getDate()+4);
  hi=karidate.getDate()
  document.getElementById('thursday').textContent=`${hi}(木)`;
  karidate.setDate(Presentdate.getDate()+5);
  hi=karidate.getDate()
  document.getElementById('friday').textContent=`${hi}(金)`;
}
//曜日調整終わり

//授業表示
document.getElementsByClassName('zoukei')[0].textContent=`造形`;
document.getElementsByClassName('bousai')[0].textContent=`防災リテラシー`;
document.getElementsByClassName('english1a')[0].textContent=`英語ⅠA`;
document.getElementsByClassName('math1a')[0].textContent=`数学ⅠA`;
document.getElementsByClassName('datescience')[0].textContent=`データサイエンス入門`;
document.getElementsByClassName('kentikusekkeiensyu1a')[0].textContent=`建築設計演習ⅠA`;
document.getElementsByClassName('math1b')[0].textContent=`数学ⅠB`;
document.getElementsByClassName('japanese1')[0].textContent=`国語Ⅰ`;
document.getElementsByClassName('music-or-art')[0].textContent=`音楽・美術選択`;
document.getElementsByClassName('zyouhoukiso1')[0].textContent=`情報基礎Ⅰ`;
document.getElementsByClassName('ALnyuumon')[0].textContent=`アクティブラーニング入門`;
document.getElementsByClassName('english1b')[0].textContent=`英語ⅠB`;
document.getElementsByClassName('pe1')[0].textContent=`体育Ⅰ`;
document.getElementsByClassName('science1')[0].textContent=`サイエンスⅠ`;
document.getElementsByClassName('kentikuippankouzou')[0].textContent=`建築一般構造`;
document.getElementsByClassName('HR')[0].textContent=`HR`;
document.getElementsByClassName('blank')[0].textContent=`空きコマ`;
document.getElementsByClassName('history1')[0].textContent=`歴史`;
