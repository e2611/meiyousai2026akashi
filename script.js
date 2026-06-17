'use strict';


let baseMonday = new Date();


function baseinit() {
  let today = new Date();
  let dayOfWeek = today.getDay();

  let diffDays = 0;
  if (dayOfWeek === 0) {

    diffDays = 1;
  } else if (dayOfWeek === 6) {

    diffDays = 2;
  } else {

    diffDays = 1 - dayOfWeek;
  }


  baseMonday.setDate(today.getDate() + diffDays);


  renderWeek();
}


function renderWeek() {

  let month = baseMonday.getMonth() + 1;
  document.getElementById('month-display').textContent = `${month}月`;


  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  const labels = ['月', '火', '水', '木', '金'];


  for (let i = 0; i < 5; i++) {

    let targetDate = new Date(baseMonday);
    targetDate.setDate(baseMonday.getDate() + i);

    let hi = targetDate.getDate();

    document.getElementById(days[i]).textContent = `${hi}(${labels[i]})`;
  }
}


function nextWeek() {
  baseMonday.setDate(baseMonday.getDate() + 7);
  renderWeek();
}


function prevWeek() {
  baseMonday.setDate(baseMonday.getDate() - 7);
  renderWeek();
}


document.getElementById('nextweekchange').addEventListener('click', nextWeek);
document.getElementById('prevweekchange').addEventListener('click', prevWeek);


baseinit();
let nowfileName = window.location.pathname.split('/').pop();
console.log(nowfileName);
let nowclass = nowfileName.slice(0, -5);
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
    for (let i = 1; i < 6; i++) {
      switch (i) {
        case 1:
          youbi = "mon";
          break;
        case 2:
          youbi = "tues";
          break;
        case 3:
          youbi = "wednes";
          break;
        case 4:
          youbi = "thurs";
          break;
        case 5:
          youbi = "fri";
          break;
      }

      const dayMap = {
        mon: '月曜日',
        tues: '火曜日',
        wednes: '水曜日',
        thurs: '木曜日',
        fri: '金曜日'
      };

      for (let j = 1; j < 5; j++) {
        gen = j;
        const dayKey = dayMap[youbi];
        const daySchedule = thisclassschedule[dayKey] || {};
        const subject = daySchedule[String(j)] || '';
        const cell = document.getElementById(`${youbi}-${gen}`);
        if (cell) {
          cell.textContent = subject;
        }
        
          try{
            const newdata = await fetchJson('subject.json');
      console.log(newdata); // 取得したデータを利用
      let classdata = newdata.find(item => item.subject === subject);
      if (!classdata) {
        throw new Error(`subject.json に ${subject} のデータが見つかりません`);
        }
            console.log(subject)
            console.log(classdata);
            let luggagedata = classdata.lug;
            console.log(luggagedata);
            let sell = document.getElementById(`${youbi}-${gen}-bring`);
            console.log(sell);
            if(sell){
              sell.textContent = luggagedata;
            }

          } catch(error){
            console.error(error)
          }
       
      }
    }

  } catch (error) {
    console.error(error);
  }
}

init();
