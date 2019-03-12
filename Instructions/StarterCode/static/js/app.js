// from data.js
var tableData = data;

var tbody = d3.select("tbody");

data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.defineProperties(ufoReport.forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
});


// YOUR CODE HERE!
