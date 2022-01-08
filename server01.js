const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku
let data = {
    imie: "Stanisław",
    nazwisko: "Krzyworzeka",
    klasa: "3i1",
    grupa: "2"
}
app.get("/", function(req, res) {
    res.send("<h1>Moja aplikacja na heroku - zmiana pliku</h1><br><h3>Stanisław Krzyworzeka grII</h3>")
});
app.get("/data", function(req, res) {
    res.send(data)
});
app.listen(PORT, function() {
    console.log("start serwera na porcie terefere " + PORT)
})