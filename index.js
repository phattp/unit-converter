/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Conversion variables
const metersToFeet = 3.281
const feetToMeters = 1 / metersToFeet
const litersToGallons = 0.264
const gallonsToLiters = 1 / litersToGallons
const kilosToPounds = 2.204
const poundsToKilos = 1 / kilosToPounds

// Get the input element and button
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthP = document.getElementById("length-p")
const volumeP = document.getElementById("volume-p")
const massP = document.getElementById("mass-p")

// Function to convert the input value and display the results
function getValidInput() {
    const inputValue = Number(inputEl.value);
    if (isNaN(inputValue) || inputValue <= 0) {
        lengthP.textContent = "Please enter a valid positive number."
        volumeP.textContent = "Please enter a valid positive number."
        massP.textContent = "Please enter a valid positive number."
    } else {
        lengthP.textContent = `${inputValue} meters = ${(inputValue * metersToFeet).toFixed(3)} feet | ${inputValue} feet = ${(inputValue * feetToMeters).toFixed(3)} meters`
        volumeP.textContent = `${inputValue} liters = ${(inputValue * litersToGallons).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue * gallonsToLiters).toFixed(3)} liters`
        massP.textContent = `${inputValue} kilos = ${(inputValue * kilosToPounds).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue * poundsToKilos).toFixed(3)} kilos`
    }
}

// Add event listener to the button
// When the button is clicked, call the getValidInput function
// and pass the input value to it
convertBtn.addEventListener("click", function() {
    getValidInput()
})