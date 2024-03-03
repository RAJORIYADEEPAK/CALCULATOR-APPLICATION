
let buttons = document.querySelectorAll('button');
let input = document.getElementById('inputBox');

let result = "";
let arr = Array.from(buttons);

arr.forEach((button) =>{

    button.addEventListener('click' , (e)=>{

        let val = e.target.innerHTML;
        if(val == '='){
            result = eval(result);
        }
        else if(val == 'AC'){
            result = "";
        }
        else if(val == 'DEL'){
            result = result.substring(0, result.length-1);
        }
        else {
            result += val;
            
        }
        input.value = result;

    })
})