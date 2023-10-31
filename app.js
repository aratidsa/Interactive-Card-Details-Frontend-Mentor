
/* -------------Variables------------------- */

const cardHolderName = document.querySelector('.cardHolder-name')
const cardNumber = document.querySelector('.card-number')
const monthNumber = document.querySelector('.month')
const yearNumber = document.querySelector('.year')
const cvcNumber = document.querySelector('.cvc')
const myform = document.getElementById('myform')

const displayCardName = document.querySelector('.card-name-txt')
const displayCardNumber = document.querySelector('.card-number-txt')
const displayMonthNumber= document.querySelector('.month-date')
const displayYearNumber= document.querySelector('.year-date')
const displayCVCNumber = document.querySelector('.cvc-number')

const blankCardName = document.querySelector('.error-blank-name')
const blankCardNumber = document.querySelector('.error-blank-number')
const blankDate = document.querySelector('.error-blank-date')
const blankCVCNumber = document.querySelector('.error-blank-cvc')

const lengthCVCNumber = document.querySelector('.error-cvc')
const lengthCardNumber = document.querySelector('.error-number')

const confirmButton = document.querySelector('.confirm-btn')
const continueButton = document.querySelector('.continue-btn')

const thankyouMsg = document.querySelector('.thankyou-msg')


// Function to allow only alphabetic characters
function onlyAlphabets(e) {
  var input = e.target.value;
  var alphabeticPattern = /^[a-zA-Z\s]+$/
  if (!alphabeticPattern.test(input)){    
       e.target.value = input.replace(/[^a-zA-Z]+/g, '')
  } 
  } 

// Add an event listener to the input element
cardHolderName.addEventListener('input', function() {
    displayCardName.textContent = cardHolderName.value
    if (cardHolderName.value !== '') {
      blankCardName.style.display = 'none'
      cardHolderName.style.borderColor = 'hsl(270, 3%, 87%)'
    }
  })

cardNumber.addEventListener('input', function() {
   const inputValue = cardNumber.value.replace(/\D/g, '')
   let formattedValue = ''
  for (let i = 0; i < inputValue.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedValue += ' '
    }
    formattedValue += inputValue[i]
  }
     cardNumber.value = formattedValue
     displayCardNumber.textContent = formattedValue

    if (cardNumber.value !== '') {
      blankCardNumber.style.display = 'none'
      cardNumber.style.borderColor = 'hsl(270, 3%, 87%)'
    }

    if (cardNumber.value.length !== 19) {
        lengthCardNumber.style.display = 'block';
        cardNumber.style.borderColor = 'hsl(0, 100%, 66%)'            
      } else {
        lengthCardNumber.style.display = 'none'
        cardNumber.style.borderColor = 'hsl(270, 3%, 87%)'
      }
 })

// Add an event listener to the input element
monthNumber.addEventListener('blur', function() {
  let inputValue = monthNumber.value.replace(/\D/g, '')
  if (inputValue < 1) {
    inputValue = '01'
} else if (inputValue > 12) {
    inputValue = '12'
} else if (inputValue.length === 1) {
       inputValue = '0' + inputValue    
}
  displayMonthNumber.textContent = inputValue
  monthNumber.value = inputValue;
  hideerrorMessage()
})

// Add an event listener to the input element
yearNumber.addEventListener('blur', function() {
  let inputValue = yearNumber.value.replace(/\D/g, '')
if(inputValue.length === 1)
{
  if (inputValue >= 1 && inputValue <= 9) {
    inputValue = '0' + inputValue    
  }
}
  displayYearNumber.textContent = inputValue
  yearNumber.value = inputValue
  hideerrorMessage()
})

// Add an event listener to the input element
cvcNumber.addEventListener('input', function() {
  const inputValue = cvcNumber.value.replace(/\D/g, '')
  displayCVCNumber.textContent = inputValue
  if ( cvcNumber.value !== '') {
    blankCVCNumber.style.display = 'none'
  }
  if (cvcNumber.value.length !== 3) {
    lengthCVCNumber.style.display = 'block'
    cvcNumber.style.borderColor = 'hsl(0, 100%, 66%)'
  } else {
    lengthCVCNumber.style.display = 'none'
    cvcNumber.style.borderColor = 'hsl(270, 3%, 87%)'
  }
})

confirmButton.addEventListener('click', function(e) {
    e.preventDefault()
    if (cardHolderName.value === '') {
      blankCardName.style.display = 'block'
      cardHolderName.style.borderColor = 'hsl(0, 100%, 66%)'
    }
    if (cardNumber.value === '') {
    blankCardNumber.style.display = 'block'
    cardNumber.style.borderColor = 'hsl(0, 100%, 66%)'
    }
    if (monthNumber.value === '') {
    blankDate.style.display = 'block'
    monthNumber.style.borderColor = 'hsl(0, 100%, 66%)'
    }
    if (yearNumber.value === '' ) {
    blankDate.style.display = 'block'
    yearNumber.style.borderColor = 'hsl(0, 100%, 66%)'
    }
    if (cvcNumber.value === '') {
    blankCVCNumber.style.display = 'block'
    cvcNumber.style.borderColor = 'hsl(0, 100%, 66%)'
    }
    if (
      cardHolderName.value.trim() !== '' &&  cardNumber.value.length === 19 &&
      monthNumber.value !== '' &&  yearNumber.value !== '' &&
      cvcNumber.value !== '' &&  cvcNumber.value.length === 3)
    {
      thankyouMsg.style.display = 'block'
      myform.style.display = 'none'
    }
})

continueButton.addEventListener('click', function () {
  // Clear input values
  cardHolderName.value = ''
  cardNumber.value = ''
  monthNumber.value = ''
  yearNumber.value = ''
  cvcNumber.value = ''

  // Clear error messages
  blankCVCNumber.style.display = 'none'
  blankDate.style.display = 'none'
  blankCardNumber.style.display = 'none'
  blankCardName.style.display = 'none'
  lengthCVCNumber.style.display = 'none'
  lengthCardNumber.style.display = 'none'

  // Reset the form (optional)
  myform.reset();
  myform.style.display = 'block'
  thankyouMsg.style.display = 'none'

  displayCVCNumber.textContent = "000"
  displayCardNumber.textContent = "0000 0000 0000 0000"
  displayCardName.textContent = "Jane Appleseed"
  displayMonthNumber.textContent = "00"
  displayYearNumber.textContent = "00" 

  blankCVCNumber.style.marginTop = '-23px'
  
})

function hideerrorMessage()
{
  if(monthNumber.value !== '' && yearNumber.value !== '')
  {
    blankDate.style.display = 'none'
    blankCVCNumber.style.marginTop = '0'
    lengthCVCNumber.style.marginTop = '0'       
  }
  if(monthNumber.value !== '')
  {
    monthNumber.style.borderColor = 'hsl(270, 3%, 87%)'
  }
  if(yearNumber.value !== '')
  {
    yearNumber.style.borderColor = 'hsl(270, 3%, 87%)'
  }

}

