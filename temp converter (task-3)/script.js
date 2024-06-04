document.getElementById('convertBtn').addEventListener('click', function() {
    let temp = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;
    let result;

    if (isNaN(temp)) {
        result = "Please enter a valid number";
    } else {
        if (unit === 'celsius') {
            result = `${temp} °C = ${(temp * 9/5) + 32} °F = ${temp + 273.15} K`;
        } else if (unit === 'fahrenheit') {
            result = `${temp} °F = ${(temp - 32) * 5/9} °C = ${((temp - 32) * 5/9) + 273.15} K`;
        } else if (unit === 'kelvin') {
            result = `${temp} K = ${temp - 273.15} °C = ${(temp - 273.15) * 9/5 + 32} °F`;
        }
    }

    document.getElementById('result').innerText = result;
});
