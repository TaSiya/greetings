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



var storedData = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')): {};
var storage = FactoryStorage(storedData);

counter.textContent = storage.userLength();

greetBtn.addEventListener('click', function(){
  var name = textNameInput.value;
   greet.classList.add('upper')
   var languageTypeCheck = '';
   var checkedRadioBtn = document.querySelector("input[name='languageType']:checked");
   if (checkedRadioBtn){
      languageTypeCheck = checkedRadioBtn.value;
   }
   if(languageTypeCheck ===''){
      greet.textContent = 'Select language first';
   }

   else{
      if(name === ''){
         greet.textContent = 'Please enter your name';
         greet.style.background='yellow';
         greet.style.border='2px solid';
         greet.style.color='#333';
      }
      else{
         greet.style.background='none';
         greet.style.border='2px solid';
         greet.style.color='#fff';
         greet.textContent = languageTypeCheck + ', '+name;
         textNameInput.value ="";
         storage.setNames(name);
         storage.checked();
         localStorage.setItem('users', JSON.stringify(storage.userMap()));
         counter.textContent = storage.userLength();
      }

   }
});

resetStorageBtn.addEventListener('click', function(){
localStorage.clear();
location.reload();
counter.textContent = 0 ;

});

//functions below

//factory function
function FactoryStorage(storedData){
  var namesGreeted = {};
  var user = '';


  function setName(value){ user = value; }

  function checking(){

     if(storedData){
        namesGreeted = storedData;
     }

     if(user !== ''){
        if(namesGreeted[user] === undefined){
          namesGreeted[user] = 0;
        }
     }
     else{

     }
  }

  function countGreeted(){
     return Object.keys(storedData).length;
 }

  function getMap(){ return namesGreeted ; }

  return {
    userMap : getMap,
    checked : checking,
    userLength :countGreeted,
    setNames : setName
  }
}
