document.getElementById("submitBtn").addEventListener("click", function() {
    let temp;

    if (document.getElementById("cbtn").checked) {
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°C";
    } else if (document.getElementById("fbtn").checked) {
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F";
    } else {
        document.getElementById("tempLabel").innerHTML = "Select a Unit";
    }
});

function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}

function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}
