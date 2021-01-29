
import * as all from './app.js';
const input = document.querySelector('#eventTitle')
const date = document.getElementById("date")
const countArea = document.getElementById("eventShow")
countArea.style.display='none'

let btn=document.querySelector('button');
  
btn.addEventListener('click', function (){
    if(input.value == '' && date.value == '' ){
        alert('please enter your event name and date..')

    }else{
        countArea.style.display='block'
    all.count();
    }
}); 


