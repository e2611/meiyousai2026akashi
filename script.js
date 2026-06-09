'use strict';
let data;
try {
  const response = await fetch('data.json');
  if (!response.ok) throw new Error('ファイルの読み込みに失敗しました');
  
  data = await response.json();
  console.log(data); // 取得したデータを利用
} catch (error) {
  console.error(error);
}

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
let nowfileName = window.location.pathname.split('/').pop();
console.log(nowfileName);
let nowclass=nowfileName.slice(0,-5);
console.log(nowclass);
const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  
  if (file) {
    const reader = new FileReader();
    
    // ファイルの読み込みが完了した時の処理
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target.result);
        console.log(jsonData);
      } catch (error) {
        console.error('JSONの解析に失敗しました', error);
      }
    };
    
    // テキストとしてファイルを読み込む
    reader.readAsText(file);
  }
});


