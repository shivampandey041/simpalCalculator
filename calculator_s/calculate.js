// const toggleSwitch = document.querySelector('.them-switch input[type="checkbox"]');
// function switchTheme(e) {
//     if(e.target.checked) {
//         document.documentElement.setAttribute("data-theme","dark");
//     }else {
//         document.documentElement.setAttribute("data-theme","light");
//     }
// }

// toggleSwitch.addEventListener("change", switchTheme, false);



function calculate(data) {
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    
    switch(data){
        case 'AC':
            input.innerHTML = "";
            output.innerHTML = 0;
            break;
        case 'C':
            input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1);
            output.innerHTML = math.evaluate(input.innerHTML) === undefined ? 0: math.evaluate(input.innerHTML);
            break;
        case "=":
            output.innerHTML = math.evaluate(input.innerHTML);
            break;        
    default:
        input.innerHTML += data;
    }    
}