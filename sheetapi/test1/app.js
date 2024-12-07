const url = 'https://script.google.com/macros/s/AKfycbxoEcJ1jy93-rauzN_hP5He99kUG7vHQ9AN-XpsS__wJuVXtptYN-sux-vJDsfgAmJcBQ/exec';
const output = document.querySelector('.output');

// fetch(url, {
//   method: 'POST',
//   // body: JSON.stringify({ "selectedYear": 1998 }),
//   headers: {
//     'Content-Type': 'text/plain;charset=utf-8',
//   }
// })
//   .then(res => res.text())
//   .then(response => {
//     console.log("success:", response);
//   }).catch(err => {
//     console.log("Error:" + err);
//   });

getData();

function getData(){
  fetch(url).then((res)=>{
    return res.json()
  }).then((json)=>{
    console.log(json);
    json.data.forEach(ele => {
      // console.log(ele);
      const div = document.createElement('div');
      div.innerHTML = `<h2>${ele.title}</h2><p>${ele.desc}</p>`;
      output.append(div);

      const btn1 = document.createElement('button');
      btn1.innerHTML = `&#9652; ${ele.up}`;
      div.append(btn1);
      btn1.style.backgroundColor = 'green';
      btn1.classList.add('btn');

      const btn2 = document.createElement('button');
      btn2.innerHTML = `&#9662; ${ele.down}`;
      div.append(btn2);
      btn2.style.backgroundColor = 'red';
      btn2.classList.add('btn');

      btn1.addEventListener('click',(e)=>{
        const temp = {
          result : 'up',
          row : ele.row
        };
        sendData(temp,btn1);
      })
      btn2.addEventListener('click',(e)=>{
        const temp = {
          result : 'down',
          row : ele.row
        };
        sendData(temp,btn2);
      })
    });
  })
}

function sendData(obj,ele){
  console.log(obj);
  let formData = new FormData();
  formData.append('data',JSON.stringify(obj));
  fetch(url,{
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'text/plain;charset=utf-8',
    } 
  })
  // .then(res => res.text())
  // .then(response => {
  //   console.log("success:", response);
  // }).catch(err => {
  //   console.log("Error:" + err);
  // });
  // fetch(url)
  .then((rep)=>{
    return rep.json()
  }).then((json)=>{
    console.log(json);
    let temp = ele.textContent.slice(0,2);
    console.log(temp);
    ele.innerHTML = temp + json.val;
  })
  getData();
}