let input = document.querySelector('.inpt');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(buttons =>{
    buttons.addEventListener('click' , function(event){
        if(event.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(event.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(event.target.innerHTML == '00'){
            string = "00";
            input.value = string;
        }
        else if(event.target.innerHTML == 'DEL'){
            string = string.slice(0 , (input.value.length) - 1);
            input.value = string;
            console.log(string);
        }
        else{
            string += event.target.innerHTML;
            input.value = string;
        }
    })
})

document.addEventListener("contextmenu", (e)=>{
    e.preventDefault();
},false);