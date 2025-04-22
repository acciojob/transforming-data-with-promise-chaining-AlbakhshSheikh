//your JS code here. If required.
// Get DOM elements
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

// Function to create a delay using Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to process the number through transformations
function processNumber() {
  // Get and validate input
  const number = parseFloat(input.value);
  if (isNaN(number)) {
    output.textContent = "Please enter a valid number";
    return;
  }

  // Clear previous output
  output.textContent = "";

  // Initial promise
  new Promise(resolve => {
    setTimeout(() => {
      output.textContent = `Result: ${number}`;
      resolve(number);
    }, 2000); // 2-second delay
  })
    // Second promise: Multiply by 2
    .then(num => {
      return new Promise(resolve => {
        setTimeout(() => {
          const result = num * 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 2000); // 2-second delay
      });
    })
    // Third promise: Subtract 3
    .then(num => {
      return new Promise(resolve => {
        setTimeout(() => {
          const result = num - 3;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000); // 1-second delay
      });
    })
    // Fourth promise: Divide by 2
    .then(num => {
      return new Promise(resolve => {
        setTimeout(() => {
          const result = num / 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000); // 1-second delay
      });
    })
    // Fifth promise: Add 10
    .then(num => {
      return new Promise(resolve => {
        setTimeout(() => {
          const result = num + 10;
          output.textContent = `Final Result: ${result}`;
          resolve(result);
        }, 1000); // 1-second delay
      });
    })
    .catch(error => {
      output.textContent = "An error occurred";
      console.error(error);
    });
}

// Add event listener to the button
button.addEventListener("click", processNumber);