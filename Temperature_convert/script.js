

document.getElementById("convertBtn").onclick = function() {
    let temperatureInput = document.getElementById("temperature").value;
    let resultElement = document.getElementById("result");
    let cToF = document.getElementById("cToF").checked;
    let fToC = document.getElementById("fToC").checked;

    if (temperatureInput === "" || isNaN(temperatureInput)) {
        resultElement.innerText = "Please enter a valid number.";
        return;
    }

    let temperature = parseFloat(temperatureInput);
    let result;

    if (cToF) {
        result = (temperature * 9/5) + 32;
        resultElement.innerText = `${temperature}°C is ${result.toFixed(2)}°F`;
    } else if (fToC) {
        result = (temperature - 32) * 5/9;
        resultElement.innerText = `${temperature}°F is ${result.toFixed(2)}°C`;
    } else {
        resultElement.innerText = "Please select a conversion type.";
    }
}


