
const keyC = document.getElementById('keycode');
const code = document.getElementById('code');
const char = document.getElementById('char');

// function keycode(){
//     let key = event.keyCode;
//     console.log(key);
//     let code = event.code;
//     console.log(code)
//     let char = String.fromCharCode(key);
//     console.log(char);
// }

document.addEventListener('keydown', (event) => { //the event listener trigger the function when the event happens in the browser
    let key = event.keyCode;
    keyC.innerHTML = event.keyCode;
    code.innerHTML = event.code;
    char.innerHTML = String.fromCharCode(key);
    
})

    keyC.style.color = "lightseagreen";
    keyC.style.fontSize = "12vh";
    code.style.color = "salmon";
    code.style.fontSize = "12vh";
    char.style.color = "lightseagreen";
    char.style.fontSize = "12vh";

