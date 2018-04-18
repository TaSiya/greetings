//text area
var textNameInput = document.querySelector('.textNameInput');
//counter
var counter = document.querySelector('.counter');
//greet button
var greetBtn = document.querySelector('.greetBtn');
//reset button
var resetStorageBtn = document.querySelector('.resetStorageBtn');
//radio buttons
var languageType = document.querySelector('.languageType');
//greeting message
var greet = document.querySelector('.greet');
//global variables

//
var storage = FactoryStorage();

let userGreeted = 'list 1' ;
let userData = 'users';
counter.textContent = localStorage.getItem(userGreeted);
localStorage.getItem(userData);

greetBtn.addEventListener('click', function(){
  var name = textNameInput.value;
   greet.classList.add('upper')
   var languageTypeCheck = '';
   var checkedRadioBtn = document.querySelector("input[name='languageType']:checked");
   if (checkedRadioBtn){
      languageTypeCheck = checkedRadioBtn.value;
   }
   if(languageTypeCheck ===''){

   }

   else{
      greet.textContent = languageTypeCheck + ', '+name;
      textNameInput.value ="";
      storage.checked(name);
      localStorage.setItem(userGreeted, storage.counts());
      localStorage.setItem(userData, storage.userMap());
      counter.textContent = localStorage.getItem(userGreeted);
   }
});

resetStorageBtn.addEventListener('click', function(){
localStorage.clear();
storage.settedCounts(0);
counter.textContent = storage.counts();
});

//functions below

//factory function
function FactoryStorage(){
  var namesGreeted = {};
  var count = 0 ;

  function checking(name){
    if(namesGreeted[name] === undefined){
      updateCount();
      namesGreeted[name] = updateCount();
    }
  }

  function getCount(){ return count; }
  function setCounts(value){ count = value; }
  function updateCount(){ count++; }

  function getMap(){ return namesGreeted[name] ; }

  return {
    counts : getCount,
    countUpdate : updateCount,
    settedCounts : setCounts,
    userMap : getMap,
    checked : checking
  }
}
