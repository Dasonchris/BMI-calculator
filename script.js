function calculateBMI() {
    // Retrieve input values
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Validate input
    if (isNaN(age) || age <= 0 || age > 120) {
        alert('Please enter a valid age.');
        return;
    }

    if (isNaN(height) || height <= 0 || height > 3) {
        alert('Please enter a valid height.');
        return;
    }

    if (isNaN(weight) || weight <= 0 || weight > 500) {
        alert('Please enter a valid weight.');
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    let bmiCategory = '';

    // Categorize BMI
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obese';
    }

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Your BMI is: <strong>${bmi.toFixed(2)}</strong></p>
        <p>Category: <strong>${bmiCategory}</strong></p>
    `;
}
