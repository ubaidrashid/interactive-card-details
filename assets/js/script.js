let naming = document.querySelector('#name');
let overlayName = document.querySelector('.overlay-name')
let number = document.querySelector('#number')
let months = document.querySelector('#months')
let years = document.querySelector('#years')
let confirm = document.querySelector('.confirm')
let formChild = document.querySelector('.form-child')
let frontNum = document.querySelector('.front-num')
let frontName = document.querySelector('.front-name')
let overlayNum = document.querySelector('.overlay-numError')
let overlayDate = document.querySelector('.overlay-date')
let month = document.querySelector('.month')
let year = document.querySelector('.year')
let inputCvc = document.querySelector('.input-cvc')
let overlayCvc = document.querySelector('.overlay-cvc')
let thanksContainer = document.querySelector('.thanks-container');
let zeroOnly = document.querySelector('.zero-only')




number.addEventListener('input', () => {
   let numValue = number.value;


   if (numValue.length > 19) {
      numValue = numValue.slice(0, 19);
      number.value = numValue;
   }
});
let monVal = months.value
months.addEventListener('input', () => {

   if (monVal.length > 2) {
      monVal = monVal.slice(0, 2);
      months.value = monVal
   }
})
let yeaVal = years.value
years.addEventListener('input', () => {

   if (yeaVal.length > 4) {
      yeaVal = yeaVal.slice(0, 4);
      years.value = yeaVal
   }
})
let cvcVal = inputCvc.value
inputCvc.addEventListener('input', () => {
   if (cvcVal.length > 4) {
      cvcVal = cvcVal.slice(0, 4);
      inputCvc.value = cvcVal
   }
})




// Function to handle validation
function validate() {
   // ===============================
   // name input 
   // ===============================
   let namings = naming.value;
   if (!namings) {
      overlayName.innerText = 'This field is required';
      overlayName.classList.remove('none');
      naming.style.borderColor = 'hsl(0, 100%, 66%)';
   } else {
      overlayName.innerText = '';
      overlayName.classList.add('none');
      naming.style.borderColor = '';
      frontName.innerText = namings;
   }

   // ===============================
   // num input 
   // ===============================
   let numValue = number.value;
   const validCharacters = /^[0-9 ]*$/;

   if (!validCharacters.test(numValue)) {
      overlayNum.innerText = 'Please enter a valid number';
      overlayNum.classList.remove('none');
      number.style.borderColor = 'hsl(0, 100%, 66%)';
   } else {
      overlayNum.innerText = '';
      overlayNum.classList.add('none');
      number.style.borderColor = '';
   }

   if (number.value === '') {
      overlayNum.innerText = 'This field is required';
      overlayNum.classList.remove('none');
      number.style.borderColor = 'hsl(0, 100%, 66%)';
   }

   const validFormat = /^[0-9]{4}( [0-9]{4}){3}$/;
   const digitsOnly = numValue.replace(/\s+/g, '');

   if (!validFormat.test(numValue) || digitsOnly.length !== 16) {
      overlayNum.innerText = 'Wrong formatting. Please enter in xxxx xxxx xxxx xxxx format with 16 digits.';
      overlayNum.classList.remove('none');
      overlayNum.style.bottom = '-40px';
      formChild.style.gap = '50px';
      number.style.borderColor = 'hsl(0, 100%, 66%)';
   } else {
      overlayNum.textContent = '';
      frontNum.innerHTML = numValue;
   }

   // ===============================
   // date input 
   // ===============================
   let monVal = months.value;
   let yeaVal = years.value;

   if (!monVal && !yeaVal) {
      overlayDate.classList.remove('none');
      months.style.borderColor = 'hsl(0, 100%, 66%)';
      years.style.borderColor = 'hsl(0, 100%, 66%)';
   } else {
      overlayDate.classList.add('none');

      if (!monVal) {
         months.style.borderColor = 'hsl(0, 100%, 66%)';
         years.style.borderColor = '';
      } else if (!yeaVal) {
         years.style.borderColor = 'hsl(0, 100%, 66%)';
         months.style.borderColor = '';
      } else {
         month.innerText = monVal;
         year.innerText = yeaVal;
         months.style.borderColor = '';
         years.style.borderColor = '';
      }
   }
   let cvcVal = inputCvc.value
   if (!cvcVal) {
      overlayCvc.classList.remove('none');
      inputCvc.style.borderColor = 'hsl(0, 100%, 66%)';
   } else {
      overlayCvc.classList.add('none');
      inputCvc.style.borderColor = '';
      zeroOnly.innerText = cvcVal
   }
   if (parseFloat(monVal) > 12) {
      overlayDate.classList.remove('none')
      overlayDate.innerText = 'Please enter a valid month'
      overlayDate.style.fontSize = 'x-small'
      months.style.borderColor = 'hsl(0, 100%, 66%)'
   } else if (monVal && yeaVal && cvcVal && numValue && namings) {
      formChild.classList.add('none')
      thanksContainer.classList.remove('none')
      overlayDate.classList.add('none')
      months.style.borderColor = ''

   } else {

   }

}

// Click event listener
confirm.addEventListener('click', validate);

// Enter key event listener
document.addEventListener('keydown', (event) => {
   if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission behavior
      validate();
   }
});
