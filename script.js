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
  document.getElementById('tuesday').textContent=`${hi}(木)`;
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
let nowfileName = window.location.pathname.split('/').pop();
console.log(nowfileName);
let nowclass=nowfileName.slice(0,-5);
console.log(nowclass);

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error('ファイルの読み込みに失敗しました');
  return await response.json();
}

async function init() {
  try {
    const data = await fetchJson('class.json');
    console.log(data); // 取得したデータを利用
    const thisclassschedule = data.find(item => item.class === nowclass);
    if (!thisclassschedule) {
      throw new Error(`class.json に ${nowclass} のデータが見つかりません`);
    }
    let gen;
    let youbi;
for(let i=1; i<6; i++){
    switch(i){
      case 1:
        youbi="mon";
        break;
      case 2:
        youbi="tues";
        break;
      case 3:
        youbi="wednes";
        break;
      case 4:
        youbi="thurs";
        break;
      case 5:
        youbi="fri";
        break;}
    
  const dayMap = {
    mon: '月曜日',
    tues: '火曜日',
    wednes: '水曜日',
    thurs: '木曜日',
    fri: '金曜日'
  };

  for(let j=1; j<5; j++){
    gen = j;
    const dayKey = dayMap[youbi];
    const daySchedule = thisclassschedule[dayKey] || {};
    const subject = daySchedule[String(j)] || '';
    const cell = document.getElementById(`${youbi}-${gen}`);
    if (cell) {
      cell.textContent = subject;
    }
  }
}

  } catch (error) {
    console.error(error);
  }
}

init();
