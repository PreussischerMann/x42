var disp = document.querySelector('.display');
//var spin = document.querySelector('.spin');
var entname = document.querySelector('#addname');
var subname = document.querySelector('#submitname');
var declare = document.querySelector('#declare');

//SET NAMES
var nameslist = ["Tom", "Joe", "Ron", "Alex", "Jack"];

var namenum = -1;
var disttime = Math.round(Math.random() * 20000);

function bspin(){
  spintime = setInterval(() => {
    namenum += 1;
    disp.innerHTML = nameslist[namenum];
    if(namenum === (nameslist.length - 1)){
      namenum = -1;
    }
  }, 100);
}

function clearint(){
    clearInterval(spintime);
};

/*function respin(){
  spin.style.fontSize = '15px';
  spin.innerHTML = 'SPIN AGAIN';
}
function onspin(){
  spin.style.fontSize = '30px';
  spin.innerHTML = 'SPIN';
}*/

function wdeclare(){
  declare.innerHTML = "THE WINNER IS " + disp.innerHTML.toUpperCase();
  Notification.requestPermission().then(perm => {
    if(perm === "granted"){
      new Notification(disp.innerHTML + " has won this round", {
        body: "Come collect your winnings!!!"
      })
    }
  })
}

function overspin(){
  //onspin();
  bspin();
  let randtime = (Math.random() * 20000);
  setTimeout(clearint, randtime);
  setTimeout(wdeclare, randtime);
  //setTimeout(respin, (randtime + 2000));
}

function entername(){
  nameslist.push(entname.value);
}

bstart = setInterval(() => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  //SET TIME
  if(hrs == 13 && mins == 42 && secs == 00){
    new Notification("Round 0 starts now!!!");
    overspin();
  }
}, 1000)
