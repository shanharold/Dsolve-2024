function validateName() {
    const nameInput = document.getElementById("nameInput").value.trim(); // Get the value of the input field and trim whitespace

    // Regular expression to match alphabetic characters and spaces
    const nameRegex = /^[a-zA-Z\s]+$/;

    // Check if the name input matches the regex pattern
    if (nameInput === "" || !nameRegex.test(nameInput)) {
        // Invalid name input
        document.getElementById("validationMessage").textContent = "Please enter a valid name (only alphabetic characters and spaces).";
    } else {
        // Valid name input
        document.getElementById("validationMessage").textContent = "Valid name!";
        // You can proceed with form submission or other actions here
    }
}