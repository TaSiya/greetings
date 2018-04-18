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

let userGreeted = 'list 1' ;
counter.textContent = localStorage.getItem(userGreeted);
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
      count ++;
      localStorage.setItem(userGreeted, count);
      counter.textContent = localStorage.getItem(userGreeted);
   }

});

resetStorageBtn.addEventListener('click', function(){
localStorage.clear();
count = 0 ;
counter.textContent = count;
});

//functions below

//factory function
function FactoryNames(){
  var userGreeted = {};
  var count = 0 ;


  function getCount(){ return count; }
  function updateCount(){ count ++; }

  return {
    counts : getCount,
    countUpdate : updateCount
  }
}
