let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Handle the "=" button
    if (e.target.innerHTML == '=') {
      try {
        // Replace 'X' with '*' for multiplication
        string = string.replace(/X/g, '*');
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error"; // In case of invalid input
      }
    } 
    // Handle the "DEL" button
    else if (e.target.innerHTML == 'DEL') {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } 
    // Handle the "AC" button
    else if (e.target.innerHTML == 'AC') {
      string = '';
      input.value = string;
    } 
    // Handle all other button clicks
    else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
