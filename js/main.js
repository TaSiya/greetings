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
   }

});

resetStorageBtn.addEventListener('click', function(){

});
