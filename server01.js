const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku
let data = {
    imie: "Stanisław",
    nazwisko: "Krzyworzeka",
    klasa: "3i1",
    grupa: "gr2"
}
app.get("/", function(req, res) {
    res.send("<a href='https://stanislawkrzyworzeka3i1gr2.herokuapp.com/data'>/data</a>")
});
app.get("/data", function(req, res) {
    res.send("<h1>" + data.imie + ", " + data.nazwisko + ", " + data.klasa + ", " + data.grupa + "</h1>")
});
app.listen(PORT, function() {
    console.log("start serwera na porcie terefere " + PORT)
})