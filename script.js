document.getElementById("safetyForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const gasLevel = document.getElementById("gasLevel").value;
    const temperature = document.getElementById("temperature").value;
    const humidity = document.getElementById("humidity").value;
    if (gasLevel === "" || temperature === "" || humidity === "") {
        alert("Please fill out all fields.");
        return;
    }

    const dataDisplay = document.getElementById("dataDisplay");
    const newEntry = <p>Gas Level: ${gasLevel} ppm, Temperature: ${temperature} °C, Humidity: ${humidity} %</p>;
    dataDisplay.innerHTML = newEntry + dataDisplay.innerHTML;
    document.getElementById("safetyForm").reset();
});