let redLight = document.getElementById("red");
let yellowLight = document.getElementById("yellow");
let greenLight = document.getElementById("green");
let timer; // variabel for å lagre tiden, og kunne stoppe den senere

function activateRed() { // funkjson for å aktivere rødt lys
    redLight.style.backgroundColor = "red";
    yellowLight.style.backgroundColor = "rgb(254, 254, 185)";
    greenLight.style.backgroundColor = "rgb(187, 255, 187)";
}
function activateYellowAndRed() { // funksjon for å aktivere gult og rødt lys
    redLight.style.backgroundColor = "red";
    yellowLight.style.backgroundColor = "yellow";
    greenLight.style.backgroundColor = "rgb(187, 255, 187)";
}
function activateGreen() { // funksjon for å aktivere grønt lys
    redLight.style.backgroundColor = "rgb(255, 187, 187)";
    yellowLight.style.backgroundColor = "rgb(254, 254, 185)";
    greenLight.style.backgroundColor = "green";
}

function activateLight() { // funksjon for å aktivere lysene i rekkefølge
    activateRed();
    setTimeout(activateYellowAndRed, 2000);
    setTimeout(activateGreen, 4000);
}

function startLight() { // funksjon for å starte lyset
    activateLight();
    timer = setInterval(activateLight, 6000);
}

function resetLights() { // funksjon for å stoppe lysene
    redLight.style.backgroundColor = "rgb(255, 187, 187)";
    yellowLight.style.backgroundColor = "rgb(254, 254, 185)";
    greenLight.style.backgroundColor = "rgb(187, 255, 187)";
    clearInterval(timer);
}