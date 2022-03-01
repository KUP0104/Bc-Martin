// Vytvoření kontextu canvas - plátno
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
 
// Vykreslení půdorysu
ctx.transform(1, 0, 0, -1, 0, canvas.height); // Obrácení hodnoty Y
ctx.strokeStyle = "black";
ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(10, 710);
ctx.lineTo(210, 710);
ctx.lineTo(210, 730);
ctx.lineTo(5, 730);
ctx.lineTo(5, 1130);
ctx.lineTo(460, 1130);
ctx.lineTo(460, 880);
ctx.lineTo(305, 880);
ctx.lineTo(305, 710);
ctx.lineTo(715, 710);
ctx.lineTo(715, 780);
ctx.lineTo(970, 780);
ctx.lineTo(970, 980);
ctx.lineTo(1170, 980);
ctx.lineTo(1170, 630);
ctx.lineTo(710, 630);
ctx.lineTo(710, 10);
ctx.closePath();
ctx.stroke();
ctx.fill();

 
    var client = io.connect("http://158.196.218.115:3000");
 
    client.on("connect", function() {
        console.log("connected");
    });
 
    client.on("disconnect", function() {
        console.log("disconnected");
    });
    client.on("messages-raw", function(messages) {
        for (var i = 0; i < messages.length; i++) {
            console.log(messages[i]);
        }
    });

    function start() {
        client.connect();
        // Načítání objektů
    client.on("objects-update", function(objects) {
        console.log("Objekt", (objects));
        arrayOfObjects.push(objects);
    })
    }   
var arrayOfObjects = [];
