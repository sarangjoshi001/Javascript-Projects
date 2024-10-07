const btnClicked = document.getElementById('button');
const inputSlider = document.getElementById('inputSlider');
const sliderValue = document.getElementById('sliderValue');
const lowerCase = document.getElementById('lowerCase');
const upperCase = document.getElementById('upperCase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const passBox = document.getElementById('passBox');
const copyIcon = document.getElementById('copyIcon')

// Update slider value display
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
  sliderValue.textContent = inputSlider.value;
});

// Function to generate a password
function genPassword() {
  const charSets = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    nums: '0123456789',
    syms: '!@#$%^&*',
  };

  let allChars = '';
  if (lowerCase.checked) allChars += charSets.lower;
  if (upperCase.checked) allChars += charSets.upper;
  if (numbers.checked) allChars += charSets.nums;
  if (symbols.checked) allChars += charSets.syms;

  const passwordLength = parseInt(inputSlider.value);
  if (!allChars) return "Select at least one option!";

  return Array.from({ length: passwordLength }, () => 
    allChars[Math.floor(Math.random() * allChars.length)]
  ).join('');
}

// Function to update the password in the input box
btnClicked.addEventListener('click', () => {
  passBox.value = genPassword();
});

copyIcon.addEventListener('click',()=>{
  navigator.clipboard.writeText(passBox.value)
})
